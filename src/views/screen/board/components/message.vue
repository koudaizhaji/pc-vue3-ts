<script setup lang="ts">
import { ElCard } from 'element-plus'
// import PublicTable, {
//   type PublicTableProps
// } from '@/components/public/public-table/index.ts'

// const publicTableProps: PublicTableProps = {
const publicTableProps = {
  hiddenPagination: true,
  hiddenHeader: true,
  data: [
    { title: '面包房-氛围灯损坏' },
    { title: '奶茶店-制冷器异常，无法出冰' },
    { title: '翘脚牛肉店-灶台火力不足' },
    { title: '奶茶店-排气管未作清洁' },
    { title: '面包房-芒果还未送达' },
    { title: '翘脚牛肉店-粗面未能送达' },
    { title: '奶茶店-wifi还有3天过期，请续费' },
    { title: '面包房-wifi还有3天过期，请续费' },
    { title: '翘脚牛肉店-wifi还有3天过期，请续费' }
  ],
  columns: [{ prop: 'title', label: '消息' }]
}
</script>

<template>
  <ElCard>
    <template v-slot:header><div class="h-20px line-height-20px">消息</div></template>
    <div class="h-234px">
      <PublicTable v-bind="publicTableProps" />
    </div>
  </ElCard>
</template>
