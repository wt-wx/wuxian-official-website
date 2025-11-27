/**
 * 获取或创建访客 ID
 * 存储在 localStorage 中，用于标识匿名访客
 */
export function getOrCreateVisitorId(): string {
    const STORAGE_KEY = 'wt_visitor_id'

    // 尝试从 localStorage 获取
    let visitorId = localStorage.getItem(STORAGE_KEY)

    if (!visitorId) {
        // 生成新的访客 ID: visitor_时间戳_随机串
        visitorId = `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
        localStorage.setItem(STORAGE_KEY, visitorId)
    }

    return visitorId
}
