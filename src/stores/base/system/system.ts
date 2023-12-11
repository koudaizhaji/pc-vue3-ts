import {
  deletePageData,
  deleteUserData,
  editPageData,
  editUserData,
  getPageListData,
  getUserListData,
  newPageData,
  newUserData
} from '@/services/main/system/system'
import { defineStore } from 'pinia'
import type { ISystemState } from './type'

const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    usersTotalCount: 0,
    usersList: [],
    pageList: [],
    pageTotalCount: 0
  }),
  actions: {
    // 页面的网络请求
    async getPageListDataAction(pageName: string, queryInfo: any) {
      console.log('发起请求的参数', pageName, queryInfo)
      // 1.请求用户列表数据
      const pageListResult = await getPageListData(pageName, queryInfo)
      const { list, total } = pageListResult.data
      this.pageList = list
      this.pageTotalCount = total
      console.log('请求的列表数据', this.pageList, this.pageTotalCount)
    },
    // 删除页面数据的请求
    async deletePageDataAction(pageName: string, id: number) {
      const res = await deletePageData(pageName, id)
      console.log(res)
      this.getPageListDataAction(pageName, { offset: 1, size: 10 })
    },
    async newPageDataAction(pageName: string, pageData: any) {
      const res = await newPageData(pageName, pageData)
      console.log(pageData)
      console.log(res)
      this.getPageListDataAction(pageName, { offset: 1, size: 10 })
    },
    async editPageDataAction(pageName: string, id: number, pageData: any) {
      const res = await editPageData(pageName, id, pageData)
      console.log(res)
      this.getPageListDataAction(pageName, { offset: 1, size: 10 })
    }
  }
})

export default useSystemStore
