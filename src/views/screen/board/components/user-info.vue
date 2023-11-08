<script setup lang="ts">
import { ElCard, ElAvatar, ElTag } from 'element-plus'
import { computed } from 'vue'
import { localCache } from '@/utils/cache'
import { USER_INFO } from '@/config'
import moment from 'moment'

const userInfo = computed<Record<string, any>>(() => localCache.getCache(USER_INFO))
const roleInfo = computed(() => {
  switch (userInfo.value.role_id) {
    case 1:
      return { type: '', title: '超级管理员' }
    default:
      return { type: 'info', title: '用户' }
  }
})
</script>

<template>
  <ElCard class="analysis-overview-user-info">
    <div class="flex flex-justify-left">
      <ElAvatar :size="70" src="https://kitaikuyo.one/usr/uploads/2023/09/262651084.png" />
      <div class="m-l-16px">
        <div>
          <span class="font-700 font-size-16px">{{ userInfo.username }}</span>
          <ElTag class="m-l-8px" :type="roleInfo.type" size="small">{{ roleInfo.title }}</ElTag>
        </div>
        <div class="font-size-14px m-t-8px">
          <i class="ri-notification-3-fill"></i>
          您有<span class="c-#F56C6C font-800 font-size-18px m-l-4px m-r-4px">14</span>条新消息!
        </div>
        <div class="m-t-8px font-size-12px">
          上次登录时间： {{ moment(userInfo.updatedAt).format('YYYY-MM-DD HH:mm:ss') }}
        </div>
      </div>
    </div>
  </ElCard>
</template>
