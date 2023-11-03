<script setup lang="ts">
import { ElInput, ElPopover, ElTag } from 'element-plus'
import type { PublicSearchItemProps } from '../index'

const props = defineProps<{
  unSetList: PublicSearchItemProps[]
}>()
const emits = defineEmits<{
  (e: 'selectItem', item: PublicSearchItemProps, index: number): void
}>()

const selectItem = (item, index) => {
  emits('selectItem', item, index)
}
</script>

<template>
  <ElPopover trigger="click" placement="bottom-start" width="100px">
    <template v-slot:reference>
      <ElInput size="default" autofocus placeholder="请选择搜索项"></ElInput>
    </template>
    <template v-slot:default>
      <div class="max-h-150px">
        <ElTag
          class="cursor-pointer m-y-4px"
          :title="item.label"
          type="info"
          v-for="(item, index) of props.unSetList"
          :key="item.key"
          @click="selectItem(item, index)"
        >
          <div class="w-100px truncate">
            {{ item.label }}
          </div>
        </ElTag>
      </div>
    </template>
  </ElPopover>
</template>
