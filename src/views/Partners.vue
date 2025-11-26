<template>
  <div class="partners-view">
    <section class="page-hero">
      <div class="container" data-aos="fade-up">
        <h1>合作伙伴计划</h1>
        <p>携手网腾无限，共建物联网商业新生态。</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <!-- Benefits -->
        <div class="section-title" data-aos="fade-up">
          <h2>合作优势</h2>
          <p>全方位的支持体系，助您快速拓展市场</p>
        </div>

        <div class="benefits-grid">
          <div class="benefit-card" data-aos="fade-up" data-aos-delay="100">
            <el-icon class="icon"><Trophy /></el-icon>
            <h3>品牌授权</h3>
            <p>获得网腾无限官方品牌授权，提升市场公信力。</p>
          </div>
          <div class="benefit-card" data-aos="fade-up" data-aos-delay="200">
            <el-icon class="icon"><Money /></el-icon>
            <h3>高额返佣</h3>
            <p>极具竞争力的分润政策，确保合作伙伴的长期收益。</p>
          </div>
          <div class="benefit-card" data-aos="fade-up" data-aos-delay="300">
            <el-icon class="icon"><School /></el-icon>
            <h3>培训支持</h3>
            <p>提供产品、技术、销售全方位的定期培训赋能。</p>
          </div>
          <div class="benefit-card" data-aos="fade-up" data-aos-delay="400">
            <el-icon class="icon"><Service /></el-icon>
            <h3>专属客服</h3>
            <p>1对1 专属渠道经理，快速响应您的业务需求。</p>
          </div>
        </div>

        <!-- Process -->
        <div class="process-section" data-aos="fade-up">
          <h2>加入流程</h2>
          <div class="process-steps">
            <div class="step">
              <div class="step-num">01</div>
              <h3>提交申请</h3>
              <p>填写合作申请表</p>
            </div>
            <div class="arrow">&rarr;</div>
            <div class="step">
              <div class="step-num">02</div>
              <h3>资质审核</h3>
              <p>专人对接沟通</p>
            </div>
            <div class="arrow">&rarr;</div>
            <div class="step">
              <div class="step-num">03</div>
              <h3>签约授权</h3>
              <p>签署合作协议</p>
            </div>
            <div class="arrow">&rarr;</div>
            <div class="step">
              <div class="step-num">04</div>
              <h3>业务开展</h3>
              <p>培训与物料支持</p>
            </div>
          </div>
          
          <div class="action-area">
            <router-link to="/contact" class="btn btn-primary btn-lg">立即申请加入</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Trophy, Money, School, Service } from '@element-plus/icons-vue'
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
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: $spacing-lg;
  margin-bottom: 100px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
}

.benefit-card {
  text-align: center;
  padding: $spacing-xl;
  background: $color-bg-surface;
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .icon {
    font-size: 40px;
    color: $color-brand-blue;
    margin-bottom: $spacing-md;
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: $spacing-sm;
  }

  p {
    color: $color-secondary-gray;
  }
}

.process-section {
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: $spacing-xl;
  }
}

.process-steps {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: $spacing-xl;
  flex-wrap: wrap;

  .step {
    text-align: center;
    
    .step-num {
      width: 48px;
      height: 48px;
      background: $color-brand-blue;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      margin: 0 auto $spacing-md;
    }

    h3 {
      font-size: 1.125rem;
      margin-bottom: 4px;
    }

    p {
      color: $color-secondary-gray;
      font-size: 0.875rem;
    }
  }

  .arrow {
    font-size: 24px;
    color: $color-border;
    
    @media (max-width: 768px) {
      display: none;
    }
  }
}
</style>
