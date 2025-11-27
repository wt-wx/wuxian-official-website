<template>
  <div class="chat-window">
    <!-- Header -->
    <div class="chat-header">
      <div class="header-title">
        <el-icon><Service /></el-icon>
        <span>在线客服</span>
      </div>
      <el-icon class="close-btn" @click="$emit('close')"><Close /></el-icon>
    </div>

    <!-- Messages Area -->
    <div class="chat-messages" ref="messagesRef">
      <div v-if="loading" class="loading-state">
        <el-icon class="is-loading"><Loading /></el-icon>
        <span>连接中...</span>
      </div>
      
      <div v-else-if="messages.length === 0" class="empty-state">
        <p>👋 您好！有什么可以帮您？</p>
        <p class="sub-text">我们通常在几分钟内回复</p>
      </div>

      <div 
        v-else
        v-for="(msg, index) in messages" 
        :key="msg.id || index"
        class="message-item"
        :class="{ 'is-me': msg.sender_type === 'visitor' }"
      >
        <div class="message-content">
          {{ msg.content }}
        </div>
        <div class="message-time" v-if="msg.created_at">
          {{ formatTime(msg.created_at) }}
        </div>
      </div>
    </div>

    <!-- Input Area -->
    <div class="chat-input">
      <el-input
        v-model="inputText"
        placeholder="输入消息..."
        :rows="2"
        type="textarea"
        resize="none"
        @keyup.enter.exact="handleSend"
      />
      <div class="input-actions">
        <el-button type="primary" size="small" @click="handleSend" :disabled="!inputText.trim()">
          发送
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from 'vue'
import { Service, Close, Loading } from '@element-plus/icons-vue'
import { useCustomerService } from '@/composables/useCustomerService'

const emit = defineEmits(['close'])

const { messages, loading, initSession, sendMessage } = useCustomerService()
const inputText = ref('')
const messagesRef = ref<HTMLElement | null>(null)

// 滚动到底部
const scrollToBottom = async () => {
  await nextTick()
  if (messagesRef.value) {
    messagesRef.value.scrollTop = messagesRef.value.scrollHeight
  }
}

// 发送消息
const handleSend = async () => {
  const content = inputText.value.trim()
  if (!content) return

  inputText.value = '' // 立即清空
  await sendMessage(content, 'visitor')
  scrollToBottom()
}

// 格式化时间
const formatTime = (timeStr: string) => {
  const date = new Date(timeStr)
  return date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
}

// 监听消息变化，自动滚动
watch(() => messages.value.length, scrollToBottom)

onMounted(async () => {
  await initSession()
  scrollToBottom()
})
</script>

<style scoped lang="scss">
.chat-window {
  position: fixed;
  bottom: 100px;
  right: 30px;
  width: 350px;
  height: 500px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 9999;
  border: 1px solid #ebeef5;

  @media (max-width: 480px) {
    width: 90%;
    right: 5%;
    bottom: 20px;
    height: 60vh;
  }
}

.chat-header {
  padding: 15px;
  background: var(--el-color-primary, #409eff);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
  }

  .close-btn {
    cursor: pointer;
    opacity: 0.8;
    &:hover { opacity: 1; }
  }
}

.chat-messages {
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  background: #f5f7fa;
  display: flex;
  flex-direction: column;
  gap: 12px;

  .loading-state, .empty-state {
    text-align: center;
    color: #909399;
    margin-top: 40px;
    
    .sub-text {
      font-size: 12px;
      margin-top: 5px;
    }
  }
}

.message-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 80%;

  &.is-me {
    align-self: flex-end;
    align-items: flex-end;

    .message-content {
      background: var(--el-color-primary, #409eff);
      color: #fff;
      border-radius: 12px 12px 0 12px;
    }
  }

  &:not(.is-me) {
    .message-content {
      background: #fff;
      color: #303133;
      border-radius: 12px 12px 12px 0;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }
  }

  .message-content {
    padding: 10px 14px;
    font-size: 14px;
    line-height: 1.5;
    word-break: break-word;
  }

  .message-time {
    font-size: 11px;
    color: #c0c4cc;
    margin-top: 4px;
    margin-left: 4px;
    margin-right: 4px;
  }
}

.chat-input {
  padding: 12px;
  background: #fff;
  border-top: 1px solid #ebeef5;

  .input-actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 8px;
  }
}
</style>
