<template>
  <div class="admin-view">
    <!-- 登录界面 -->
    <div v-if="!isAuthenticated" class="login-container">
      <el-card class="login-card">
        <template #header>
          <h2>商务咨询管理后台</h2>
        </template>
        <el-form @submit.prevent="handleLogin">
          <el-form-item label="访问密码">
            <el-input 
              v-model="password" 
              type="password" 
              placeholder="请输入管理密码"
              @keyup.enter="handleLogin"
            />
          </el-form-item>
          <el-button type="primary" @click="handleLogin" :loading="loading" style="width: 100%">
            登录
          </el-button>
        </el-form>
      </el-card>
    </div>

    <!-- 数据管理界面 -->
    <div v-else class="admin-container">
      <div class="admin-header">
        <h1>商务咨询列表</h1>
        <div class="header-actions">
          <el-button @click="refreshData" :loading="loading">
            <el-icon><Refresh /></el-icon> 刷新
          </el-button>
          <el-button @click="exportToCSV">
            <el-icon><Download /></el-icon> 导出 CSV
          </el-button>
          <el-button @click="logout" type="danger">
            <el-icon><SwitchButton /></el-icon> 退出
          </el-button>
        </div>
      </div>

      <!-- 统计卡片 -->
      <div class="stats-cards">
        <el-card class="stat-card">
          <div class="stat-content">
            <div class="stat-label">总咨询数</div>
            <div class="stat-value">{{ inquiries.length }}</div>
          </div>
        </el-card>
        <el-card class="stat-card">
          <div class="stat-content">
            <div class="stat-label">今日新增</div>
            <div class="stat-value">{{ todayCount }}</div>
          </div>
        </el-card>
        <el-card class="stat-card">
          <div class="stat-content">
            <div class="stat-label">本周新增</div>
            <div class="stat-value">{{ weekCount }}</div>
          </div>
        </el-card>
      </div>

      <!-- 数据表格 -->
      <el-card class="table-card">
        <el-table 
          :data="filteredInquiries" 
          v-loading="loading"
          stripe
          border
          style="width: 100%"
        >
          <el-table-column type="expand">
            <template #default="{ row }">
              <div class="expand-content">
                <p><strong>详细需求：</strong></p>
                <p class="message-content">{{ row.message }}</p>
                <p><strong>提交时间：</strong> {{ formatDate(row.created_at) }}</p>
              </div>
            </template>
          </el-table-column>
          
          <el-table-column prop="name" label="姓名" width="120" />
          <el-table-column prop="company" label="公司" width="200" />
          <el-table-column prop="mobile" label="手机号" width="130" />
          <el-table-column prop="email" label="邮箱" width="200" />
          
          <el-table-column prop="type" label="咨询类型" width="150">
            <template #default="{ row }">
              <el-tag :type="getTypeColor(row.type)">
                {{ getTypeLabel(row.type) }}
              </el-tag>
            </template>
          </el-table-column>
          
          <el-table-column prop="created_at" label="提交时间" width="180">
            <template #default="{ row }">
              {{ formatDate(row.created_at) }}
            </template>
          </el-table-column>
          
          <el-table-column label="操作" width="150" fixed="right">
            <template #default="{ row }">
              <el-button 
                link 
                type="primary" 
                @click="copyContact(row)"
              >
                复制联系方式
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { Refresh, Download, SwitchButton } from '@element-plus/icons-vue'
import { supabase } from '@/utils/supabase'

// 简单的密码认证（生产环境建议使用更安全的方式）
const ADMIN_PASSWORD = 'hello-wtwx' // 请修改为您的密码

const isAuthenticated = ref(false)
const password = ref('')
const loading = ref(false)
const inquiries = ref<any[]>([])

// 统计数据
const todayCount = computed(() => {
  const today = new Date().toDateString()
  return inquiries.value.filter(item => 
    new Date(item.created_at).toDateString() === today
  ).length
})

