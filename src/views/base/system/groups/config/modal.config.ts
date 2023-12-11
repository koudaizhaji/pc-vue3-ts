import type { PageModalConfigType } from '@/global/types/pageModal.type'

const modalConfig: PageModalConfigType = {
  title: '添加分组',
  // newtitle: "添加分组",
  editTitle: '修改分组',
  pageName: 'groups',
  formItems: [
    {
      prop: 'name',
      type: 'input',
      label: '分组名称',
      placeholder: '请输入分组名称'
    },
    {
      prop: 'intro',
      type: 'input',
      label: '分组描述',
      placeholder: '请对分组进行描述'
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
