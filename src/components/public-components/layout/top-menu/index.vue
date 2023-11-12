<script lang="ts" setup>
import { ref, watch, h } from 'vue'
import { ElDropdown, ElDropdownMenu, ElDropdownItem, ElMessage } from 'element-plus'
import logoPng from '@/assets/imgs/logo.png'
import { localCache } from '@/utils/cache'
import { useRoute, useRouter } from 'vue-router'
import type { MenuProps, MenuItemProps } from '@/components/public-components/layout/index'
import { getIcon } from '@/utils/getICIcon'

const props = defineProps<{
  data: MenuProps
}>()
const emits = defineEmits<{
  (e: 'change', id: number | string, index: number): void
}>()
const route = useRoute()
const router = useRouter()
const active = ref<string | number>('')
watch(
  route,
  () => {
    active.value = props.data.find((item) => route.path.startsWith(item.url))?.id as string | number
    emits('change', active.value, -1)
  },
  {
    deep: true,
    immediate: true
  }
)

const setActive = (item: MenuItemProps, index: number) => {
  active.value = item.id
  router.push(item.url)
  emits('change', item.id, index)
}
const getMenuItemClass = (item: MenuItemProps) => {
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
  <div
    class="h-full top-menu flex-col bg-#252F3C flex flex-justify-between text-center select-none"
  >
    <div class="font-20rpx p-t-8px">
      <div
        v-for="(item, index) of props.data"
        :key="index"
        :class="`m-t-8px cursor-pointer p-t-8px p-b-8px hover-bg-#45505D ${getMenuItemClass(item)}`"
        @click="setActive(item, index)"
      >
        <div :class="`text-center w-full font-size-24px h-26px`">
          <component :is="getIcon(item.icon)" />
        </div>
        <div>{{ item.title }}</div>
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
