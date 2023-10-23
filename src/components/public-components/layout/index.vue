<script setup lang="ts">
import TopMenu from './top-menu.vue'
import Header from './header.vue'
import MainMenu from './MainMenu/index.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import type { MenuProps } from './index.ts'
// import { defineProps } from 'vue' // 支持直接使用

// eslint-disable-next-line vue/valid-define-props
const props = defineProps<{
  menuList: MenuProps
}>()
const route = useRoute()
const currentMenu = computed(
  () => props.menuList.find((item) => route.path.startsWith(item.url)) || {}
)
</script>

<template>
  <el-container class="main-content">
    <el-aside width="200px">
      <TopMenu />
      <MainMenu :currentMenu="currentMenu" />
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
  background-color: #252f3c;
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
