<!-- 面积折线图 -->
<script setup lang="ts">
import Echarts from '../index.vue'
import { computed } from 'vue'
import type { DoughnutProps } from './index.ts'
import type { EChartsOption } from 'echarts'

const props = defineProps<DoughnutProps>()
const option = computed<EChartsOption>(() => {
  return {
    title: {
      text: props.title
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '10%',
      left: 'center'
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['50%', '55%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: props.data
      }
    ]
  }
})
</script>

<template>
  <Echarts :option="option" :loading="props.loading" />
</template>

<style scoped lang="less"></style>
