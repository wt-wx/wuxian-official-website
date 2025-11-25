<template>
  <div class="products-page">
    <!-- 页面头部 -->
    <section class="page-header">
      <div class="container">
        <div class="header-content" data-aos="fade-up">
          <h1 class="page-title">产品功能</h1>
          <p class="page-subtitle">五大核心应用，构建完整的业务生态系统</p>
        </div>
      </div>
    </section>

    <!-- 产品概览 -->
    <section class="products-overview">
      <div class="container">
        <div class="overview-grid">
          <div class="overview-item" data-aos="fade-up" data-aos-delay="100">
            <div class="overview-number">5</div>
            <div class="overview-label">核心应用</div>
          </div>
          <div class="overview-item" data-aos="fade-up" data-aos-delay="200">
            <div class="overview-number">94%</div>
            <div class="overview-label">整体完成度</div>
          </div>
          <div class="overview-item" data-aos="fade-up" data-aos-delay="300">
            <div class="overview-number">95%</div>
            <div class="overview-label">API支持率</div>
          </div>
          <div class="overview-item" data-aos="fade-up" data-aos-delay="400">
            <div class="overview-number">100%</div>
            <div class="overview-label">生产就绪</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 产品详情 -->
    <section class="products-detail">
      <div class="container">
        <div
          v-for="(product, index) in products"
          :key="product.id"
          class="product-section"
          :id="product.name"
          data-aos="fade-up"
        >
          <div class="row align-items-center">
            <div :class="['col-12', 'col-lg-6', { 'order-lg-2': index % 2 !== 0 }]" >
              <div class="product-info">
                <div class="product-badge">{{ product.category }}</div>
                <h2 class="product-title">{{ product.name }}</h2>
                <h3 class="product-subtitle">{{ product.title }}</h3>
                <p class="product-description">{{ product.description }}</p>
                <div class="product-features">
                  <div v-for="feature in product.features" :key="feature" class="feature-item">
                    <el-icon><Check /></el-icon>
                    <span>{{ feature }}</span>
                  </div>
                </div>
                <div class="product-progress">
                  <div class="progress-info">
                    <span class="progress-label">完成度</span>
                    <span class="progress-value">{{ product.progress }}%</span>
                  </div>
                  <div class="progress-bar">
                    <div class="progress-fill" :style="{ width: product.progress + '%' }"></div>
                  </div>
                </div>
              </div>
            </div>
            <div :class="['col-12', 'col-lg-6', { 'order-lg-1': index % 2 !== 0 }]" >
              <div class="product-visual">
                <img v-if="product.image_url" :src="product.image_url" :alt="product.title" class="product-image" />
                <div v-else class="visual-placeholder">
                  <el-icon><Monitor v-if="product.category === 'Web应用'" /><Cellphone v-else /></el-icon>
                  <p>{{ product.title }}界面</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 技术栈展示 -->
    <section class="tech-stack">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <h2 class="section-title">技术栈</h2>
          <p class="section-subtitle">采用现代化技术栈，确保系统的稳定性和可扩展性</p>
        </div>
        <div class="tech-grid">
          <div class="tech-category" data-aos="fade-up" data-aos-delay="100">
            <h3 class="tech-title">前端技术</h3>
            <div class="tech-items">
              <span class="tech-item">Vue 3</span>
              <span class="tech-item">TypeScript</span>
              <span class="tech-item">Element Plus</span>
              <span class="tech-item">Vite</span>
              <span class="tech-item">uni-app</span>
            </div>
          </div>
          <div class="tech-category" data-aos="fade-up" data-aos-delay="200">
            <h3 class="tech-title">后端技术</h3>
            <div class="tech-items">
              <span class="tech-item">FastAPI</span>
              <span class="tech-item">Go</span>
              <span class="tech-item">PostgreSQL</span>
              <span class="tech-item">Redis</span>
              <span class="tech-item">WebSocket</span>
            </div>
          </div>
          <div class="tech-category" data-aos="fade-up" data-aos-delay="300">
            <h3 class="tech-title">移动端技术</h3>
            <div class="tech-items">
              <span class="tech-item">Android</span>
              <span class="tech-item">Kotlin</span>
              <span class="tech-item">Work Profile</span>
              <span class="tech-item">6大广告SDK</span>
              <span class="tech-item">跨平台支持</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Check, Monitor, Cellphone } from '@element-plus/icons-vue'
