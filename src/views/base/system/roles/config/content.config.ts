import type { pageContentTable } from '@/global/types/pageContent.type'

const contentConfig: pageContentTable = {
  pageName: 'roles',
  header: {
    title: '角色列表',
    btnTitle: '新建角色'
  },
  propsList: [
    {
      type: 'selection',
      width: 60,
      label: '选择'
    },
    {
      type: 'index',
      label: '序号',
      width: 60
    },
    {
      type: 'random',
      prop: 'name',
      label: '角色名称',
      width: '180'
    },
    { type: 'random', prop: 'intro', label: '权限介绍', width: '180' },

    {
      type: 'timer',
      prop: 'createdAt',
      label: '创建时间',
      width: '180',
      slotName: 'createdAt'
    },
    {
      type: 'handler',
      label: '操作',
      width: '180',
      slotName: 'handler',
      fixed: 'right'
    }
  ]
}

export default contentConfig
