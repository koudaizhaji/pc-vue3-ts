<template>
  <div class="nav-breadcrumb">
    <el-breadcrumb separator-icon="CaretRight">
      <template v-for="item in breadcrumbs" :key="item.name">
        <el-breadcrumb-item :to="{ path: item.path }">{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
/** 面包屑组件封装
 */
import { computed, defineProps } from 'vue'
import type { PropType } from 'vue'
import type { LILIBreadcrumbItem } from './types'
import useLoginStore from '@/stores/login/login'
import { useRoute } from 'vue-router'
import { pathMapBreadcrumbs } from '@/utils/map-menus'

defineProps({
  // breadcrumbs: {
  //   type: Array as PropType<LILIBreadcrumbItem[]>,
  //   default: () => []
  // }
})

const route = useRoute()
const userMenus = useLoginStore().userMenus
// console.log('userMenus',userMenus,route.path)
const breadcrumbs = computed(() => {
  return pathMapBreadcrumbs(route.path, userMenus)
})
</script>

<style lang="less"></style>
