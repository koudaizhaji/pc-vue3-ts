/*
 * @Author: 李立
 * @Date: 2023-12-02 22:30:03
 * @LastEditors: 李立
 * @LastEditTime: 2023-12-08 16:59:36
 * @FilePath: \apiObjectc:\Users\Farben\Desktop\initobj\project\pc-vue3-ts\src\stores\base\main.ts
 * @Description:
 * 相关开发文件头自动添加：联系微信huaiplayboy
 */
import { getGroupData, getMenuData, getRoleData } from '@/services/main/system/system'
import { defineStore } from 'pinia'

interface IMainState {
  entireGroups: any[]
  entireRoles: any[]
  entireMenus: any[]
}

const useMainStore = defineStore('main', {
  state: (): IMainState => ({
    entireGroups: [],
    entireRoles: [],
    entireMenus: []
  }),
  actions: {
    async fetchEntireDataAction() {
      const groupResult = await getGroupData({ pageNum: 1, pageSize: 100 })
      const roleResult = await getRoleData({ pageNum: 1, pageSize: 100 })
      const menuResult = await getMenuData()

      this.entireGroups = groupResult.data.list
      this.entireRoles = roleResult.data.list
      this.entireMenus = menuResult.data.list
      // console.log('格式化后的列表', this.entireGroups, this.entireRoles, this.entireMenus)
    }
  }
})

export default useMainStore
