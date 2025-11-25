<template>
  <transition name="fade">
    <button
      v-show="isVisible"
      class="back-to-top"
      @click="scrollToTop"
      title="回到顶部"
    >
      <el-icon><ArrowUp /></el-icon>
    </button>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUp } from '@element-plus/icons-vue'

const isVisible = ref(false)

// 监听滚动事件
const handleScroll = () => {
  isVisible.value = window.scrollY > 300
}

// 滚动到顶部
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.back-to-top {
  position: fixed;
  bottom: var(--spacing-xl);
  right: var(--spacing-xl);
  z-index: var(--z-index-fixed);
  width: 50px;
  height: 50px;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-dark);
  transition: all var(--transition-fast);

  &:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
  }

  .el-icon {
    font-size: 20px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--transition-base);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
