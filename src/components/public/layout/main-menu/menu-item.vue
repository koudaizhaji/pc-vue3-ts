<template>
  <el-sub-menu
    :index="item.url"
    v-if="item.children && item.children.length && findSubMenu(item.children)"
  >
    <template #title>
      <el-icon v-if="item.icon && item.icon.length">
        <component :is="item.icon" />
      </el-icon>
      <span>{{ item.title }}</span>
    </template>
    <MenuItem v-for="(it, i) of item.children" :key="i" :item="it" />
  </el-sub-menu>
  <el-menu-item v-else :index="item.url">
    <el-icon v-if="item.icon && item.icon.length"> <component :is="item.icon" /></el-icon>
    <span>{{ item.title }}</span>
  </el-menu-item>
</template>

<script setup lang="ts">
import type { MenuItemProps } from '../index'
import { getIcon } from '@/utils/getICIcon'

const { item } = defineProps<{
  item: MenuItemProps
}>()

const findSubMenu = (children: MenuItemProps[]): boolean => {
  if (!children.length) return false
  let check = false
  children.forEach((item) => {
    check = check || item.url !== 'no-url'
  })
  return check
}
</script>

<style scoped lang="less"></style>