import { getWebsiteProducts, type Product } from '@/api'

const products = ref<Product[]>([])

onMounted(async () => {
  try {
    products.value = await getWebsiteProducts()
  } catch (error) {
    console.error('Failed to fetch products:', error)
  }
})
</script>

<style lang="scss" scoped>
.products-page {
  padding-top: 0;
}

.page-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: calc(var(--header-height) + var(--spacing-xxl)) 0 var(--spacing-xxl);
  text-align: center;
}

.page-title {
  font-size: var(--font-size-hero);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-md);
}

.page-subtitle {
  font-size: var(--font-size-xl);
  opacity: 0.9;
}

.products-overview {
  padding: var(--spacing-xxl) 0;
  background: var(--bg-secondary);
}

.overview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-xl);
}

.overview-item {
  text-align: center;
  background: white;
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-large);
  box-shadow: var(--shadow-light);
}

.overview-number {
  font-size: var(--font-size-hero);
  font-weight: var(--font-weight-bold);
  color: var(--primary-color);
  margin-bottom: var(--spacing-sm);
}

.overview-label {
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
}

.products-detail {
  padding: var(--spacing-xxl) 0;
}

.product-section {
  margin-bottom: calc(var(--spacing-xxl) * 2);

  &:last-child {
    margin-bottom: 0;
  }
}

.product-badge {
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-md);
  background: var(--primary-color);
  color: white;
  border-radius: var(--border-radius-base);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--spacing-md);
}

.product-title {
  font-size: var(--font-size-title);
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
  margin-bottom: var(--spacing-xs);
  font-family: 'Courier New', monospace;
}

.product-subtitle {
  font-size: var(--font-size-xl);
  color: var(--primary-color);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-lg);
}

.product-description {
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
  line-height: var(--line-height-loose);
  margin-bottom: var(--spacing-lg);
}

.product-features {
  margin-bottom: var(--spacing-lg);
}

.feature-item {
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-size-base);

  .el-icon {
    color: var(--success-color);
    margin-right: var(--spacing-sm);
    font-size: 18px;
  }
}

.product-progress {
  .progress-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--spacing-sm);
  }

  .progress-label {
    font-size: var(--font-size-sm);
    color: var(--text-secondary);
  }

  .progress-value {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    color: var(--success-color);
  }

  .progress-bar {
    height: 8px;
    background: var(--border-light);
    border-radius: 4px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: var(--success-color);
    transition: width var(--transition-slow);
  }
}

.product-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  margin-top: var(--spacing-xl);

  @include respond-to(lg) {
    margin-top: 0;
  }
}

.visual-placeholder {
  text-align: center;
  color: var(--text-secondary);

  .el-icon {
    font-size: 120px;
    margin-bottom: var(--spacing-md);
  }

  p {
    font-size: var(--font-size-lg);
  }
}

.more-products {
  text-align: center;
  padding: var(--spacing-xxl);
  background: var(--bg-secondary);
  border-radius: var(--border-radius-large);

  h3 {
    font-size: var(--font-size-xl);
    color: var(--text-primary);
    margin-bottom: var(--spacing-md);
  }

  p {
    color: var(--text-secondary);
    font-size: var(--font-size-lg);
  }
}

.tech-stack {
  padding: var(--spacing-xxl) 0;
  background: var(--bg-secondary);
}

.section-header {
  text-align: center;
  margin-bottom: var(--spacing-xxl);
}

.section-title {
  font-size: var(--font-size-title);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-md);
  color: var(--text-primary);
}

.section-subtitle {
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
}

.tech-category {
  background: white;
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-large);
  box-shadow: var(--shadow-light);
}

.tech-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin-bottom: var(--spacing-lg);
  text-align: center;
}

.tech-items {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.tech-item {
  padding: var(--spacing-xs) var(--spacing-md);
  background: var(--bg-secondary);
  border-radius: var(--border-radius-base);
  font-size: var(--font-size-sm);
  color: var(--text-primary);
  border: 1px solid var(--border-light);
}
</style>
