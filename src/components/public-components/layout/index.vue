<script setup lang="ts">
import TopMenu from './top-menu/index'
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
import { computed, ref } from 'vue'

const props = defineProps<{
  menuList: MenuProps
}>()
const route = useRoute()
// 因为element breadcrumb 无法跳转路由而设置的
const router = useRouter()
const topMenuId = ref<number | string>()
const setTopMenuId = (id: string | number) => {
  topMenuId.value = id
}
const mainMenuLise = computed(() => {
  return props.menuList.find((item) => item.id === topMenuId.value)?.children
})
const breadcrumbTo = (route?: string) => {
  if (route) router.push(route)
}
</script>

<template>
  <ElContainer class="main-content">
    <ElAside width="250px">
      <TopMenu :data="props.menuList" @change="setTopMenuId" />
      <MainMenu :menuList="mainMenuLise || []" />
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
    width: 75px;
  }
  .main-menu {
    width: 175px;
  }
}
.el-header {
  background-color: #ffffff;
  padding: 0;
}
.el-main {
  background-color: #f7fbff;
}
:deep(.el-card) {
  .el-card__body {
    height: calc(100% - 40px);
  }
}
</style>
