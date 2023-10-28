<script setup lang="ts">
import TopMenu, { type TopMenuItemProps, type TopMenuProps } from './TopMenu/index.ts'
import Header from './Header.vue'
import MainMenu from './MainMenu'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import type { MenuProps, MenuItemProps } from './index.ts'

const props = defineProps<{
  menuList: MenuProps
}>()
const route = useRoute()
const topMenu: TopMenuProps = [
  { id: '111', name: '基础', icon: 'ri-home-3-fill' },
  { id: '222', name: '微信', icon: 'ri-wechat-fill' },
  { id: '333', name: '大学', icon: 'ri-school-fill' },
  { id: '444', name: '商城', icon: 'ri-store-2-fill' }
]
const getCurrentTopMenu = (id: string, item: TopMenuItemProps) => {
  console.log(id, item)
}
const currentMenu = computed<MenuItemProps | { children: [] }>(
  () =>
    props.menuList.find((item) => route.path.startsWith(item.url)) || {
      children: []
    }
)
</script>

<template>
  <el-container class="main-content">
    <el-aside width="200px">
      <TopMenu :data="topMenu" :defineValue="'111'" @change="getCurrentTopMenu" />
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
  background-color: #f7fbff;
}
</style>
