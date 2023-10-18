<script setup lang="ts">
import TopMenu from './top-menu.vue'
import Header from './header.vue'
import MainMenu from './main-menu.vue'
</script>

<template>
  <el-container class="main-content">
    <el-aside width="200px">
      <TopMenu />
      <MainMenu />
    </el-aside>
    <el-container>
      <el-header height="50px">
        <Header />
      </el-header>
      <el-main>
        <slot></slot>
      </el-main>
     <!-- <el-footer height="30px">
        Footer
      </el-footer>-->
    </el-container>
  </el-container>
</template>

<style scoped lang="less">
.main-content {
  height: 100%;
  width: 100%;
}

.el-aside {
  height: 100%;
  display: flex;
  justify-content: left;
  .top-menu {
    width: 50px;
  }
  .main-menu {
    width: 150px;
  }
}
.el-header {
  background-color: #ffffff;
  padding: 0;
}
.el-main {
  background-color: #F7FBFF;
}
</style>
