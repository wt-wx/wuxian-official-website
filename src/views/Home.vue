<template>
  <div class="home-page">
    <!-- 英雄区域 -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content" data-aos="fade-up">
          <h1 class="hero-title">
            无限科技PMS
            <span class="highlight">智能广告分发平台</span>
          </h1>
          <p class="hero-subtitle">
            基于多级分销模式的广告流量分发平台管理系统<br>
            让广告分发更智能，让收益管理更简单
          </p>
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number">94%</span>
              <span class="stat-label">完成度</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">5</span>
              <span class="stat-label">核心应用</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">6</span>
              <span class="stat-label">广告SDK</span>
            </div>
          </div>
          <div class="hero-actions">
            <router-link to="/products" class="btn btn--primary btn--large">
              了解产品
            </router-link>
            <router-link to="/contact" class="btn btn--secondary btn--large">
              联系我们
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心优势 -->
    <section class="features-section">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <h2 class="section-title">核心优势</h2>
          <p class="section-subtitle">完整的产品生态，成熟的商业模式，先进的技术架构</p>
        </div>
        <div class="features-grid">
          <div class="feature-card" data-aos="fade-up" data-aos-delay="100">
            <div class="feature-icon">
              <el-icon><Monitor /></el-icon>
            </div>
            <h3 class="feature-title">完整产品生态</h3>
            <p class="feature-desc">5个核心应用覆盖Web管理、移动端、后端服务等多个平台</p>
          </div>
          <div class="feature-card" data-aos="fade-up" data-aos-delay="200">
            <div class="feature-icon">
              <el-icon><TrendCharts /></el-icon>
            </div>
            <h3 class="feature-title">多级分销体系</h3>
            <p class="feature-desc">支持渠道、代理、商户多级用户体系，完整的分润机制</p>
          </div>
          <div class="feature-card" data-aos="fade-up" data-aos-delay="300">
            <div class="feature-icon">
              <el-icon><Setting /></el-icon>
            </div>
            <h3 class="feature-title">微服务架构</h3>
            <p class="feature-desc">FastAPI + Go高性能后端，支持多环境部署和容灾备份</p>
          </div>
          <div class="feature-card" data-aos="fade-up" data-aos-delay="400">
            <div class="feature-icon">
              <el-icon><Money /></el-icon>
            </div>
            <h3 class="feature-title">多重收入模式</h3>
            <p class="feature-desc">加盟费、广告抽成、APP月租、代理保证金等多种收入来源</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 产品展示 -->
    <section class="products-section">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <h2 class="section-title">产品矩阵</h2>
          <p class="section-subtitle">五大核心应用，构建完整的业务生态</p>
        </div>
        <div class="products-grid">
          <div
            v-for="(product, index) in featuredProducts"
            :key="product.id"
            class="product-card"
            data-aos="fade-up"
            :data-aos-delay="100 * (index + 1)"
          >
            <div class="product-icon">{{ product.category === 'Web应用' ? '🌐' : '📱' }}</div>
            <h3 class="product-title">{{ product.name }}</h3>
            <p class="product-subtitle">{{ product.title }}</p>
            <p class="product-desc">{{ product.description }}</p>
            <div class="product-progress">
              <span class="progress-label">完成度</span>
              <div class="progress-bar">
                <div class="progress-fill" :style="{ width: product.progress + '%' }"></div>
              </div>
              <span class="progress-value">{{ product.progress }}%</span>
            </div>
          </div>
        </div>
        <div class="products-action" data-aos="fade-up">
          <router-link to="/products" class="btn btn--primary">查看所有产品</router-link>
        </div>
      </div>
    </section>

    <!-- 技术亮点 -->
    <section class="tech-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-lg-6" data-aos="fade-right">
            <h2 class="section-title">技术亮点</h2>
            <div class="tech-highlights">
              <div class="tech-item">
                <el-icon class="tech-icon"><Check /></el-icon>
                <span>6大广告SDK集成</span>
              </div>
              <div class="tech-item">
                <el-icon class="tech-icon"><Check /></el-icon>
                <span>13个应用变体支持</span>
              </div>
              <div class="tech-item">
                <el-icon class="tech-icon"><Check /></el-icon>
                <span>Work Profile企业级管理</span>
              </div>
              <div class="tech-item">
                <el-icon class="tech-icon"><Check /></el-icon>
                <span>跨平台钱包应用</span>
              </div>
              <div class="tech-item">
                <el-icon class="tech-icon"><Check /></el-icon>
                <span>多环境部署支持</span>
              </div>
            </div>
            <router-link to="/technology" class="btn btn--primary">了解技术架构</router-link>
          </div>
          <div class="col-12 col-lg-6" data-aos="fade-left">
            <div class="tech-visual">
              <!-- 这里可以放置技术架构图或其他视觉元素 -->
              <div class="tech-placeholder">
                <el-icon><DataAnalysis /></el-icon>
                <p>技术架构图</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA区域 -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content" data-aos="fade-up">
          <h2 class="cta-title">准备开始了吗？</h2>
          <p class="cta-subtitle">联系我们，了解更多关于无限科技PMS的信息</p>
          <div class="cta-actions">
            <router-link to="/contact" class="btn btn--primary btn--large">
              立即联系
            </router-link>
            <router-link to="/solutions" class="btn btn--secondary btn--large">
              查看方案
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  Monitor,
  TrendCharts,
  Setting,
  Money,
  Check,
  DataAnalysis
} from '@element-plus/icons-vue'
import { getWebsiteProducts, type Product } from '@/api'

