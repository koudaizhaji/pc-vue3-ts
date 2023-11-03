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

<style lang="less">
.app {
  width: 100vw;
  height: 100vh;
  min-width: 1200px;
  min-height: 625px;
  background-color: #f7f7f8;

  /* 滚动条容器 */
  *::-webkit-scrollbar {
    width: 5px;
    height: 10px;
  }

  /* 滚动条轨道 */
  *::-webkit-scrollbar-track {
    background-color: transparent;
  }

  /* 滚动条滑块 */
  *::-webkit-scrollbar-thumb {
    background-color: #cccccc;
    opacity: 0; /* 初始时隐藏滚动条滑块 */
    transition: opacity 0.3s ease-in-out; /* 添加过渡效果 */
  }

  /* 鼠标悬停时显示滚动条滑块 */
  *::-webkit-scrollbar:hover {
    width: 10px;
    height: 50px;
  }

  *::-webkit-scrollbar-thumb:hover {
    opacity: 1;
  }
}
</style>
