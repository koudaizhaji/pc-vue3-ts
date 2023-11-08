<script setup lang="ts">
import PublicSearch from '@/components/public-components/public-search/index'
import PublicTable from '@/components/public-components/public-table/index'
import { ElButton } from 'element-plus'
import { columns, tableData, searchConfig } from './hooks'

const submit = (searchForm: Record<string, any>) => {
  console.log(searchForm)
}
</script>

<template>
  <div class="menu h-full flex flex-col flex-justify-left">
    <PublicSearch v-bind="searchConfig" @submit="submit" @reset="submit">
      <ElButton>创建</ElButton>
      <ElButton>编辑</ElButton>
      <ElButton>删除</ElButton>
    </PublicSearch>
    <div class="m-t-8px h-full overflow-auto">
      <PublicTable :columns="columns" :data="tableData" :total="tableData.length" />
    </div>
  </div>
</template>
