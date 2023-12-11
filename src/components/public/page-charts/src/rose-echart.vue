<template>
  <div class="rose-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import BaseEchart from '@/components/echarts/index.vue'
import type { EChartsOption } from 'echarts'
import type { IPieEchartData } from '../types'

const props = defineProps<{
  roseData: IPieEchartData[]
}>()

const options = computed<EChartsOption>(() => {
  return {
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        // 内半径/外半径的大小
        radius: [10, 160],
        // 设置区域的位置
        center: ['50%', '50%'],
        roseType: 'area', // 圆心角一样, 通过半径的不同表示大小
        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData,
        label: {
          show: false
        }
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
