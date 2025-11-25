<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-content">
        <!-- 主要内容区域 -->
        <div class="footer-main">
          <div class="row">
            <!-- 公司信息 -->
            <div class="col-12 col-md-6 col-lg-3">
              <div class="footer-section">
                <div class="footer-logo">
                  <img src="/logo.png" alt="无限科技PMS" class="logo-image" />
                  <span class="logo-text">无限科技PMS</span>
                </div>
                <p class="footer-desc">
                  基于多级分销模式的广告流量分发平台管理系统，让广告分发更智能，让收益管理更简单。
                </p>
                <div class="social-links">
                  <a href="#" class="social-link" title="微信">
                    <el-icon><ChatDotRound /></el-icon>
                  </a>
                  <a href="#" class="social-link" title="QQ">
                    <el-icon><Message /></el-icon>
                  </a>
                  <a href="#" class="social-link" title="邮箱">
                    <el-icon><Message /></el-icon>
                  </a>
                </div>
              </div>
            </div>

            <!-- 产品链接 -->
            <div class="col-12 col-md-6 col-lg-3">
              <div class="footer-section">
                <h4 class="footer-title">产品功能</h4>
                <ul class="footer-links">
                  <li><router-link to="/products#yuyu-admin">Web管理后台</router-link></li>
                  <li><router-link to="/products#dudu-acs">Android管理端</router-link></li>
                  <li><router-link to="/products#tengteng-wallet">钱包应用</router-link></li>
                  <li><router-link to="/products#luoluo-mm">用户端应用</router-link></li>
                  <li><router-link to="/products#zhuangzhuang-api">后端服务</router-link></li>
                </ul>
              </div>
            </div>

            <!-- 解决方案 -->
            <div class="col-12 col-md-6 col-lg-3">
              <div class="footer-section">
                <h4 class="footer-title">解决方案</h4>
                <ul class="footer-links">
                  <li><router-link to="/solutions#business-model">商业模式</router-link></li>
                  <li><router-link to="/solutions#distribution">多级分销</router-link></li>
                  <li><router-link to="/solutions#revenue">收入模式</router-link></li>
                  <li><router-link to="/solutions#scenarios">应用场景</router-link></li>
                </ul>
              </div>
            </div>

            <!-- 联系信息 -->
            <div class="col-12 col-md-6 col-lg-3">
              <div class="footer-section">
                <h4 class="footer-title">联系我们</h4>
                <ul class="footer-contacts">
                  <li>
                    <el-icon><Location /></el-icon>
                    <span>中国·深圳</span>
                  </li>
                  <li>
                    <el-icon><Message /></el-icon>
                    <span>contact@wuxian.tech</span>
                  </li>
                  <li>
                    <el-icon><Phone /></el-icon>
                    <span>400-888-8888</span>
                  </li>
                  <li>
                    <el-icon><Clock /></el-icon>
                    <span>周一至周五 9:00-18:00</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- 底部版权信息 -->
        <div class="footer-bottom">
          <div class="footer-copyright">
            <p>&copy; {{ currentYear }} 无限科技PMS. 保留所有权利.</p>
            <p>
              <a href="#" class="footer-link">隐私政策</a>
              <span class="separator">|</span>
              <a href="#" class="footer-link">服务条款</a>
              <span class="separator">|</span>
              <a href="#" class="footer-link">法律声明</a>
            </p>
          </div>
          <div class="footer-badges">
            <span class="badge">生产就绪</span>
            <span class="badge">94%完成度</span>
            <span class="badge">企业级</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ChatDotRound, Message, Location, Phone, Clock } from '@element-plus/icons-vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style lang="scss" scoped>
.app-footer {
  background: var(--bg-dark);
  color: #ffffff;
  margin-top: auto;
}

.footer-content {
  padding: var(--spacing-xxl) 0 var(--spacing-lg);
}

.footer-section {
  margin-bottom: var(--spacing-xl);

  @include respond-to(lg) {
    margin-bottom: 0;
  }
}

.footer-logo {
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-md);

  .logo-image {
    width: 32px;
    height: 32px;
    margin-right: var(--spacing-sm);
  }

  .logo-text {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-bold);
    color: var(--primary-color);
  }
}

.footer-desc {
  color: #cccccc;
  line-height: var(--line-height-loose);
  margin-bottom: var(--spacing-lg);
}

.footer-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-md);
  color: #ffffff;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: var(--spacing-sm);
  }

  a {
    color: #cccccc;
    text-decoration: none;
    transition: color var(--transition-fast);

    &:hover {
      color: var(--primary-color);
    }
  }
}

.footer-contacts {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    align-items: center;
    margin-bottom: var(--spacing-sm);
    color: #cccccc;

    .el-icon {
      margin-right: var(--spacing-sm);
      color: var(--primary-color);
    }
  }
}

.social-links {
  display: flex;
  gap: var(--spacing-md);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #cccccc;
  text-decoration: none;
  transition: all var(--transition-fast);

  &:hover {
    background: var(--primary-color);
    color: #ffffff;
    transform: translateY(-2px);
  }

  .el-icon {
    font-size: 18px;
  }
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--spacing-lg);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  flex-wrap: wrap;
  gap: var(--spacing-md);

  @media (max-width: 767px) {
    flex-direction: column;
    text-align: center;
  }
}

.footer-copyright {
  color: #999999;
  font-size: var(--font-size-sm);

  p {
    margin: 0;
    margin-bottom: var(--spacing-xs);
  }

  .footer-link {
    color: #cccccc;
    text-decoration: none;
    transition: color var(--transition-fast);

    &:hover {
      color: var(--primary-color);
    }
  }

  .separator {
    margin: 0 var(--spacing-sm);
    color: #666666;
  }
}

.footer-badges {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
}

.badge {
  padding: var(--spacing-xs) var(--spacing-sm);
  background: var(--primary-color);
  color: #ffffff;
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  border-radius: var(--border-radius-small);
}
</style>
