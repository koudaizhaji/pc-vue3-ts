import PublicTable from './index.vue'
import type { VNode } from 'vue'

export interface PublicTableColumnProps {
  // 关联字段，标识唯一！
  prop: string
  // 表头名称
  label: string
  // 表列宽度
  width?: number | string
  // 列dom
  customer?: (text: string | number, item?: object, index?: number) => string | VNode
}

export interface PublicPaginationProps {
  currentPage: number
  pageSize: number
}

export interface PublicTableProps {
  hiddenPagination?: boolean
  data: object[]
  columns: PublicTableColumnProps[]
  // 加载
  loading?: boolean
  // 当前页码
  currentPage: number
  // 每页数据量
  pageSize: number
  // 总数
  total: number
}

export default PublicTable
