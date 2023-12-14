/** @description: 用户管理-表格配置
 * 一个配置文件，控制整个表格的相对固定的信息
 * type: 控制显示方式
 * timer: 时间格式化
 * handler: 操作列-编辑，删除
 * custom: 普通列，绑定也可直接slot插槽
 * 其他random：自定义列，直接v-bind="item"绑定,或不写type
 * el-table-column的属性，都可以在这里配置
 */

import type { pageContentTable } from '@/global/types/pageContent.type'

const contentTableConfig: pageContentTable = {
  pageName: 'users',
  header: {
    title: '用户列表',
    btnTitle: '新建用户'
  },
  propsList: [
    {
      type: 'selection',
      width: 60,
      label: '选择'
    },
    // {
    //   type: "index",
    //   label: "序号",
    //   width: 60
    // },
    {
      type: 'random',
      prop: 'username',
      label: '登录账号',
      width: '100',
      fixed: 'left'
    },
    {
      type: 'custom',
      prop: 'role_id',
      label: '所属角色',
      width: '120',
      slotName: 'role_id'
    },

    {
      type: 'random',
      prop: 'openid',
      label: 'openid'
    },
    {
      type: 'random',
      prop: 'nickname',
      label: '微信昵称',
      width: '120'
    },
    {
      type: 'custom',
      prop: 'user_pic',
      label: '微信头像',
      width: '120'
    },
    {
      type: 'custom',
      prop: 'status',
      label: '账号状态',
      width: '90',
      slotName: 'status'
    },
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
      slotName: 'handler'
    }
  ]
}

export default contentTableConfig
