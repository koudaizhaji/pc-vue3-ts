import type { PageModalConfigType } from '@/global/types/pageModal.type'

const modalConfig: PageModalConfigType = {
  title: '新增用户',
  // newtitle: "新增用户",
  editTitle: '编辑用户',
  pageName: 'users',
  formItems: [
    {
      prop: 'username',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      prop: 'password',
      type: 'input',
      label: '密码',
      placeholder: '请输入设置的密码',
      isHidden: false
    },
    {
      prop: 'group_id',
      type: 'select',
      label: '所属组',
      placeholder: '请选择所属组',
      options: []
    },
    {
      prop: 'role_id',
      type: 'select',
      label: '角色',
      placeholder: '请选择角色',
      options: []
    },
    {
      prop: 'remark',
      type: 'input',
      label: '备注'
    },
    {
      prop: 'status',
      type: 'select',
      label: '状态',
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
