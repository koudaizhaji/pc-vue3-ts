<template>
  <div class="pie-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import BaseEchart from './base-echart.vue'

import type { EChartsOption } from 'echarts'
import type { IPieEchartData } from '../types'

const props = defineProps<{
  pieData: IPieEchartData[]
}>()

const options = computed<EChartsOption>(() => {
  return {
    // 手指放上去的时候显示的文本
    tooltip: {
      trigger: 'item'
    },
    // 图例:
    legend: {
      orient: 'horizontal',
      left: 'left'
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '50%',
        bottom: '-10%',
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>

<style scoped></style>
