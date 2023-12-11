<template>
  <Layout :menuList="menus">
    <RouterView />
  </Layout>
</template>

<script setup lang="ts">
// import { RouterView } from 'vue-router'
import Layout from '@/components/public/layout'
import { localCache } from '@/utils/cache'
import { USER_MENUS } from '@/config'

const menus = localCache.getCache(USER_MENUS)
</script>
