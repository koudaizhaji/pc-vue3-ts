<!-- 面积折线图 -->
<script setup lang="ts">
import Echarts from '../index.vue'
import { computed } from 'vue'
import type { StackedAreaProps } from './index.ts'
import type { EChartsOption } from 'echarts'

const props = defineProps<StackedAreaProps>()
const option = computed<EChartsOption>(() => {
  return {
    title: {
      text: props.title
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: props.data.map((item) => item.name)
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: props.timeLine
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: props.data.map((item) => ({
      name: item.name,
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: item.data
    }))
  }
})
</script>

<template>
  <Echarts :option="option" :loading="props.loading" />
</template>

<style scoped lang="less"></style>
