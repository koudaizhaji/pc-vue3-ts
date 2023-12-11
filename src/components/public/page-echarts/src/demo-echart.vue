<template>
  <div class="demo-echart">
    <base-echart :options="options" />
  </div>
</template>

<script setup lang="ts" name="demo-echart">
import BaseEchart from './base-echart.vue'
import type { EChartsOption } from 'echarts'
import { computed } from 'vue'

interface IProps {
  pieData: any[]
}

const props = defineProps<IProps>()

const options = computed<EChartsOption>(() => {
  return {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
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

<style scoped lang="less">
.demo-echart {
}
</style>
