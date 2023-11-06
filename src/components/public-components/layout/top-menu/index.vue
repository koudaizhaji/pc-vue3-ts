<script lang="ts" setup>
import { ref } from 'vue'
import type { TopMenuProps, TopMenuItemProps } from './index.ts'
import { ElDropdown, ElDropdownMenu, ElDropdownItem, ElMessage } from 'element-plus'
import logoPng from '@/assets/imgs/logo.png'
import { localCache } from '@/utils/cache'
import { useRouter } from 'vue-router'

const props = defineProps<{
  data: TopMenuProps
  defineValue?: string
}>()
const emits = defineEmits(['change'])
const active = ref<string>(props?.defineValue || '')
const router = useRouter()

const setActive = (item: TopMenuItemProps) => {
  active.value = item.id
  emits('change', item.id, item)
}
const getMenuItemClass = (item: TopMenuItemProps) => {
  if (active.value === item.id) return 'c-#70B2F6'
  return 'c-#FEFEFE'
}

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
</script>
<template>
  <div class="h-full top-menu flex-col bg-#252F3C flex flex-justify-between text-center">
    <div class="font-20rpx p-t-8px">
      <div
        v-for="(item, index) of props.data"
        :key="index"
        :class="`m-t-8px cursor-pointer p-t-8px p-b-8px hover-bg-#45505D ${getMenuItemClass(item)}`"
        @click="setActive(item)"
      >
        <div><i :class="`${item.icon} font-size-24px font-normal`"></i></div>
        <div>{{ item.name }}</div>
      </div>
    </div>
    <!--    <el-button>123465</el-button>-->
    <ElDropdown>
      <template v-slot:default>
        <div class="text-center w-full select-none">
          <el-avatar size="" :src="logoPng" />
        </div>
      </template>
      <template v-slot:dropdown>
        <ElDropdownMenu>
          <ElDropdownItem>个人信息</ElDropdownItem>
          <ElDropdownItem disabled>样式切换</ElDropdownItem>
          <ElDropdownItem divided @click="logout">登出</ElDropdownItem>
        </ElDropdownMenu>
      </template>
    </ElDropdown>
  </div>
</template>
