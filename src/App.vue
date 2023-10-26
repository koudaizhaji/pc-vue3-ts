<template>
  <div class="app">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<style scoped>
.app {
  width: 100vw;
  height: 100vh;
  min-width: 1600px;
  min-height: 900px;
  background-color: #f7f7f8;
}
</style>
