// === 配置区 ===
const BACKENDS = [
    {
        name: "vercel",
        url: "https://vercel.wuxian.xyz",
        weight: 2,
        region: "US"
    },
    {
        name: "render",
        url: "https://render.wuxian.xyz",
        weight: 2,
        region: "EU"
    },
    {
        name: "qcloud",
        url: "https://qcloud.wuxian.xyz",
        weight: 2,  // 国内用户优先
        region: "CN"
    },
    {
        name: "netlify",
        url: "https://netlify.wuxian.xyz",
        weight: 3,
        region: "GLOBAL"
    }
];

const TIMEOUT_MS = 1800;  // 超时切换到下一个源
const HEALTHCHECK_PATH = "/"; // 健康检查路径
const USE_RACE = true; // 开启"谁先返回用谁"（智能最快源）
const USE_GEO_ROUTING = true; // 开启地理位置智能路由
const CACHE_STATIC = true; // 缓存静态资源

// 地理位置路由映射
const GEO_ROUTING = {
    'CN': 'qcloud',      // 中国大陆 → 腾讯云
    'HK': 'qcloud',      // 香港 → 腾讯云
    'TW': 'qcloud',      // 台湾 → 腾讯云
    'US': 'vercel',      // 美国 → Vercel
    'CA': 'vercel',      // 加拿大 → Vercel
    'GB': 'netlify',     // 英国 → Netlify
    'DE': 'netlify',     // 德国 → Netlify
    'FR': 'netlify',     // 法国 → Netlify
    'default': 'render'  // 其他 → Render
};

// === 工具函数 ===
async function fetchWithTimeout(url, options = {}) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);
    const startTime = Date.now();

    try {
        const res = await fetch(url, { ...options, signal: controller.signal });
        clearTimeout(timeout);
        const latency = Date.now() - startTime;
        return { res, latency };
    } catch (e) {
        clearTimeout(timeout);
        return { res: null, latency: Date.now() - startTime };
    }
}

async function raceBackends(request) {
    const fetches = BACKENDS.map(b =>
        fetchWithTimeout(b.url + request.url.replace(/^https?:\/\/[^/]+/, ""), {
            method: request.method,
            headers: request.headers,
            body: request.method === "GET" ? undefined : request.body,
            redirect: "follow"
        }).then(({ res, latency }) => ({ backend: b, res, latency }))
    );

    try {
        const winner = await Promise.any(fetches.map(p => p.then(x => {
            if (x.res && x.res.ok) return x;
            throw new Error("Bad backend");
        })));

        // 添加响应头标识后端
        const response = new Response(winner.res.body, winner.res);
        response.headers.set('X-Backend-Used', winner.backend.name);
        response.headers.set('X-Backend-Latency', winner.latency + 'ms');
        return response;
    } catch (e) {
        return new Response("All backends failed in race mode", { status: 502 });
    }
}

function weightedSelect(backends) {
    const list = [];
    for (const b of backends) {
        for (let i = 0; i < b.weight; i++) {
            list.push(b);
        }
    }
    return list[Math.floor(Math.random() * list.length)];
}

function getPreferredBackend(request) {
    if (!USE_GEO_ROUTING) return null;

    const country = request.cf?.country || 'default';
    const preferred = GEO_ROUTING[country] || GEO_ROUTING.default;
    return BACKENDS.find(b => b.name === preferred);
}

async function sequentialFallback(request, preferredBackend = null) {
    // 优先尝试地理位置推荐的后端
    const orderedBackends = preferredBackend
        ? [preferredBackend, ...BACKENDS.filter(b => b !== preferredBackend)]
        : BACKENDS;

    for (const backend of orderedBackends) {
        const target = backend.url + request.url.replace(/^https?:\/\/[^/]+/, "");
        const { res, latency } = await fetchWithTimeout(target, {
            method: request.method,
            headers: request.headers,
            body: request.method === "GET" ? undefined : request.body,
            redirect: "follow"
        });

        if (res && res.ok) {
            const response = new Response(res.body, res);
            response.headers.set('X-Backend-Used', backend.name);
            response.headers.set('X-Backend-Latency', latency + 'ms');
            response.headers.set('X-Fallback-Mode', 'true');
            return response;
        }
    }

    return new Response("All backends failed", { status: 502 });
}

async function handleWithCache(request) {
    // 只缓存 GET 请求的静态资源
    if (request.method !== 'GET' || !CACHE_STATIC) {
        return USE_RACE ? await raceBackends(request) : await sequentialFallback(request);
    }

    const url = new URL(request.url);
    const isStatic = /\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot|webp)$/.test(url.pathname);

    if (!isStatic) {
        return USE_RACE ? await raceBackends(request) : await sequentialFallback(request);
    }

    // 使用 Cloudflare Cache API
    const cache = caches.default;
    const cacheKey = new Request(url.toString(), request);

    let response = await cache.match(cacheKey);
    if (response) {
        response = new Response(response.body, response);
        response.headers.set('X-Cache-Status', 'HIT');
        return response;
    }

    // 缓存未命中，获取新响应
    response = USE_RACE ? await raceBackends(request) : await sequentialFallback(request);

    if (response.ok) {
        const clonedResponse = new Response(response.body, response);
        clonedResponse.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
        clonedResponse.headers.set('X-Cache-Status', 'MISS');

        // 异步写入缓存，不阻塞响应
        await cache.put(cacheKey, clonedResponse.clone());
        return clonedResponse;
    }

    return response;
}

// === 主入口 ===
export default {
    async fetch(request, env, ctx) {
        try {
            // 健康检查端点
            const url = new URL(request.url);
            if (url.pathname === '/_health') {
                return new Response(JSON.stringify({
                    status: 'healthy',
                    backends: BACKENDS.map(b => b.name),
                    timestamp: new Date().toISOString()
                }), {
                    headers: { 'Content-Type': 'application/json' }
                });
            }

            // 智能竞速策略
            if (USE_RACE) {
                return await handleWithCache(request);
            }

            // 地理位置智能路由 + 权重策略
            const preferredBackend = getPreferredBackend(request);
            const selected = preferredBackend || weightedSelect(BACKENDS);
            const target = selected.url + url.pathname + url.search;

            const { res, latency } = await fetchWithTimeout(target, {
                method: request.method,
                headers: request.headers,
                body: request.method === "GET" ? undefined : request.body,
                redirect: "follow"
            });

            if (res && res.ok) {
                const response = new Response(res.body, res);
                response.headers.set('X-Backend-Used', selected.name);
                response.headers.set('X-Backend-Latency', latency + 'ms');
                response.headers.set('X-Geo-Routing', preferredBackend ? 'true' : 'false');
                return response;
            }

            // 回退机制
            return await sequentialFallback(request, selected);

        } catch (e) {
            return new Response(JSON.stringify({
                error: "Worker Error",
                message: e.message,
                timestamp: new Date().toISOString()
            }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }
    }
};
