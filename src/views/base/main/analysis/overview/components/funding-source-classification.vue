<script setup lang="ts">
import { ElCard } from 'element-plus'
import { Doughnut } from '@/components/echarts/pie'
import type { DoughnutProps } from '@/components/echarts/pie'
import { reactive } from 'vue'

const doughnutProps = reactive<DoughnutProps>({
  title: '收入来源分类',
  loading: true,
  data: [
    { name: '面包房', value: 3440 },
    { name: '翘脚牛肉店', value: 4232 },
    { name: '奶茶店', value: 3542 }
  ]
})
setTimeout(() => {
  doughnutProps.loading = false
}, 1000)
</script>

<template>
  <ElCard>
    <div class="h-290px">
      <Doughnut v-bind="doughnutProps" />
    </div>
  </ElCard>
</template>
