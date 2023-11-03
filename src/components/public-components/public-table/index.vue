<!-- todolist
   列表还缺少以下功能，待完善
   selection 多选
   Radio 单选
   sort 排序
 -->

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { ElTable, ElTableColumn, ElPagination } from 'element-plus'
import type { PublicPaginationProps, PublicTableProps } from './index.ts'

const props = defineProps<PublicTableProps>()
const emits = defineEmits<{
  (e: 'change', pagination: PublicPaginationProps): void
}>()

// table
const publicSearch = ref<HTMLDivElement>()
const tableData = computed(() => {
  return props.data.slice(
    (pagination.currentPage - 1) * pagination.pageSize,
    pagination.currentPage * pagination.pageSize
  )
})

// pagination
const pagination = reactive<PublicPaginationProps>({
  currentPage: props.currentPage || 1,
  pageSize: props.pageSize || 10
})
const handleSizeChange = (val: number) => {
  pagination.pageSize = val
  pagination.currentPage = 1
  change()
}
const handleCurrentChange = (val: number) => {
  pagination.currentPage = val
  change()
}

// emits
const change = () => {
  emits('change', pagination)
}
</script>

<template>
  <div
    ref="publicSearch"
    class="h-full flex flex-justify-between flex-col"
    v-loading="props.loading"
  >
    <ElTable :data="tableData" :showHeader="!props.hiddenHeader" stripe :size="props.size">
      <ElTableColumn
        v-for="item of props.columns"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
      >
        <template v-if="item.customer" v-slot:default="scope">
          <component :is="item.customer(scope.row[item.prop], scope.row, scope.$index)" />
        </template>
        <template v-else v-slot:default="scope">
          {{ scope.row[item.prop] }}
        </template>
      </ElTableColumn>
    </ElTable>
    <ElPagination
      v-if="!props.hiddenPagination"
      class="flex-justify-right m-t-12px"
      :currentPage="pagination.currentPage"
      :page-size="pagination.pageSize"
      :page-sizes="[5, 10, 20, 50, 100]"
      :small="true"
      :background="false"
      layout="total, sizes, prev, pager, next, jumper"
      :total="props.total || 0"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
