<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside width="50px">
        <TopMenu />
      </el-aside>
      <el-aside width="150px">
        <MainMenu />
      </el-aside>
      <el-container>
        <el-header height="30px"><Header /></el-header>
        <el-main><Welcome /></el-main>
        <el-footer height="10px">Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import TopMenu from '@/components/public-components/menus/top-menu.vue'
import MainMenu from '@/components/public-components/menus/main-menu.vue'
import Header from '@/components/public-components/menus/header.vue'
import Welcome from '../welcome/welcome.vue'
</script>

<style lang="less" scoped>
.main {
  background: yellow;
  height: 100%;
}

.main-content {
  height: 100%;

  .el-aside {
    background-color: palegoldenrod;
  }
  .el-header {
    // background-color: skyblue;
    background-color: skyblue;
  }
  .el-main {
    background-color: #f8f8f8;
  }
}
</style>
