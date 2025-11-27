<template>
  <div class="chat-bubble" @click="$emit('toggle')">
    <el-badge :value="unreadCount" :hidden="unreadCount === 0" class="badge">
      <div class="bubble-icon">
        <el-icon :size="28" color="#fff"><ChatDotRound /></el-icon>
      </div>
    </el-badge>
  </div>
</template>

<script setup lang="ts">
import { ChatDotRound } from '@element-plus/icons-vue'

defineProps<{
  unreadCount: number
}>()

defineEmits(['toggle'])
</script>

<style scoped lang="scss">
.chat-bubble {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background-color: var(--el-color-primary, #409eff);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 9999;

  &:hover {
    transform: scale(1.1);
  }

  .bubble-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
