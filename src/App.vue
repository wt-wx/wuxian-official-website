<template>
  <div id="app">
    <!-- 导航栏 -->
    <AppHeader />
    
    <!-- 主要内容区域 -->
    <main class="main-content">
      <router-view />
    </main>
    
    <!-- 页脚 -->
    <AppFooter />
    
    <!-- 回到顶部按钮 -->
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import BackToTop from '@/components/common/BackToTop.vue'

// 页面加载时的进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 配置进度条
NProgress.configure({ 
  showSpinner: false,
  minimum: 0.2,
  speed: 500
})

// 监听路由变化
const router = useRouter()
router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: 80px; // 为固定导航栏留出空间
}

// 进度条样式自定义
#nprogress .bar {
  background: var(--el-color-primary) !important;
  height: 3px !important;
}

#nprogress .peg {
  box-shadow: 0 0 10px var(--el-color-primary), 0 0 5px var(--el-color-primary) !important;
}
</style>
