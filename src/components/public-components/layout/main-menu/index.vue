<script lang="ts" setup>
import MenuItem from './menu-item.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import type { MenuProps } from '../index'

const props = defineProps<{
  menuList: MenuProps
}>()
const route = useRoute()
const routePath = computed(() => route.path)

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <div class="main-menu">
    <el-menu
      :defaultActive="routePath"
      class="main-menu-content"
      @open="handleOpen"
      @close="handleClose"
      :router="true"
    >
      <MenuItem v-for="(item, index) of props.menuList || []" :key="index" :item="item" />
    </el-menu>
  </div>
</template>

<style lang="less" scoped>
.main-menu {
  background-color: rgba(255, 255, 255, 1);
  padding-top: 30px;
  //border-bottom-left-radius: 20px;
  //border-top-left-radius: 20px;
  border-right: 1px solid rgba(217, 217, 217, 0.7);
  box-sizing: border-box;
  height: 100%;
  user-select: none;
}
.main-menu-content {
  /* 常规 */
  border: 0;
  height: 100%;
  overflow: auto;
  background-color: rgba(255, 255, 255, 1);
  :deep(.el-menu-item.is-active) {
    background-color: #ecf5ff;
  }
}
</style>
