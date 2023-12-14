import type { pageContentTable } from '@/global/types/pageContent.type'

const contentConfig: pageContentTable = {
  pageName: 'menus',
  header: {
    title: '系统菜单配置',
    btnTitle: '添加菜单'
  },
  // isDisabled: false,
  propsList: [
    {
      prop: 'title',
      label: '菜单名称',
      minWidth: '150',
      fixed: 'left'
    },
    {
      prop: 'id',
      label: '菜单编号',
      minWidth: 80
    },
    { prop: 'type', label: '级别', minWidth: '60' },
    {
      prop: 'url',
      label: '菜单url',
      minWidth: '180',
      filters: [
        { text: '/base', value: '/base' },
        { text: '/weixin', value: '/weixin' }
      ]
    },
    {
      prop: 'icon',
      label: '菜单icon',
      minWidth: '160'
    },
    {
      prop: 'sort',
      label: '排序',
      minWidth: '60'
    },
    {
      type: 'custom',
      prop: 'status',
      label: '菜单状态',
      minWidth: '80',
      slotName: 'status'
      // 封装有问题不生效
      // filters: [
      //   { text: '启用', value: '1' },
      //   { text: '禁用', value: '0' }
      // ]
    },
    {
      prop: 'permission',
      label: '权限'
    },
    {
      type: 'timer',
      prop: 'createdAt',
      label: '创建时间',
      slotName: 'createdAt',
      minWidth: '180'
    },
    {
      type: 'timer',
      prop: 'updateAt',
      label: '更新时间',
      slotName: 'updateAt',
      minWidth: '180'
    },
    {
      type: 'handler',
      label: '操作',
      width: '150',
      slotName: 'handler',
      fixed: 'right'
    }
  ],

  // 是否展开菜单
  childrenProps: {
    rowKey: 'id',
    // 指定对应的子节点属性名
    treeProps: {
      children: 'children'
    }
  },
  // 是否显示分页
  showFooter: false
}

export default contentConfig
