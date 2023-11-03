<script setup lang="ts">
import { ElInput } from 'element-plus'
import type { PublicSearchItemProps } from '../index'
import { handleKeyDown, handleKeyDownEsc, handleKeyDownEnter, type SearchItemEmits } from '../hooks'
import { ref } from 'vue'

const props = defineProps<{
  currentItem: PublicSearchItemProps
}>()
const emits = defineEmits<SearchItemEmits>()

const inputValue = ref<string>(props.currentItem.value as string)
const keydown = (e: KeyboardEvent | Event) => {
  if (inputValue.value?.length === 0) handleKeyDown(e, () => emits('cancel'))
  handleKeyDownEsc(e, () => emits('cancel'))
  handleKeyDownEnter(e, () => emits('submit', inputValue.value, inputValue.value))
}
</script>

<template>
  <div class="flex flex-justify-between">
    <div
      class="max-w-80px text-right truncate line-height-32px font-size-12px flex-basis-100px p-x-10px"
    >
      {{ props.currentItem.label }}
    </div>
    <ElInput
      autofocus
      class="flex-grow-1"
      clearable
      size="default"
      :placeholder="`请输入${props.currentItem.label}`"
      v-model="inputValue"
      @keydown="keydown"
    ></ElInput>
  </div>
</template>
