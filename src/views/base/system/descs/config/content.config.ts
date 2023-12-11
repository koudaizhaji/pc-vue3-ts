/** @description: 用户管理-表格配置
 * 一个配置文件，控制整个表格的相对固定的信息
 */

import type { pageContentTable } from '@/global/types/pageContent.type'

const contentConfig: pageContentTable = {
  pageName: 'groups',
  header: {
    title: '分组列表',
    btnTitle: '新建分组'
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
      label: '分组名称',
      minWidth: '180'
    },
    { type: 'random', prop: 'intro', label: '分组描述', minWidth: '260' },

    {
      type: 'timer',
      prop: 'createdAt',
      label: '创建时间',
      width: '180',
      slotName: 'createdAt'
    },
    {
      type: 'timer',
      prop: 'updatedAt',
      label: '更新时间',
      width: '180',
      slotName: 'updatedAt'
    },
    {
      type: 'handler',
      label: '操作',
      width: '150',
      slotName: 'handler',
      fixed: 'right'
    }
    // {
    //   type: "custom",
    //   slotName: "menulist"
    // }
  ]
}

export default contentConfig
