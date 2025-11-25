<template>
  <div class="contact-page">
    <section class="page-header">
      <div class="container">
        <div class="header-content" data-aos="fade-up">
          <h1 class="page-title">联系我们</h1>
          <p class="page-subtitle">期待与您的合作，共创美好未来</p>
        </div>
      </div>
    </section>

    <section class="contact-content">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6" data-aos="fade-right">
            <div class="contact-info">
              <h2>联系信息</h2>
              <div class="contact-item">
                <el-icon class="contact-icon"><Location /></el-icon>
                <div class="contact-details">
                  <h3>公司地址</h3>
                  <p>中国·深圳</p>
                </div>
              </div>
              <div class="contact-item">
                <el-icon class="contact-icon"><Message /></el-icon>
                <div class="contact-details">
                  <h3>邮箱地址</h3>
                  <p>contact@wuxian.tech</p>
                </div>
              </div>
              <div class="contact-item">
                <el-icon class="contact-icon"><Phone /></el-icon>
                <div class="contact-details">
                  <h3>联系电话</h3>
                  <p>400-888-8888</p>
                </div>
              </div>
              <div class="contact-item">
                <el-icon class="contact-icon"><Clock /></el-icon>
                <div class="contact-details">
                  <h3>工作时间</h3>
                  <p>周一至周五 9:00-18:00</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6" data-aos="fade-left">
            <div class="contact-form">
              <h2>发送消息</h2>
              <el-form :model="form" label-position="top">
                <el-form-item label="姓名">
                  <el-input v-model="form.name" placeholder="请输入您的姓名" />
                </el-form-item>
                <el-form-item label="邮箱">
                  <el-input v-model="form.email" placeholder="请输入您的邮箱" />
                </el-form-item>
                <el-form-item label="公司">
                  <el-input v-model="form.company" placeholder="请输入您的公司名称" />
                </el-form-item>
                <el-form-item label="消息">
                  <el-input 
                    v-model="form.message" 
                    type="textarea" 
                    :rows="4"
                    placeholder="请输入您的消息内容"
                  />
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" size="large" @click="submitForm">
                    发送消息
                  </el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { Location, Message, Phone, Clock } from '@element-plus/icons-vue'
import { submitContactInquiry } from '@/api'

const form = reactive({
  name: '',
  email: '',
  company: '',
  message: ''
})

const submitForm = async () => {
  if (!form.name || !form.email || !form.message) {
    ElMessage.error('请填写所有必填项。')
    return
  }

  try {
    await submitContactInquiry(form)
    ElMessage.success('消息发送成功！我们会尽快与您联系。')
    // 重置表单
    Object.keys(form).forEach(key => {
      form[key as keyof typeof form] = ''
    })
  } catch (error) {
    console.error('Failed to submit inquiry:', error)
    ElMessage.error('消息发送失败，请稍后再试。')
  }
}
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

.contact-content {
  padding: var(--spacing-xxl) 0;
}

.contact-info {
  h2 {
    font-size: var(--font-size-title);
    font-weight: var(--font-weight-bold);
    margin-bottom: var(--spacing-xl);
    color: var(--text-primary);
  }
}

.contact-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--spacing-xl);

  .contact-icon {
    font-size: 24px;
    color: var(--primary-color);
    margin-right: var(--spacing-lg);
    margin-top: var(--spacing-xs);
  }

  .contact-details {
    h3 {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-semibold);
      margin-bottom: var(--spacing-xs);
      color: var(--text-primary);
    }

    p {
      font-size: var(--font-size-base);
      color: var(--text-secondary);
      margin: 0;
    }
  }
}

.contact-form {
  background: var(--bg-secondary);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-large);

  h2 {
    font-size: var(--font-size-title);
    font-weight: var(--font-weight-bold);
    margin-bottom: var(--spacing-xl);
    color: var(--text-primary);
  }

  .el-form-item {
    margin-bottom: var(--spacing-lg);
  }

  .el-button {
    width: 100%;
  }
}

@media (max-width: 991px) {
  .contact-info {
    margin-bottom: var(--spacing-xxl);
  }
}
</style>
