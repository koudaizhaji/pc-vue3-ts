<script setup lang="ts">
import { ElPopover, ElTag } from 'element-plus'
import type { PublicSearchItemProps } from '../index'
import { computed } from 'vue'

const props = defineProps<{
  setList: PublicSearchItemProps[]
  currentItem: PublicSearchItemProps[]
}>()
const emits = defineEmits<{
  (e: 'remove', item: PublicSearchItemProps): void
  (e: 'edit', item: PublicSearchItemProps): void
}>()

const getInfo = (item: PublicSearchItemProps) =>
  `${item.label}：${Array.isArray(item.valueTitle) ? item.valueTitle.join(',') : item.valueTitle}`
const showList = computed(() => {
  if (props.setList.length <= 3) return [props.setList, []]
  const [first, second, ...others] = props.setList
  return [[first, second], others]
})
const removeItem = (item: PublicSearchItemProps) => {
  emits('remove', item)
}
const editItem = (item: PublicSearchItemProps) => {
  if (!props.currentItem.length) emits('edit', item)
}
</script>

<template>
  <div class="flex justify-left" style="grid-column: span 1">
    <ElTag
      v-for="item of showList[0]"
      :key="item.key"
      closable
      class="cursor-pointer"
      :title="getInfo(item)"
      @click="editItem(item)"
      @close="removeItem(item)"
    >
      <div class="max-w-90px truncate">{{ getInfo(item) }}</div>
    </ElTag>
    <ElPopover
      :disabled="!showList[1].length"
      trigger="click"
      placement="bottom-start"
      width="110px"
    >
      <template v-slot:reference>
        <ElTag v-show="showList[1].length">更多...</ElTag>
      </template>
      <template v-slot:default>
        <ElTag
          v-for="item of showList[1]"
          class="m-y-4px cursor-pointer"
          :key="item.key"
          closable
          :title="getInfo(item)"
          @click="editItem(item)"
          @close="removeItem(item)"
        >
          <div class="w-90px truncate">{{ getInfo(item) }}</div>
        </ElTag>
      </template>
    </ElPopover>
  </div>
</template>
