<template>
  <div class="support-view">
    <!-- Hero -->
    <section class="page-hero">
      <div class="container" data-aos="fade-up">
        <h1>支持中心</h1>
        <p>我们随时为您提供帮助。查找文档、常见问题解答或直接联系我们。</p>
      </div>
    </section>

    <!-- Help Categories -->
    <section class="section">
      <div class="container">
        <div class="help-grid">
          <div class="help-card" data-aos="fade-up" data-aos-delay="100">
            <el-icon class="icon"><Document /></el-icon>
            <h3>产品文档</h3>
            <p>查看详细的产品使用手册、API 文档和开发指南。</p>
            <a href="#" class="link">浏览文档 &rarr;</a>
          </div>

          <div class="help-card" data-aos="fade-up" data-aos-delay="200">
            <el-icon class="icon"><QuestionFilled /></el-icon>
            <h3>常见问题</h3>
            <p>查找关于账户、计费、设备连接等常见问题的解答。</p>
            <a href="#" class="link">查看 FAQ &rarr;</a>
          </div>

          <div class="help-card" data-aos="fade-up" data-aos-delay="300">
            <el-icon class="icon"><Service /></el-icon>
            <h3>技术支持</h3>
            <p>遇到技术难题？我们的工程师团队随时待命。</p>
            <router-link to="/contact" class="link">联系支持 &rarr;</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section bg-surface">
      <div class="container">
        <div class="section-title" data-aos="fade-up">
          <h2>热门问题</h2>
        </div>
        
        <div class="faq-list" data-aos="fade-up">
          <el-collapse v-model="activeNames">
            <el-collapse-item title="如何开始使用无限 PMS 系统？" name="1">
              <div>您可以联系我们的商务团队申请试用账号。我们将为您提供专属的部署方案和培训服务。</div>
            </el-collapse-item>
            <el-collapse-item title="支持哪些类型的设备接入？" name="2">
              <div>我们支持 Android, Windows, Linux, iOS/macOS 全平台设备。同时支持基于 MQTT 协议的 IoT 设备接入。</div>
            </el-collapse-item>
            <el-collapse-item title="分销佣金如何结算？" name="3">
              <div>系统支持自动化的佣金结算。您可以配置月结或即时结算，支持提现到银行卡或支付宝。对于 RWA 资产，支持链上自动分账。</div>
            </el-collapse-item>
            <el-collapse-item title="数据安全如何保障？" name="4">
              <div>我们采用企业级加密传输 (TLS 1.3) 和存储加密 (AES-256)。支持私有化部署，确保您的数据完全由您掌控。</div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Document, QuestionFilled, Service } from '@element-plus/icons-vue'

const activeNames = ref(['1'])
</script>

<style lang="scss" scoped>
.page-hero {
  padding: 120px 0 80px;
  text-align: center;
  background-color: $color-bg-white;

  h1 {
    font-size: 3rem;
    color: $color-primary-black;
    margin-bottom: $spacing-md;
  }

  p {
    font-size: 1.25rem;
    color: $color-secondary-gray;
  }
}

.section {
  padding: 80px 0;
  
  &.bg-surface {
    background-color: $color-bg-surface;
  }
}

.help-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $spacing-lg;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.help-card {
  background: $color-bg-white;
  padding: $spacing-xl;
  border-radius: 8px;
  border: 1px solid $color-border;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  }

  .icon {
    font-size: 48px;
    color: $color-brand-blue;
    margin-bottom: $spacing-md;
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: $spacing-sm;
  }

  p {
    color: $color-secondary-gray;
    margin-bottom: $spacing-lg;
  }

  .link {
    color: $color-brand-blue;
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;

  :deep(.el-collapse-item__header) {
    font-size: 1.125rem;
    font-weight: 500;
    background-color: transparent;
  }

  :deep(.el-collapse-item__content) {
    font-size: 1rem;
    color: $color-secondary-gray;
    line-height: 1.6;
  }
}
</style>
