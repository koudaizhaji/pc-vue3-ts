<script setup lang="ts">
import { ElCard, ElTag, type TagProps } from 'element-plus'
import PublicTable, {
  type PublicTableProps,
  type PublicPaginationProps
} from '@/components/public/public-table/index'
import { h, type VNode } from 'vue'

const publicTableProps: PublicTableProps = {
  hiddenPagination: false,
  data: [
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
      tag: 3
    },
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
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
      tag: 3
    },
    {
      date: '2016-04-30',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
      tag: 2
    },
    {
      date: '2016-04-29',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
      tag: 2
    },
    {
      date: '2016-04-28',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
      tag: 1
    },
    {
      date: '2016-04-27',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
      tag: 2
    },
    {
      date: '2016-04-26',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
      tag: 1
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
              props: {
                effect: 'light',
                type: type
              }
            },
            { default: () => text }
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
  ],
  currentPage: 1,
  pageSize: 5,
  total: 9,
  size: 'small'
}
const changePublicTableProps = (pagination: PublicPaginationProps) => {
  publicTableProps.currentPage = pagination.currentPage
  publicTableProps.pageSize = pagination.pageSize
}
</script>

<template>
  <ElCard>
    <template v-slot:header><div class="h-20px line-height-20px">待完成事项</div></template>
    <div class="h-234px">
      <PublicTable v-bind="publicTableProps" @change="changePublicTableProps" />
    </div>
  </ElCard>
</template>
