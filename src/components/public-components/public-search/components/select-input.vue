<script setup lang="ts">
import { ElInput } from 'element-plus'
import type { PublicSearchItemProps } from '../index'
import { handleKeyDown, handleKeyDownEsc, handleKeyDownEnter } from '../hooks'
import { ref } from 'vue'

const props = defineProps<{
  currentItem: PublicSearchItemProps
}>()
const emits = defineEmits<{
  (e: 'submit', value: PublicSearchItemProps['value']): void
  (e: 'cancel'): void
}>()

const inputValue = ref<string>(props.currentItem.value)
const keydown = (e) => {
  if (inputValue.value.length === 0) handleKeyDown(e, () => emits('cancel'))
  handleKeyDownEsc(e, () => emits('cancel'))
  handleKeyDownEnter(e, () => emits('submit', inputValue))
}
</script>

<template>
  <ElInput
    clearable
    size="default"
    :placeholder="`请输入${props.currentItem.label}`"
    v-model="inputValue"
    @keydown="keydown"
  ></ElInput>
</template>
