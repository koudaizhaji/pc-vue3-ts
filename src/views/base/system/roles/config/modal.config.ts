import type { PageModalConfigType } from '@/global/types/pageModal.type'

const modalConfig: PageModalConfigType = {
  title: '新增角色',
  editTitle: '编辑角色',
  pageName: 'roles',
  formItems: [
    {
      prop: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色名'
    },
    {
      prop: 'intro',
      type: 'input',
      label: '角色说明',
      placeholder: '请简述角色介绍'
    },

    {
      prop: 'status',
      type: 'select',
      label: '角色状态',
      placeholder: '请选择角色状态',
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
    },
    {
      // 不写field,这一条则自定义不提交了
      type: 'custom',
      slotName: 'allmenus'
    }
  ]
}

export default modalConfig
