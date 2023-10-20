<!--
 * @Author: 李立
 * @Date: 2023-10-16 18:45:02
 * @LastEditors: 李立
 * @LastEditTime: 2023-10-16 19:05:32
 * @FilePath: \apiObjectc:\Users\Farben\Desktop\allObj\pc-vue3-ts\src\components\public-components\menus\top-menu.vue
 * @Description:  
 * 相关开发文件头自动添加：联系微信huaiplayboy
-->
<script lang="ts" setup>
import { reactive } from 'vue'

const list = reactive([
  {
    imgUrl:
      'https://file.sheepjs.com/static/img/admin/access/wechat.png?imageMogr2/thumbnail/200x200',
    route: ''
  },
  {
    imgUrl:
      'https://file.sheepjs.com/static/img/admin/access/wechat.png?imageMogr2/thumbnail/200x200',
    route: ''
  }
])
const info = reactive({
  imgUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
})
</script>
<template>
  <div class="top-menu bg-#252F3C flex flex-justify-between text-center">
    <div class="c-red font-20rpx p-t-8px">
      <el-avatar
        class="m-b-4px cursor-pointer"
        size=""
        v-for="(item, index) of list"
        :key="index"
        :src="item.imgUrl"
        shape="square"
      />
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
</style>
