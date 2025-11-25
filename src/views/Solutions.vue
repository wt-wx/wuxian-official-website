<template>
  <div class="solutions-page">
    <section class="page-header">
      <div class="container">
        <div class="header-content" data-aos="fade-up">
          <h1 class="page-title">解决方案</h1>
          <p class="page-subtitle">多级分销体系，多重收入模式，完整的商业生态</p>
        </div>
      </div>
    </section>

    <section class="solutions-list">
      <div class="container">
        <div v-if="solutions.length > 0" class="solutions-grid">
          <div
            v-for="(solution, index) in solutions"
            :key="solution.id"
            class="solution-card"
            data-aos="fade-up"
            :data-aos-delay="100 * (index + 1)"
          >
            <div class="solution-image">
              <img v-if="solution.cover_image_url" :src="solution.cover_image_url" :alt="solution.title" />
              <div v-else class="image-placeholder">
                <el-icon><PictureFilled /></el-icon>
              </div>
            </div>
            <div class="solution-content">
              <h3 class="solution-category">{{ solution.category }}</h3>
              <h2 class="solution-title">{{ solution.title }}</h2>
              <p class="solution-summary">{{ solution.summary }}</p>
              <a href="#" class="btn btn--text">了解详情 &rarr;</a>
            </div>
          </div>
        </div>
        <div v-else class="coming-soon-content" data-aos="fade-up">
            <div class="icon">
              <el-icon><Tools /></el-icon>
            </div>
            <h2>暂无解决方案</h2>
            <p>我们正在努力准备中，敬请期待。</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Tools, PictureFilled } from '@element-plus/icons-vue'
import { getWebsiteSolutions, type Solution } from '@/api'

const solutions = ref<Solution[]>([])

onMounted(async () => {
  try {
    solutions.value = await getWebsiteSolutions()
  } catch (error) {
    console.error('Failed to fetch solutions:', error)
  }
})
</script>

<style lang="scss" scoped>
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

.coming-soon {
  padding: var(--spacing-xxl) 0;
  text-align: center;
}

.coming-soon-content {
  max-width: 600px;
  margin: 0 auto;

  .icon {
    font-size: 80px;
    color: var(--primary-color);
    margin-bottom: var(--spacing-lg);
  }

  h2 {
    font-size: var(--font-size-title);
    margin-bottom: var(--spacing-lg);
    color: var(--text-primary);
  }

  p {
    font-size: var(--font-size-lg);
    color: var(--text-secondary);
    line-height: var(--line-height-loose);
    margin-bottom: var(--spacing-xl);
  }
}
</style>
