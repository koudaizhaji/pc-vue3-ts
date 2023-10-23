<template>
  <div class="main">
    <Layout :menuList="menuList">
      <RouterView />
    </Layout>
  </div>
</template>

<script setup lang="ts">
import Layout from '@/components/public-components/layout/index.vue'
import { localCache } from '@/utils/cache'
const menuList = localCache.getCache('user_menus')
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  width: 100%;
}
</style>
