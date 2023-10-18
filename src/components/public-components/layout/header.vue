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

<template>
  <div class="header"></div>
</template>
<style scoped lang="less">
.header {
  width: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 50px;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
}
</style>
