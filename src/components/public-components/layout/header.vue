<template>
  <div class="header">
    <h2>header</h2>
    <button @click="handleExitClick">退出登录</button>
  </div>
</template>
<script setup lang="ts">
import { LOGIN_TOKEN } from '@/config'
import { localCache } from '@/utils/cache'
import { useRouter } from 'vue-router'

const router = useRouter()
// import LoginPanel from "./c-cpns/login-panel.vue"
const handleExitClick = () => {
  // step1:清除token
  localCache.removeCache(LOGIN_TOKEN)
  // step2:跳回login页面
  router.push('/login')
}
</script>
<style scoped>
.header {
  /* width: 100%; */
  background-color: skyblue;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
</style>
