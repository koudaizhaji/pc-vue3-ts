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
import { defineProps, PropType } from 'vue'
import { LILIBreadcrumbItem } from './types'

defineProps({
  breadcrumbs: {
    type: Array as PropType<LILIBreadcrumbItem[]>,
    default: () => []
  }
})
</script>

<style lang="less"></style>
