/*
 * @Author: 李立
 * @Date: 2023-12-02 22:05:52
 * @LastEditors: 李立
 * @LastEditTime: 2023-12-04 17:25:20
 * @FilePath: \apiObjectc:\Users\Farben\Desktop\initobj\project\pc-vue3-ts\src\views\base\system\groups\config\search.config.ts
 * @Description:
 * 相关开发文件头自动添加：联系微信huaiplayboy
 */

/** @description: 用户管理-搜索配置
 * 所有的配置，都在一个文件当中，以后使用表单时就可以通过各种配置文件来直接完成项目
 */
import type { LILIFormConfig } from '@/global/types/pageSearch.type'

const searchConfig: LILIFormConfig = {
  pageName: 'groups',
  labelWidth: '120px',
  // itemStyle: { padding: "10px 40px" },
  // colLayout: { span: 8 },
  formItems: [
    {
      prop: 'id',
      type: 'input',
      label: 'id',
      rules: [],
      placeholder: '请输入id'
    },
    {
      prop: 'name',
      type: 'input',
      label: '分组名称',
      rules: [],
      placeholder: '请输入权限名'
    },
    {
      prop: 'intro',
      type: 'input',
      label: '分组介绍',
      rules: [],
      placeholder: '请输入权限介绍'
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
