<template>
  <div class="header-right h-full line-height-100% flex justify-end flex-items-center">
    <el-button class="m-r-4px" link><i class="ri-settings-2-line font-size-20px" /></el-button>
    <el-button class="m-r-4px" link><i class="ri-printer-line font-size-20px" /></el-button>
    <el-button link><i class="ri-message-2-line font-size-20px" /></el-button>
    <div class="w-1px h-30px bg-#ebeef5 m-l-8px m-r-8px" />
    <el-dropdown class="m-r-8px">
      <div
        class="el-dropdown-link cursor-pointer flex flex-items-center focus-visible-outline-0px"
        style="color: var(--el-color-primary)"
      >
        {{ username }}
        <el-icon class="el-icon--right">
          <ArrowDown />
        </el-icon>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item divided @click="clearLocal">清除缓存</el-dropdown-item>
          <el-dropdown-item disabled>个人信息</el-dropdown-item>
          <el-dropdown-item disabled>样式切换</el-dropdown-item>
          <el-dropdown-item divided @click="logout">登出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script setup lang="ts">
import { localCache } from '@/utils/cache'
import { computed } from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import useLoginStore from '@/stores/login/login'
import { USER_MENUS } from '@/config'

const loginStore = useLoginStore()
const router = useRouter()
const username = computed(() => localCache.getCache('user_info').username)
const logout = () => {
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({})
    }, 500)
  })
    .then(() => {
      localCache.clearCache()
      ElMessage.success('已经登出系统')
      router.push('/login')
    })
    .catch((error) => {
      console.error(error)
      ElMessage.error('登出失败')
    })
}
const clearLocal = async () => {
  // 清除用户菜单，重新获取
  localCache.removeCache(USER_MENUS)
  await loginStore.getUserMenus()
  ElMessage.success('清除缓存成功')
  setTimeout(() => {
    location.reload()
  }, 1000)
}
</script>
