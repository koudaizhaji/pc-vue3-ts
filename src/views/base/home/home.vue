<template>
  <div class="main">
    <Layout>
      <RouterView />
    </Layout>
  </div>
</template>

<script setup lang="ts">
import Layout from '@/components/public-components/layout'
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  width: 100%;
}
</style>