const featuredProducts = ref<Product[]>([])

onMounted(async () => {
  try {
    featuredProducts.value = await getWebsiteProducts({ is_featured: true })
  } catch (error) {
    console.error('Failed to fetch featured products:', error)
  }
})
</script>

<style lang="scss" scoped>
.home-page {
  overflow-x: hidden;
}

// 英雄区域
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }

  .container {
    position: relative;
    z-index: 1;
  }
}

.hero-title {
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-lg);
  line-height: 1.2;

  .highlight {
    color: #ffd700;
  }
}

.hero-subtitle {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-xl);
  opacity: 0.9;
  line-height: var(--line-height-loose);
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;

  .stat-number {
    display: block;
    font-size: var(--font-size-hero);
    font-weight: var(--font-weight-bold);
    color: #ffd700;
  }

  .stat-label {
    font-size: var(--font-size-base);
    opacity: 0.8;
  }
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
}

// 功能特性区域
.features-section {
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

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-xl);
}

.feature-card {
  background: white;
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-large);
  text-align: center;
  box-shadow: var(--shadow-light);
  transition: transform var(--transition-base);

  &:hover {
    transform: translateY(-5px);
  }
}

.feature-icon {
  width: 80px;
  height: 80px;
  background: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-lg);
  color: white;
  font-size: 32px;
}

.feature-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-md);
  color: var(--text-primary);
}

.feature-desc {
  color: var(--text-secondary);
  line-height: var(--line-height-loose);
}

// 产品展示区域
.products-section {
  padding: var(--spacing-xxl) 0;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
}

.product-card {
  background: white;
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-large);
  border: 1px solid var(--border-light);
  transition: all var(--transition-base);

  &:hover {
    box-shadow: var(--shadow-dark);
    transform: translateY(-2px);
  }
}

.product-icon {
  font-size: 48px;
  margin-bottom: var(--spacing-md);
}

.product-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-xs);
  color: var(--text-primary);
}

.product-subtitle {
  color: var(--primary-color);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--spacing-md);
}

.product-desc {
  color: var(--text-secondary);
  line-height: var(--line-height-loose);
  margin-bottom: var(--spacing-lg);
}

.product-progress {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.progress-label {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
}

.progress-bar {
  flex: 1;
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

.progress-value {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--success-color);
}

.products-action {
  text-align: center;
}

// 技术亮点区域
.tech-section {
  padding: var(--spacing-xxl) 0;
  background: var(--bg-secondary);
}

.tech-highlights {
  margin-bottom: var(--spacing-xl);
}

.tech-item {
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-md);
  font-size: var(--font-size-lg);

  .tech-icon {
    color: var(--success-color);
    margin-right: var(--spacing-md);
    font-size: 20px;
  }
}

.tech-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
}

.tech-placeholder {
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

// CTA区域
.cta-section {
  padding: var(--spacing-xxl) 0;
  background: var(--primary-color);
  color: white;
  text-align: center;
}

.cta-title {
  font-size: var(--font-size-title);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-md);
}

.cta-subtitle {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-xl);
  opacity: 0.9;
}

.cta-actions {
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
}
</style>
