<script setup lang="ts">
import TopMenu from './top-menu.vue'
import Header from './header.vue'
import MainMenu from './main-menu.vue'
</script>

<template>
  <el-container class="main-content">
    <el-aside width="50px">
      <TopMenu />
    </el-aside>
    <el-aside width="150px">
      <MainMenu />
    </el-aside>
    <el-container>
      <el-header height="30px"><Header /></el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer height="10px">Footer</el-footer>
    </el-container>
  </el-container>
</template>

<style scoped lang="less">
.el-aside {
  background-color: palegoldenrod;
}
.el-header {
  // background-color: skyblue;
  background-color: skyblue;
}
.el-main {
  background-color: salmon;
}
</style>
