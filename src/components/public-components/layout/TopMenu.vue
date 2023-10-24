<script lang="ts" setup>
import { computed, reactive } from 'vue'
import type { MenuProps } from './index.ts'
import { ElMenu } from 'element-plus'
import MenuItem from './components/MenuItem.vue'
import { useRoute } from 'vue-router'

const props = defineProps<{
  menuList: MenuProps
}>()
const route = useRoute()
const routePath = computed(() => route.path)
const info = reactive({
  imgUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
})

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<template>
  <div class="top-menu bg-#252F3C flex flex-justify-between text-center">
    <div class="c-red font-20rpx p-t-8px">
      <ElMenu
        :defaultActive="routePath"
        class="top-menu-content"
        @open="handleOpen"
        @close="handleClose"
        :collapse="true"
        :router="true"
      >
        <MenuItem v-for="(item, index) of props.menuList" :key="index" :item="item" />
      </ElMenu>
    </div>
    <!--    <el-button>123465</el-button>-->
    <div class="">
      <el-avatar size="" :src="info.imgUrl" />
    </div>
  </div>
</template>
<style scoped>
.top-menu {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.top-menu-content {
  width: 50px;
  border: 0;
  --el-menu-bg-color: rgba(37, 47, 60, 1);
  --el-menu-text-color: rgba(236, 247, 255, 1);
  /*--el-menu-active-color: rgba(47, 58, 77, 1);*/
  --el-menu-hover-bg-color: rgba(59, 73, 96, 1);
  .el-menu-item,
  .el-sub-menu {
    padding: 0 13px;
    text-align: center;
  }
  /deep/ .el-sub-menu__title {
    padding: 0;
  }
}
</style>
