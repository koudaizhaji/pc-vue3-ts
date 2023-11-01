import PublicTable from './index.vue'
import type { TableProps } from 'element-plus'
import type { VNode } from 'vue'

export interface PublicTableColumnProps {
  // 关联字段，标识唯一！
  prop: string
  // 表头名称
  label: string
  // 表列宽度
  width?: number | string
  // 列dom
  customer?: (text: any, item?: object, index?: number) => string | VNode
}

export interface PublicPaginationProps {
  currentPage: number
  pageSize: number
}

export interface PublicTableProps {
  // 隐藏分页器
  hiddenPagination?: boolean
  // 隐藏表头
  hiddenHeader?: boolean
  // 列表数据
  data: object[]
  // 列表列配置项
  columns: PublicTableColumnProps[]
  // 列表尺寸
  size?: TableProps<any>['size']
  // 加载
  loading?: boolean
  // 当前页码
  currentPage?: number
  // 每页数据量
  pageSize?: number
  // 总数
  total?: number
}

export default PublicTable
