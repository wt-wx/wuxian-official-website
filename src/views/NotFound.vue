<template>
  <div class="not-found-page">
    <div class="container">
      <div class="not-found-content">
        <div class="error-visual" data-aos="fade-up">
          <div class="error-number">404</div>
          <div class="error-icon">
            <el-icon><Warning /></el-icon>
          </div>
        </div>
        <div class="error-text" data-aos="fade-up" data-aos-delay="200">
          <h1 class="error-title">页面未找到</h1>
          <p class="error-description">
            抱歉，您访问的页面不存在或已被移动。
            请检查URL是否正确，或返回首页继续浏览。
          </p>
        </div>
        <div class="error-actions" data-aos="fade-up" data-aos-delay="400">
          <router-link to="/" class="btn btn--primary btn--large">
            返回首页
          </router-link>
          <button @click="goBack" class="btn btn--secondary btn--large">
            返回上页
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Warning } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  if (window.history.length > 1) {
    router.go(-1)
  } else {
    router.push('/')
  }
}
</script>

<style lang="scss" scoped>
.not-found-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.not-found-content {
  text-align: center;
  max-width: 600px;
}

.error-visual {
  position: relative;
  margin-bottom: var(--spacing-xxl);
}

.error-number {
  font-size: clamp(6rem, 15vw, 12rem);
  font-weight: var(--font-weight-bold);
  line-height: 1;
  opacity: 0.1;
  user-select: none;
}

.error-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  color: #ffd700;
}

.error-title {
  font-size: var(--font-size-title);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-lg);
}

.error-description {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-loose);
  opacity: 0.9;
  margin-bottom: var(--spacing-xxl);
}

.error-actions {
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
}
</style>
