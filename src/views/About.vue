<template>
  <div class="about-page">
    <section class="page-header">
      <div class="container">
        <div class="header-content" data-aos="fade-up">
          <h1 class="page-title">关于我们</h1>
          <p class="page-subtitle">无限科技团队，专注于广告分发平台技术创新</p>
        </div>
      </div>
    </section>

    <section class="about-content">
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
                    <el-icon><OfficeBuilding /></el-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="coming-soon-content" data-aos="fade-up">
            <div class="icon">
              <el-icon><User /></el-icon>
            </div>
            <h2>关于我们页面正在建设中</h2>
            <p>我们正在完善团队介绍、公司历程、企业文化等内容。</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { User, OfficeBuilding } from '@element-plus/icons-vue'
import { getWebsiteAboutSections, type AboutSection } from '@/api'

const sections = ref<AboutSection[]>([])

onMounted(async () => {
  try {
    sections.value = await getWebsiteAboutSections()
  } catch (error) {
    console.error('Failed to fetch about sections:', error)
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
