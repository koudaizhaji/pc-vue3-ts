<script setup lang="ts">
import { ElCard, ElTag, type TagProps } from 'element-plus'
import PublicTable, { type PublicTableProps } from '@/components/public-components/public-table'
import { h, type VNode } from 'vue'

const publicTableProps: PublicTableProps = {
  hiddenPagination: false,
  data: [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
      tag: 1
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
      tag: 2
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
      tag: 3
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
      tag: 3
    }
  ],
  columns: [
    { prop: 'date', label: '日期', width: 180 },
    { prop: 'name', label: '姓名', width: 180 },
    { prop: 'address', label: '地址' },
    {
      prop: 'tag',
      label: '优先级',
      width: 70,
      customer: (text) => {
        const getTag = (type: TagProps['type'], text: string): VNode =>
          h(
            ElTag,
            {
              effect: 'light',
              type: type
            },
            text
          )
        switch (text) {
          case 1:
            return getTag('danger', '高')
          case 2:
            return getTag('warning', '中')
          case 3:
          default:
            return getTag('', '低')
        }
      }
    }
  ]
}
</script>

<template>
  <ElCard>
    <template v-slot:header><div class="h-20px line-height-20px">待完成事项</div></template>
    <div class="h-234px">
      <PublicTable v-bind="publicTableProps" />
    </div>
  </ElCard>
</template>
