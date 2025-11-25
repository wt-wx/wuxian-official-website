<template>
  <div class="technology-page">
    <section class="page-header">
      <div class="container">
        <div class="header-content" data-aos="fade-up">
          <h1 class="page-title">技术架构</h1>
          <p class="page-subtitle">现代化技术栈，微服务架构，高性能高可用</p>
        </div>
      </div>
    </section>

    <section class="technology-content">
      <div class="container">
        <div v-if="sections.length > 0">
          <div
            v-for="(section, index) in sections"
            :key="section.id"
            class="content-section"
            data-aos="fade-up"
          >
            <div class="row align-items-center">
              <div :class="['col-12', 'col-lg-6', { 'order-lg-2': index % 2 !== 0 }]" >
                <div class="section-text">
                  <h2 class="section-title">{{ section.title }}</h2>
                  <div class="section-body" v-html="section.content"></div>
                </div>
              </div>
              <div :class="['col-12', 'col-lg-6', { 'order-lg-1': index % 2 !== 0 }]" >
                <div class="section-image">
                  <img v-if="section.image_url" :src="section.image_url" :alt="section.title" />
                  <div v-else class="image-placeholder">
                    <el-icon><DataAnalysis /></el-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="coming-soon-content" data-aos="fade-up">
            <div class="icon">
              <el-icon><Setting /></el-icon>
            </div>
            <h2>技术架构页面正在建设中</h2>
            <p>我们正在完善技术架构的详细内容，包括系统架构图、技术栈介绍、性能优势等信息。</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Setting, DataAnalysis } from '@element-plus/icons-vue'
import { getWebsiteTechnologySections, type TechnologySection } from '@/api'

const sections = ref<TechnologySection[]>([])

onMounted(async () => {
  try {
    sections.value = await getWebsiteTechnologySections()
  } catch (error) {
    console.error('Failed to fetch technology sections:', error)
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
