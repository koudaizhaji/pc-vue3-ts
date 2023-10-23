<script setup lang="ts">
const { item } = defineProps(['item'])
</script>

<template>
  <el-menu-item-group v-if="item.children && item.children.length" :title="item.title">
    <MenuItem v-for="(it, i) of item.children" :key="i" :item="it" />
  </el-menu-item-group>
  <el-menu-item v-else :index="item.url">
    <span>{{ item.title }}</span>
  </el-menu-item>
</template>

<style scoped lang="less"></style>
