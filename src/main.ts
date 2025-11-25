import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'

// 样式导入
import 'element-plus/dist/index.css'
import '@/styles/index.scss'

// AOS动画库
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

// 使用插件
app.use(createPinia())
app.use(router)

// 初始化AOS动画
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  mirror: false
})

app.mount('#app')
