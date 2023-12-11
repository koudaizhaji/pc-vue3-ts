<!--
 * @Author: 李立
 * @Date: 2023-11-19 18:41:53
 * @LastEditors: 李立
 * @LastEditTime: 2023-12-04 11:29:01
 * @FilePath: \apiObjectc:\Users\Farben\Desktop\initobj\project\pc-vue3-ts\src\views\index.vue
 * @Description:
 * 相关开发文件头自动添加：联系微信huaiplayboy
-->
<template>
  <div class="main">
    <Layout :menuList="menuList.data" :loading="menuList.loading">
      <RouterView />
    </Layout>
  </div>
</template>

<script setup lang="ts">
import Layout from '@/components/public/layout/index.vue'
import { getRoleMenus } from '@/services/login/login'
import { USER_MENUS } from '@/config'
import { localCache } from '@/utils/cache'
import { reactive } from 'vue'
const menuList = reactive({
  data: [],
  loading: false
})

// 获取用户菜单
menuList.loading = true
getRoleMenus()
  .then(({ data }) => {
    localCache.setCache(USER_MENUS, data)
    menuList.data = data
  })
  .finally(() => {
    menuList.loading = false
  })
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  width: 100%;
}
</style>
