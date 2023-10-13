/*
 * @Author: 李立
 * @Date: 2023-09-30 23:23:29
 * @LastEditors: 李立
 * @LastEditTime: 2023-10-13 09:23:11
 * @FilePath: \apiObjectf:\pcadmin\src\stores\index.ts
 * @Description: 数据共享的pinia入口
 * 相关开发文件头自动添加：联系微信huaiplayboy
 */
import { defineStore, createPinia } from 'pinia'
// 引入持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export const Store = defineStore({
  // id: 必须的，在所有 Store 中唯一
  id: 'globalState',
  // state: 返回对象的函数
  state: () => ({}),
  getters: {},
  actions: {},
  persist: {
    // 本地存储的名称
    key: 'globalState',
    //保存的位置
    storage: window.sessionStorage //localstorage
  }
})

const pinia = createPinia()
//pinia使用
pinia.use(piniaPluginPersistedstate)
export default pinia