const weekCount = computed(() => {
  const weekAgo = new Date()
  weekAgo.setDate(weekAgo.getDate() - 7)
  return inquiries.value.filter(item => 
    new Date(item.created_at) >= weekAgo
  ).length
})

const filteredInquiries = computed(() => {
  return inquiries.value.sort((a, b) => 
    new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  )
})

// 登录
const handleLogin = () => {
  if (password.value === ADMIN_PASSWORD) {
    isAuthenticated.value = true
    sessionStorage.setItem('admin_auth', 'true')
    fetchInquiries()
  } else {
    ElMessage.error('密码错误')
  }
}

// 退出
const logout = () => {
  isAuthenticated.value = false
  sessionStorage.removeItem('admin_auth')
  password.value = ''
}

// 获取数据
const fetchInquiries = async () => {
  loading.value = true
  try {
    if (!supabase) {
      ElMessage.warning('Supabase 未配置 (Mock模式)，无法获取真实数据')
      inquiries.value = []
      return
    }

    const { data, error } = await supabase
      .from('inquiries')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    inquiries.value = data || []
  } catch (error: any) {
    ElMessage.error('获取数据失败: ' + error.message)
  } finally {
    loading.value = false
  }
}

// 刷新数据
const refreshData = () => {
  fetchInquiries()
  ElMessage.success('数据已刷新')
}

// 导出 CSV
const exportToCSV = () => {
  const headers = ['姓名', '公司', '手机号', '邮箱', '咨询类型', '详细需求', '提交时间']
  const rows = inquiries.value.map(item => [
    item.name,
    item.company,
    item.mobile,
    item.email || '',
    getTypeLabel(item.type),
    item.message,
    formatDate(item.created_at)
  ])

  const csv = [
    headers.join(','),
    ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
  ].join('\n')

  const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = `inquiries_${new Date().toISOString().slice(0, 10)}.csv`
  link.click()
  
  ElMessage.success('导出成功')
}

// 复制联系方式
const copyContact = (row: any) => {
  const text = `姓名: ${row.name}\n公司: ${row.company}\n手机: ${row.mobile}\n邮箱: ${row.email || '未填写'}`
  navigator.clipboard.writeText(text)
  ElMessage.success('已复制到剪贴板')
}

// 格式化日期
const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
}

// 获取类型标签
const getTypeLabel = (type: string) => {
  const labels: Record<string, string> = {
    'partnership': '商务合作 (分销/代理)',
    'product': '产品咨询 (MDM/PMS)',
    'solution': '行业解决方案',
    'other': '其他'
  }
  return labels[type] || type
}

// 获取类型颜色
const getTypeColor = (type: string): any => {
  const colors: Record<string, string> = {
    'partnership': 'success',
    'product': 'primary',
    'solution': 'warning',
    'other': 'info'
  }
  return colors[type] || 'info'
}

// 初始化
onMounted(() => {
  // 检查是否已登录
  if (sessionStorage.getItem('admin_auth') === 'true') {
    isAuthenticated.value = true
    fetchInquiries()
  }
})
</script>

<style lang="scss" scoped>
.admin-view {
  min-height: 100vh;
  background-color: #f5f7fa;
}

.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
}

.login-card {
  width: 100%;
  max-width: 400px;

  h2 {
    margin: 0;
    text-align: center;
    color: $color-primary-black;
  }
}

.admin-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
}

.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h1 {
    margin: 0;
    color: $color-primary-black;
  }

  .header-actions {
    display: flex;
    gap: 10px;
  }
}

.stats-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.stat-card {
  .stat-content {
    text-align: center;
  }

  .stat-label {
    font-size: 14px;
    color: $color-secondary-gray;
    margin-bottom: 8px;
  }

  .stat-value {
    font-size: 32px;
    font-weight: 700;
    color: $color-brand-blue;
  }
}

.table-card {
  margin-bottom: 20px;
}

.expand-content {
  padding: 20px;
  background-color: #f9fafb;

  p {
    margin: 10px 0;
  }

  .message-content {
    white-space: pre-wrap;
    line-height: 1.6;
    color: $color-primary-black;
  }
}
</style>
