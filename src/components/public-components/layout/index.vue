<script setup lang="ts">
import TopMenu, {
  type TopMenuItemProps,
  type TopMenuProps
} from '@/components/public-components/layout/top-menu/index'
import {
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElCard
} from 'element-plus'
import Header from '@/components/public-components/layout/header/index.vue'
import MainMenu from './main-menu'
import { useRoute, useRouter } from 'vue-router'
import type { MenuProps } from './index.ts'

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
// 因为element breadcrumb 无法跳转路由而设置的
const router = useRouter()
const breadcrumbTo = (route?: string) => {
  if (route) router.push(route)
}
</script>

<template>
  <ElContainer class="main-content">
    <ElAside width="200px">
      <TopMenu :data="topMenu" :defineValue="'111'" @change="getCurrentTopMenu" />
      <MainMenu :menuList="props.menuList || []" />
    </ElAside>
    <ElContainer>
      <ElHeader height="50px">
        <Header />
      </ElHeader>
      <ElMain>
        <ElBreadcrumb class="m-b-16px">
          <ElBreadcrumbItem
            v-for="(item, index) of route.meta.nav || []"
            :key="index"
            :to="{ path: item.path }"
            @click="breadcrumbTo(index === route.meta.nav.length - 1 ? null : item.path)"
            >{{ item.title }}</ElBreadcrumbItem
          >
        </ElBreadcrumb>
        <slot v-if="route.meta.isSpecially"></slot>
        <ElCard v-else style="height: calc(100% - 32px)">
          <slot></slot>
        </ElCard>
      </ElMain>
      <!-- <el-footer height="30px">
        Footer
      </el-footer>-->
    </ElContainer>
  </ElContainer>
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
/deep/ .el-card {
  .el-card__body {
    height: calc(100% - 40px);
  }
}
</style>
