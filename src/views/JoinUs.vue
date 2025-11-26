<template>
  <div class="join-us-view">
    <section class="page-hero">
      <div class="container" data-aos="fade-up">
        <h1>加入我们</h1>
        <p>与一群充满激情的人，共同构建物联网的未来。</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="jobs-list">
          <!-- Job 1 -->
          <div class="job-card" data-aos="fade-up">
            <div class="job-header">
              <h3>高级前端工程师</h3>
              <span class="location">北京 / 杭州</span>
            </div>
            <p class="job-desc">负责公司核心产品的前端架构设计与开发，主导 Vue 3 + TypeScript 技术栈的演进。</p>
            <div class="tags">
              <span>Vue 3</span>
              <span>TypeScript</span>
              <span>WebGL</span>
            </div>
            <el-button link type="primary">查看详情 &rarr;</el-button>
          </div>

          <!-- Job 2 -->
          <div class="job-card" data-aos="fade-up" data-aos-delay="100">
            <div class="job-header">
              <h3>Go 后端开发专家</h3>
              <span class="location">成都 / 深圳</span>
            </div>
            <p class="job-desc">负责千万级设备连接的物联网平台后端研发，优化高并发场景下的系统性能。</p>
            <div class="tags">
              <span>Golang</span>
              <span>Microservices</span>
              <span>MQTT</span>
            </div>
            <el-button link type="primary">查看详情 &rarr;</el-button>
          </div>

          <!-- Job 3 -->
          <div class="job-card" data-aos="fade-up" data-aos-delay="200">
            <div class="job-header">
              <h3>物联网解决方案架构师</h3>
              <span class="location">北京</span>
            </div>
            <p class="job-desc">深入行业场景，为大客户提供基于网腾无限产品的数字化转型解决方案。</p>
            <div class="tags">
              <span>IoT</span>
              <span>Solution</span>
              <span>Consulting</span>
            </div>
            <el-button link type="primary">查看详情 &rarr;</el-button>
          </div>
        </div>

        <div class="apply-footer" data-aos="fade-up">
          <h3>没有合适的职位？</h3>
          <p>我们始终欢迎优秀的人才。请将简历发送至 <a href="mailto:hr@wuxian.xyz">hr@wuxian.xyz</a></p>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.page-hero {
  padding: 120px 0 80px;
  text-align: center;
  background-color: $color-bg-surface;

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

.jobs-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $spacing-lg;
  margin-bottom: $spacing-xl;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
}

.job-card {
  background: $color-bg-white;
  padding: $spacing-xl;
  border-radius: 8px;
  border: 1px solid $color-border;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    border-color: $color-brand-blue;
  }

  .job-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: $spacing-md;

    h3 {
      font-size: 1.25rem;
      color: $color-primary-black;
      margin: 0;
    }

    .location {
      font-size: 0.875rem;
      color: $color-secondary-gray;
      background: $color-bg-surface;
      padding: 2px 8px;
      border-radius: 4px;
    }
  }

  .job-desc {
    color: $color-secondary-gray;
    margin-bottom: $spacing-lg;
    line-height: 1.6;
    min-height: 3.2em;
  }

  .tags {
    display: flex;
    gap: 8px;
    margin-bottom: $spacing-lg;
    flex-wrap: wrap;

    span {
      font-size: 0.75rem;
      color: $color-brand-blue;
      background: rgba($color-brand-blue, 0.1);
      padding: 2px 8px;
      border-radius: 100px;
    }
  }
}

.apply-footer {
  text-align: center;
  margin-top: 80px;
  padding: 40px;
  background: $color-bg-surface;
  border-radius: 12px;

  h3 {
    font-size: 1.5rem;
    margin-bottom: $spacing-sm;
  }

  a {
    color: $color-brand-blue;
    font-weight: 600;
  }
}
</style>
