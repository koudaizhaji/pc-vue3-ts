<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ElTable, ElTableColumn, ElPagination } from 'element-plus'
import type { PublicTableProps } from './index.ts'

const props = defineProps<PublicTableProps>()
const maxHeight = ref<number>(0)
const publicSearch = ref<HTMLDivElement>()
onMounted(() => {
  maxHeight.value = publicSearch.value?.offsetHeight as number
})
console.log(props.columns[3]?.customer(3))
</script>

<template>
  <div ref="publicSearch" class="h-full">
    <el-table
      v-if="maxHeight > 0"
      :maxHeight="props.hiddenPagination ? maxHeight : maxHeight - 30"
      :data="props.data"
      stripe
      size="small"
    >
      <el-table-column
        v-for="(item, index) of props.columns"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
      >
        <template v-if="item.customer">
          <component :is="item.customer(props.data[index][item.prop], props.data[index], index)" />
        </template>
        <template v-else>
          {{ props.data[index][item.prop] }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
