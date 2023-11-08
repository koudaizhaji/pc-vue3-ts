import type { PublicTableColumnProps } from '@/components/public-components/public-table/index'
import type { PublicSearchProps } from '@/components/public-components/public-search/index'
import { ElTag } from 'element-plus'
import { h } from 'vue'

export const columns: PublicTableColumnProps[] = [
  {
    prop: 'name',
    label: '菜单名称',
    width: 120
  },
  {
    prop: 'url',
    label: '菜单地址'
  },
  {
    prop: 'status',
    label: '菜单状态',
    width: 100,
    customer: (text: boolean) => {
      return h(
        ElTag,
        {
          type: text ? 'success' : 'info'
        },
        {
          default: () => (text ? '启用' : '禁用')
        }
      )
    }
  }
]

export const tableData = [
  {
    name: '资源管理',
    url: '/main/resource',
    status: true
  },
  {
    name: '分销中心',
    url: '/main/distribute',
    status: true
  },
  {
    name: '公众号平台',
    url: '/main/weixin',
    status: true
  },
  {
    name: '业务管理',
    url: '/main/business',
    status: true
  },
  {
    name: '平台操作',
    url: '/main/system',
    status: true
  },
  {
    name: '首页',
    url: '/main/analysis',
    status: true
  },
  {
    name: '大数据分析',
    url: '/main/analysis/dashboard',
    status: false
  },
  {
    name: '核心技术',
    url: '/main/analysis/overview',
    status: true
  },
  {
    name: '权限角色',
    url: '/main/system/role',
    status: true
  },
  {
    name: '分组管理',
    url: '/main/system/group',
    status: true
  },
  {
    name: '人员管理',
    url: '/main/system/user',
    status: true
  },
  {
    name: '菜单管理',
    url: '/main/system/menu',
    status: true
  },
  {
    name: '查询菜单',
    url: 'no-url',
    status: false
  },
  {
    name: '编辑菜单',
    url: 'no-url',
    status: true
  },
  {
    name: '删除菜单',
    url: 'no-url',
    status: true
  },
  {
    name: '添加菜单',
    url: 'no-url',
    status: true
  },
  {
    name: '查询分组',
    url: 'no-url',
    status: true
  },
  {
    name: '修改分组',
    url: 'no-url',
    status: true
  },
  {
    name: '删除分组',
    url: 'no-url',
    status: true
  },
  {
    name: '添加分组',
    url: 'no-url',
    status: true
  },
  {
    name: '查询管理',
    url: 'no-url',
    status: true
  },
  {
    name: '修改管理',
    url: 'no-url',
    status: true
  },
  {
    name: '删除管理',
    url: 'no-url',
    status: true
  },
  {
    name: '添加管理',
    url: 'no-url',
    status: true
  },
  {
    name: '查询角色',
    url: 'no-url',
    status: true
  },
  {
    name: '修改角色',
    url: 'no-url',
    status: true
  },
  {
    name: '删除角色',
    url: 'no-url',
    status: true
  },
  {
    name: '添加角色',
    url: 'no-url',
    status: true
  },
  {
    name: '公众号菜单',
    url: '/main/product/menus',
    status: true
  },
  {
    name: '公众号粉丝',
    url: '/main/product/wxh5fans',
    status: true
  }
]

export const searchConfig: PublicSearchProps = {
  config: [
    { type: 'input', key: 'name', label: '菜单名称' },
    { type: 'input', key: 'aaa', label: 'aaa' },
    { type: 'input', key: 'bbb', label: 'bbb' },
    {
      type: 'selectOne',
      key: 'status',
      label: '菜单状态',
      options: [
        { value: '', label: '全部' },
        { value: true, label: '启用' },
        {
          value: false,
          label: '禁用1111111111111111111111111111111111111111111111111111111111111111111111111'
        }
      ]
    },
    {
      type: 'selectMore',
      key: 'status',
      label: '菜单状态',
      options: [
        { value: '', label: '全部' },
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        {
          value: '1111111111111111111111111111111111111111111111111111111111111111111111111',
          label: '1111111111111111111111111111111111111111111111111111111111111111111111111'
        }
      ]
    },
    {
      type: 'input',
      key: 'fff',
      label:
        '名称很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长'
    }
  ]
}

export default {
  columns,
  tableData,
  searchConfig
}
