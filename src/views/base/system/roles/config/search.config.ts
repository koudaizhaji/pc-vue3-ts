/*
 * @Author: 李立
 * @Date: 2023-12-02 23:05:17
 * @LastEditors: 李立
 * @LastEditTime: 2023-12-04 17:24:03
 * @FilePath: \apiObjectc:\Users\Farben\Desktop\initobj\project\pc-vue3-ts\src\views\base\system\roles\config\search.config.ts
 * @Description:
 * 相关开发文件头自动添加：联系微信huaiplayboy
 */
import type { LILIFormConfig } from '@/base-ui/form'

const searchConfig: LILIFormConfig = {
  pageName: 'roles',
  labelWidth: '120px',
  // itemStyle: { padding: "10px 40px" },
  // colLayout: { span: 8 },
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: 'id',
      rules: [],
      placeholder: '请输入id'
    },
    {
      field: 'name',
      type: 'input',
      label: '权限名',
      rules: [],
      placeholder: '请输入权限名'
    },
    {
      field: 'intro',
      type: 'input',
      label: '权限介绍',
      rules: [],
      placeholder: '请输入权限介绍'
    },
    {
      field: 'createdAt',
      type: 'date-picker',
      label: '创建时间',
      // placeholder: "请选择创建时间"
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterang'
      }
    }
  ]
}

export default searchConfig
