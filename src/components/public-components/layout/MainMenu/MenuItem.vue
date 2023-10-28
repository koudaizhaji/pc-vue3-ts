<script setup lang="ts">
import type { MenuItemProps } from '../index'
import * as Icon from '@element-plus/icons-vue'

const { item } = defineProps<{
  item: MenuItemProps
}>()
</script>

<template>
  <el-sub-menu :index="item.url" v-if="item.children && item.children.length">
    <template #title>
      <el-icon v-if="item.icon && item.icon.length"><component :is="Icon[item.icon]" /></el-icon>
      <span>{{ item.title }}</span>
    </template>
    <MenuItem v-for="(it, i) of item.children" :key="i" :item="it" />
  </el-sub-menu>
  <el-menu-item v-else :index="item.url">
    <el-icon v-if="item.icon && item.icon.length"><component :is="Icon[item.icon]" /></el-icon>
    <span>{{ item.title }}</span>
  </el-menu-item>
</template>

<style scoped lang="less"></style>
