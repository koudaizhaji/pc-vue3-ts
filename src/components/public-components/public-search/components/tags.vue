<script setup lang="ts">
import { ElTag } from 'element-plus'
import type { PublicSearchItemProps } from '../index'

const props = defineProps<{
  setList: PublicSearchItemProps[]
}>()
</script>

<template>
  <div class="flex justify-left" style="grid-column: span 1">
    <ElTag
      v-for="item of props.setList"
      :key="item.key"
      closable
      size="large"
      :title="item.label + '：' + item.value"
    >
      <div class="w-82px truncate">{{ item.label }}：{{ item.value }}</div>
    </ElTag>
  </div>
</template>
