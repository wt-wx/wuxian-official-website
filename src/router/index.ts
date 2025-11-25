import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: '首页 - 无限科技PMS',
      description: '无限科技PMS - 基于多级分销模式的广告流量分发平台管理系统'
    }
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('@/views/Products.vue'),
    meta: {
      title: '产品功能 - 无限科技PMS',
      description: '了解无限科技PMS的五大核心应用：Web管理后台、Android管理端、钱包应用、用户端应用、后端服务'
    }
  },
  {
    path: '/solutions',
    name: 'Solutions',
    component: () => import('@/views/Solutions.vue'),
    meta: {
      title: '解决方案 - 无限科技PMS',
      description: '无限科技PMS的商业模式、多级分销体系、收入模式和应用场景介绍'
    }
  },
  {
    path: '/technology',
    name: 'Technology',
    component: () => import('@/views/Technology.vue'),
    meta: {
      title: '技术架构 - 无限科技PMS',
      description: '无限科技PMS的技术栈、系统架构、性能优势和安全保障'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: {
      title: '关于我们 - 无限科技PMS',
      description: '了解无限科技团队、公司介绍、发展历程和企业文化'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue'),
    meta: {
      title: '联系我们 - 无限科技PMS',
      description: '联系无限科技，获取商务合作、技术支持和在线咨询服务'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
    meta: {
      title: '页面未找到 - 无限科技PMS'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 路由守卫 - 设置页面标题和描述
router.beforeEach((to) => {
  // 设置页面标题
  if (to.meta?.title) {
    document.title = to.meta.title as string
  }
  
  // 设置页面描述
  if (to.meta?.description) {
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', to.meta.description as string)
    }
  }
})

export default router
