<template>
  <div class="product-view">
    <!-- Hero -->
    <section class="page-hero">
      <div class="container" data-aos="fade-up">
        <h1>全平台物联网多级分销系统</h1>
        <p>一套系统，管理万物。打破设备与商业的边界。</p>
      </div>
    </section>

    <!-- Platform Support (MDM) -->
    <section class="section bg-surface">
      <div class="container">
        <div class="section-title" data-aos="fade-up">
          <h2>全平台 MDM 设备管理</h2>
          <p>原生适配主流操作系统，提供深度的设备管控能力</p>
        </div>

        <div class="platform-grid">
          <div class="platform-card" data-aos="fade-up" data-aos-delay="100">
            <div class="icon-box android">
              <el-icon><Platform /></el-icon>
            </div>
            <h3>Android</h3>
            <ul>
              <li>Kiosk 模式锁定</li>
              <li>应用静默安装/卸载</li>
              <li>远程桌面控制</li>
            </ul>
          </div>

          <div class="platform-card" data-aos="fade-up" data-aos-delay="200">
            <div class="icon-box windows">
              <el-icon><Monitor /></el-icon>
            </div>
            <h3>Windows</h3>
            <ul>
              <li>系统补丁管理</li>
              <li>软件分发与资产盘点</li>
              <li>安全策略下发</li>
            </ul>
          </div>

          <div class="platform-card" data-aos="fade-up" data-aos-delay="300">
            <div class="icon-box linux">
              <el-icon><Cpu /></el-icon>
            </div>
            <h3>Linux / IoT</h3>
            <ul>
              <li>远程 Shell 调试</li>
              <li>容器化应用部署</li>
              <li>系统状态监控</li>
            </ul>
          </div>

          <div class="platform-card" data-aos="fade-up" data-aos-delay="400">
            <div class="icon-box apple">
              <el-icon><Iphone /></el-icon>
            </div>
            <h3>iOS / macOS</h3>
            <ul>
              <li>配置文件 (Profile) 管理</li>
              <li>企业证书应用分发</li>
              <li>设备合规性检测</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Distribution System (PMS) -->
    <section class="section">
      <div class="container">
        <div class="section-title" data-aos="fade-up">
          <h2>多级分销商业引擎</h2>
          <p>灵活的商业模式配置，助力业务快速裂变</p>
        </div>

        <div class="distribution-layout">
          <div class="dist-text" data-aos="fade-right">
            <div class="feature-item">
              <h3>01. 用户分级体系</h3>
              <p>支持 <strong>城市合伙人 - 代理 - 渠道 - 商户</strong> 多级角色管理。不同角色拥有独立的管理后台与权限范围。</p>
            </div>
            <div class="feature-item">
              <h3>02. 灵活分润模型</h3>
              <p>内置多种分润规则：<strong>加盟费返佣、月租金抽成、季度分红</strong>。支持按设备数、业绩指标自动升级职级。</p>
            </div>
            <div class="feature-item">
              <h3>03. 全业态支持</h3>
              <p>分销系统不仅限于广告收益，更支持 <strong>养老服务、宠物用品、金融服务</strong> 等多行业产品的分销与结算。</p>
            </div>
          </div>
          <div class="dist-visual" data-aos="fade-left">
            <!-- CSS Drawing of Hierarchy -->
            <div class="hierarchy-chart">
              <div class="level level-1">城市合伙人</div>
              <div class="connector"></div>
              <div class="level level-2">区域代理</div>
              <div class="connector"></div>
              <div class="level-group">
                <div class="level level-3">渠道商</div>
                <div class="level level-3">商户</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Pricing & Comparison -->
    <section class="section bg-surface">
      <div class="container">
        <div class="section-title" data-aos="fade-up">
          <h2>版本与报价</h2>
          <p>灵活的订阅方案，满足不同规模企业的需求</p>
        </div>

        <div class="pricing-grid">
          <!-- Starter -->
          <div class="pricing-card" data-aos="fade-up" data-aos-delay="100">
            <div class="card-header">
              <h3>基础版</h3>
              <div class="price">¥0 <span class="period">/ 永久免费</span></div>
              <p class="desc">适合个人开发者或小型测试项目</p>
            </div>
            <div class="card-body">
              <ul>
                <li><el-icon><Check /></el-icon> 支持 10 台设备接入</li>
                <li><el-icon><Check /></el-icon> 基础 MDM 功能 (定位/锁屏)</li>
                <li><el-icon><Check /></el-icon> 社区技术支持</li>
                <li class="disabled"><el-icon><Close /></el-icon> 多级分销系统</li>
                <li class="disabled"><el-icon><Close /></el-icon> 私有化部署</li>
              </ul>
              <router-link to="/contact" class="btn btn-outline full-width">免费试用</router-link>
            </div>
          </div>

          <!-- Professional -->
          <div class="pricing-card featured" data-aos="fade-up" data-aos-delay="200">
            <div class="tag">最受欢迎</div>
            <div class="card-header">
              <h3>专业版</h3>
              <div class="price">¥3999 <span class="period">/ 年</span></div>
              <p class="desc">适合中小型企业快速开展业务</p>
            </div>
            <div class="card-body">
              <ul>
                <li><el-icon><Check /></el-icon> 支持 1000 台设备接入</li>
                <li><el-icon><Check /></el-icon> 全功能 MDM (远程控制/应用分发)</li>
                <li><el-icon><Check /></el-icon> 完整分销系统 (3级分销)</li>
                <li><el-icon><Check /></el-icon> 7x12小时 技术支持</li>
                <li class="disabled"><el-icon><Close /></el-icon> 源码交付</li>
              </ul>
              <router-link to="/contact" class="btn btn-primary full-width">立即订阅</router-link>
            </div>
          </div>

          <!-- Enterprise -->
          <div class="pricing-card" data-aos="fade-up" data-aos-delay="300">
            <div class="card-header">
              <h3>企业版</h3>
              <div class="price">定制 <span class="period">/ 方案报价</span></div>
              <p class="desc">适合大型行业客户与私有化需求</p>
            </div>
            <div class="card-body">
              <ul>
                <li><el-icon><Check /></el-icon> 无限设备接入</li>
                <li><el-icon><Check /></el-icon> 专属定制开发</li>
                <li><el-icon><Check /></el-icon> 复杂分销模型 (无限级)</li>
                <li><el-icon><Check /></el-icon> 私有化部署 & 源码交付</li>
                <li><el-icon><Check /></el-icon> 专属客户经理</li>
              </ul>
              <router-link to="/contact" class="btn btn-outline full-width">联系商务</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Platform, Monitor, Cpu, Iphone, Check, Close } from '@element-plus/icons-vue'
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

