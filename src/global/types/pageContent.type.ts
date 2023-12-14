/*
 * @Author: 李立
 * @Date: 2023-12-02 22:27:50
 * @LastEditors: 李立
 * @LastEditTime: 2023-12-04 15:31:17
 * @FilePath: \apiObjectc:\Users\Farben\Desktop\initobj\project\pc-vue3-ts\src\global\types\pageContent.type.ts
 * @Description:
 * 相关开发文件头自动添加：联系微信huaiplayboy
 */
// 前两个是element-plus组件库table的el-table-column属性，都可以在这里配置
// random是随机属性
type tableType = 'selection' | 'index' | 'random' | 'timer' | 'handler' | 'custom'

interface tablePropList {
  type?: tableType
  label?: string
  width?: number | string
  minWidth?: number | string
  prop?: string
  fixed?: 'left' | 'right'
  slotName?: string
  filters?: Array<{
    text: string
    value: string | number
  }>
}

interface tableChildrenProps {
  rowKey: string
  treeProps?: {
    children?: string
  }
}

export interface pageContentTable {
  pageName: string
  header: {
    title: string
    btnTitle: string
  }
  propsList: tablePropList[]
  // propList: Array<{
  //   type: tableType
  //   width?: number | string
  //   label: string
  //   prop?: string
  //   slotName?: string
  //   fixed?: "left" | "right"
  // }>
  // 是否展开菜单
  childrenProps?: tableChildrenProps
  // 是否显示分页
  showFooter?: boolean
}
