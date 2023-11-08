<script setup lang="ts">
import type { StackedAreaTotalProps } from '@/components/echarts/line'
import { StackedAreaTotal } from '@/components/echarts/line'
import { reactive } from 'vue'
import { ElCard } from 'element-plus'

const randomData = (): number[] => {
  const arr = new Array(5).fill(0)
  return arr.map(() => 1000 + parseInt((1000 * Math.random()).toFixed(1)))
}

const stackedAreaProps = reactive<StackedAreaTotalProps>({
  loading: true,
  data: [
    { name: '收入1', data: randomData() },
    { name: '收入2', data: randomData() },
    { name: '收入3', data: randomData() },
    { name: '收入4', data: randomData() },
    { name: '收入5', data: randomData() }
  ],
  title: '收入统计',
  timeLine: ['10-30', '10-29', '10-28', '10-27', '10-26']
})

setTimeout(() => {
  stackedAreaProps.loading = false
}, 1000)
</script>

<template>
  <ElCard>
    <div class="h-290px">
      <StackedAreaTotal v-bind="stackedAreaProps" />
    </div>
  </ElCard>
</template>