.platform-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: $spacing-lg;
  margin-top: $spacing-xl;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
}

.platform-card {
  background: $color-bg-white;
  padding: $spacing-lg;
  border-radius: 8px;
  border: 1px solid $color-border;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  }

  .icon-box {
    width: 56px;
    height: 56px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    margin-bottom: $spacing-md;
    
    &.android { background: rgba(#3DDC84, 0.1); color: #3DDC84; }
    &.windows { background: rgba(#0078D6, 0.1); color: #0078D6; }
    &.linux { background: rgba(#FCC624, 0.1); color: #F7931E; }
    &.apple { background: rgba(#000000, 0.05); color: #000000; }
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: $spacing-md;
  }

  ul {
    padding-left: 20px;
    
    li {
      list-style-type: disc;
      color: $color-secondary-gray;
      margin-bottom: 8px;
      font-size: 0.9rem;
    }
  }
}

.distribution-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $spacing-xxl;
  align-items: center;
  margin-top: $spacing-xl;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: $spacing-xl;
  }
}

.feature-item {
  margin-bottom: $spacing-xl;

  h3 {
    font-size: 1.25rem;
    color: $color-primary-black;
    margin-bottom: $spacing-sm;
  }

  p {
    color: $color-secondary-gray;
    line-height: 1.6;
  }
}

.hierarchy-chart {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px;
  background: $color-bg-surface;
  border-radius: 16px;

  .level {
    background: $color-bg-white;
    border: 1px solid $color-border;
    padding: 12px 24px;
    border-radius: 6px;
    font-weight: 600;
    color: $color-primary-black;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    min-width: 160px;
    text-align: center;
  }

  .level-1 { border-color: $color-brand-blue; color: $color-brand-blue; }
  
  .connector {
    width: 2px;
    height: 20px;
    background-color: $color-border;
  }

  .level-group {
    display: flex;
    gap: 20px;
  }
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $spacing-lg;
  margin-top: $spacing-xl;
  align-items: center; // Align cards vertically

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
}

.pricing-card {
  background: $color-bg-white;
  border: 1px solid $color-border;
  border-radius: 12px;
  padding: $spacing-xl;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  }

  &.featured {
    border-color: $color-brand-blue;
    box-shadow: 0 10px 40px rgba(37, 99, 235, 0.1);
    transform: scale(1.05);
    z-index: 1;

    &:hover {
      transform: scale(1.05) translateY(-5px);
    }
  }

  .tag {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background-color: $color-brand-blue;
    color: white;
    padding: 4px 12px;
    border-radius: 100px;
    font-size: 0.75rem;
    font-weight: 600;
  }

  .card-header {
    text-align: center;
    margin-bottom: $spacing-lg;
    border-bottom: 1px solid $color-bg-surface;
    padding-bottom: $spacing-lg;

    h3 {
      font-size: 1.25rem;
      margin-bottom: $spacing-sm;
    }

    .price {
      font-size: 2.5rem;
      font-weight: 700;
      color: $color-primary-black;
      
      .period {
        font-size: 1rem;
        color: $color-secondary-gray;
        font-weight: 400;
      }
    }

    .desc {
      color: $color-secondary-gray;
      font-size: 0.875rem;
      margin-top: $spacing-sm;
    }
  }

  .card-body {
    ul {
      margin-bottom: $spacing-xl;

      li {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 12px;
        font-size: 0.95rem;
        color: $color-primary-black;

        .el-icon {
          color: $color-success;
        }

        &.disabled {
          color: $color-secondary-gray;
          text-decoration: line-through;
          
          .el-icon {
            color: $color-secondary-gray;
          }
        }
      }
    }

    .full-width {
      width: 100%;
    }
  }
}
</style>
