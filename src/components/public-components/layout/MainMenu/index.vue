<script lang="ts" setup>
import MenuItem from './MenuItem.vue'
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
}
.main-menu-content {
  /* 常规 */
  //--el-menu-bg-color: rgba(47, 58, 77, 1);
  //--el-menu-text-color: #ecf7ff;
  // --el-menu-active-color:
  //--el-menu-hover-bg-color: rgba(59, 73, 96, 1);
  border: 0;
  .el-menu-item.is-active {
    //background-color: rgba(37, 47, 60, 1);
    &:hover {
      //background-color: rgba(59, 73, 96, 1);
    }
  }
}
</style>
