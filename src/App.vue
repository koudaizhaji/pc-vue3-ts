<template>
  <ElConfigProvider :locale="zhCn">
    <div class="app">
      <RouterView />
    </div>
  </ElConfigProvider>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<style scoped>
.app {
  width: 100vw;
  height: 100vh;
  min-width: 1200px;
  min-height: 625px;
  background-color: #f7f7f8;
}
</style>
