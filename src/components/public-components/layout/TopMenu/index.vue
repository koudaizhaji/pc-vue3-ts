<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { TopMenuProps, TopMenuItemProps } from './index.ts'

const props = defineProps<{
  data: TopMenuProps
  defineValue?: string
}>()
const emits = defineEmits(['change'])
const active = ref<string>(props?.defineValue || '')
const setActive = (item: TopMenuItemProps) => {
  active.value = item.id
  emits('change', item.id, item)
}
const getMenuItemClass = (item: TopMenuItemProps) => {
  if (active.value === item.id) return 'c-#70B2F6'
  return 'c-#FEFEFE'
}
const info = reactive({
  imgUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
})
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
    <div class="">
      <el-avatar size="" :src="info.imgUrl" />
    </div>
  </div>
</template>
