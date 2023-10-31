<script setup lang="ts">
import type { EChartsOption, EChartsType } from 'echarts'
import { init } from 'echarts'
import { onMounted, onUnmounted, ref, watch } from 'vue'

const props = defineProps<{
  loading?: boolean
  option: EChartsOption
}>()

const echart = ref<HTMLDivElement>()
let echartDom: EChartsType

const initialEchart = () => {
  echartDom = init(echart.value)
  // 设置echart配置
  updateEchart()
  // 监听外部是否更新option
  watch(
    () => props.option,
    (value: EChartsOption) => {
      echartDom.setOption(value)
    },
    {
      deep: true
    }
  )
  // 浏览器尺寸变化自动更新
  window.addEventListener('resize', updateEchart)
}
const updateEchart = () => {
  echartDom.setOption(props.option)
  echartDom.resize()
}

onMounted(() => {
  if (props.loading) {
    watch(
      () => props.loading,
      (value: boolean) => {
        if (!value) initialEchart()
      }
    )
  } else {
    initialEchart()
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', updateEchart)
})
</script>

<template>
  <div class="h-full w-full" ref="echart" v-loading="props.loading || false" />
</template>

<style scoped lang="less"></style>
