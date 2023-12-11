/*
 * @Author: 李立
 * @Date: 2023-12-04 17:15:00
 * @LastEditors: 李立
 * @LastEditTime: 2023-12-04 17:39:30
 * @FilePath: \apiObjectc:\Users\Farben\Desktop\initobj\project\pc-vue3-ts\src\views\base\system\users\config\search.config.ts
 * @Description:
 * 相关开发文件头自动添加：联系微信huaiplayboy
 */
/** @description: 用户管理-搜索配置
 * 所有的配置，都在一个文件当中，以后使用表单时就可以通过各种配置文件来直接完成项目
 */

import type { LILIFormConfig } from '@/global/types/pageSearch.type'

const searchConfig: LILIFormConfig = {
  pageName: 'users',
  labelWidth: '120px',
  itemStyle: 'padding: 10px 40px',
  // colLayout: { span: 8 },
  // 下列数据要保持跟接口一致
  formItems: [
    {
      prop: 'id',
      type: 'input',
      label: 'id',
      rules: [],
      placeholder: '请输入id',
      initialValue: '' // 默认值，初始化的值
    },
    {
      prop: 'username',
      type: 'input',
      label: '用户名',
      rules: [],
      placeholder: '请输入用户名'
    },
    {
      prop: 'phone',
      type: 'input',
      label: '手机号',
      rules: [],
      placeholder: '请输入绑定的手机号'
    },

    {
      prop: 'status',
      type: 'select',
      label: '用户状态',
      placeholder: '请选择状态',
      options: [
        {
          value: 1,
          label: '已启用'
        },
        {
          value: 2,
          label: '已禁用'
        }
      ]
    },
    {
      prop: 'createdAt',
      type: 'date-picker',
      label: '创建时间',
      // placeholder: "请选择创建时间"
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}

export default searchConfig
