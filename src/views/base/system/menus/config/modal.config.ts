/*
 * @Author: 李立
 * @Date: 2023-12-09 12:16:04
 * @LastEditors: 李立
 * @LastEditTime: 2023-12-09 14:08:21
 * @FilePath: \apiObjectc:\Users\Farben\Desktop\initobj\project\pc-vue3-ts\src\views\base\system\menus\config\modal.config.ts
 * @Description:
 * 相关开发文件头自动添加：联系微信huaiplayboy
 */
import type { PageModalConfigType } from '@/global/types/pageModal.type'

const modalConfig: PageModalConfigType = {
  title: '菜单管理',
  // newtitle: "添加菜单",
  editTitle: '编辑菜单',
  pageName: 'menus',
  formItems: [
    {
      prop: 'sort',
      type: 'input',
      label: '菜单排序',
      placeholder: '默认1'
    },
    {
      prop: 'title',
      type: 'input',
      label: '菜单名',
      placeholder: '请输入菜单名称'
    },
    {
      prop: 'type',
      type: 'select',
      label: '菜单类型',
      placeholder: '请选择菜单级别',
      options: [
        {
          id: 1,
          name: '一级菜单',
          value: 1
        },
        {
          id: 2,
          name: '二级菜单',
          value: 2
        },
        {
          id: 3,
          name: '三级页面',
          value: 3
        },
        {
          id: 4,
          name: '四级权限',
          value: 4
        }
      ]
    },
    {
      prop: 'url',
      type: 'input',
      label: '跳转路径',
      placeholder: '一级路径/main/analysis'
    },
    {
      prop: 'parent_id',
      type: 'input',
      label: '父菜单id',
      placeholder: '属于已有菜单的数字,一级为0'
    },
    {
      prop: 'permission',
      type: 'input',
      label: '权限菜单',
      placeholder: '例:system:user:delete'
    },
    {
      prop: 'icon',
      type: 'input',
      label: '图标名称',
      placeholder: '请在element-plus选择'
    },
    {
      prop: 'status',
      type: 'select',
      label: '菜单状态',
      placeholder: '请选择状态',
      options: [
        {
          id: 1,
          name: '启用',
          value: 1
        },
        {
          id: 0,
          name: '禁用',
          value: 0
        }
      ]
    }
  ]
}

export default modalConfig
