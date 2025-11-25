<template>
  <header class="app-header" :class="{ 'is-scrolled': isScrolled }">
    <div class="container">
      <div class="header-content">
        <!-- Logo -->
        <div class="logo">
          <router-link to="/" class="logo-link">
            <img src="/logo.png" alt="无限科技PMS" class="logo-image" />
            <span class="logo-text">无限科技PMS</span>
          </router-link>
        </div>

        <!-- 导航菜单 -->
        <nav class="nav-menu" :class="{ 'is-open': isMobileMenuOpen }">
          <ul class="nav-list">
            <li class="nav-item">
              <router-link to="/" class="nav-link" @click="closeMobileMenu">首页</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link" @click="closeMobileMenu">产品功能</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/solutions" class="nav-link" @click="closeMobileMenu">解决方案</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/technology" class="nav-link" @click="closeMobileMenu">技术架构</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link" @click="closeMobileMenu">关于我们</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link" @click="closeMobileMenu">联系我们</router-link>
            </li>
          </ul>
        </nav>

        <!-- 移动端菜单按钮 -->
        <button 
          class="mobile-menu-btn"
          @click="toggleMobileMenu"
          :class="{ 'is-active': isMobileMenuOpen }"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

// 监听滚动事件
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

// 切换移动端菜单
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// 关闭移动端菜单
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-index-fixed);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid transparent;
  transition: all var(--transition-base);

  &.is-scrolled {
    background: rgba(255, 255, 255, 0.98);
    border-bottom-color: var(--border-light);
    box-shadow: var(--shadow-light);
  }
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-height);
}

.logo {
  .logo-link {
    display: flex;
    align-items: center;
    color: var(--text-primary);
    text-decoration: none;
  }

  .logo-image {
    width: 40px;
    height: 40px;
    margin-right: var(--spacing-sm);
  }

  .logo-text {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-bold);
    color: var(--primary-color);
  }
}

.nav-menu {
  @include respond-to(lg) {
    display: block;
  }

  // 移动端隐藏
  @media (max-width: 991px) {
    position: fixed;
    top: var(--header-height);
    left: 0;
    right: 0;
    background: white;
    border-top: 1px solid var(--border-light);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-base);

    &.is-open {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }
  }
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 991px) {
    flex-direction: column;
    padding: var(--spacing-lg);
  }
}

.nav-item {
  margin-left: var(--spacing-lg);

  @media (max-width: 991px) {
    margin: 0;
    margin-bottom: var(--spacing-md);
  }
}

.nav-link {
  display: block;
  padding: var(--spacing-sm) 0;
  color: var(--text-primary);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  position: relative;
  transition: color var(--transition-fast);

  &:hover {
    color: var(--primary-color);
  }

  &.router-link-active {
    color: var(--primary-color);

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--primary-color);
    }
  }

  @media (max-width: 991px) {
    font-size: var(--font-size-lg);
    padding: var(--spacing-md) 0;
  }
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  @media (max-width: 991px) {
    display: flex;
  }

  span {
    width: 100%;
    height: 2px;
    background: var(--text-primary);
    transition: all var(--transition-fast);
    transform-origin: center;
  }

  &.is-active {
    span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -6px);
    }
  }
}
</style>
