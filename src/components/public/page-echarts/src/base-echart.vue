<!--
 * @Author: 李立
 * @Date: 2023-12-09 12:16:04
 * @LastEditors: 李立
 * @LastEditTime: 2023-12-10 15:37:40
 * @FilePath: \apiObjectc:\Users\Farben\Desktop\initobj\project\pc-vue3-ts\src\components\public\page-echarts\src\base-echart.vue
 * @Description: 只是对echars做了最基本的封装,具体的图表封装看其他文件
 * 相关开发文件头自动添加：联系微信huaiplayboy
-->

<template>
  <div class="base-echart">
    <div ref="echartRef" class="echart" style="width: 100%; height: 350px;"></div>
  </div>
</template>

<script setup lang="ts" name="base-echart">
import * as echarts from 'echarts'
import { onMounted, ref, watchEffect } from 'vue'
import type { EChartsOption } from 'echarts'
import ChinaJSON from '../data/china.json'

// 注册地图
echarts.registerMap('china', ChinaJSON as any)

// 接收echarts的配置对象{title:{}.tooltip:{}...}
interface IProps {
  options: EChartsOption
}

const props = defineProps<IProps>()
// 拿到echarts
const echartRef = ref<HTMLDivElement>()
onMounted(() => {
  const echartInstance = echarts.init(echartRef.value!, 'light', { renderer: 'canvas' })
  watchEffect(() => {
    echartInstance.setOption(props.options)
  })

  // 监听window是否缩放,让echarts跟着放大缩小
  window.addEventListener('resize', () => {
    echartInstance.resize()
  })
})
</script>

<style scoped lang="less"></style>
