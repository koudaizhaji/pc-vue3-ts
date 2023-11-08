/*
 * @Author: 李立
 * @Date: 2023-10-01 22:11:02
 * @LastEditors: 李立
 * @LastEditTime: 2023-10-13 09:23:50
 * @FilePath: \apiObjectf:\pcadmin\src\stores\login\login.ts
 * @Description: 参考代码，从登录到登录成功后的所作操作
 * 相关开发文件头自动添加：联系微信huaiplayboy
 */
// import router, { addRoutesWithMenu } from '@/routers'
import router from '@/routers'
import { getRoleMenus, getUserById } from '@/services/login/login'
import { localCache } from '@/utils/cache'
// import { mapMenuToPersssions } from '@/utils/map-menu'
import { defineStore } from 'pinia'
import { LOGIN_TOKEN, USER_INFO, USER_MENUS } from '@/config'
// import useMainStore from '../main/main'

interface ILoginState {
  token: string
  userInfo: any
  userMenus: any[]
  permissions: string[]
}

const useLoginStore = defineStore('login', {
  state: (): ILoginState => ({
    token: localCache.getCache(LOGIN_TOKEN) || '',
    userInfo: {},
    userMenus: [],
    permissions: []
  }),
  actions: {
    async setLoginInfo(data: any) {
      console.log(data)
      this.token = data.token
      console.log('拿到的信息', data, data.token, LOGIN_TOKEN)
      // 判断下如果信息不对，提示登录失败
      localCache.setCache(LOGIN_TOKEN, this.token)
      // 2.获取用户信息
      const userRes = await getUserById(data.id)
      this.userInfo = userRes.data
      console.log('拿到的用户信息', userRes)
      localCache.setCache(USER_INFO, this.userInfo)
      // // 判断下如果信息不对，提示登录失败
      // if (!userRes) {
      //   return
      // }
      // // 3.获取用户菜单
      const menusRes = await getRoleMenus()
      this.userMenus = menusRes.data
      console.log('拿到的用户菜单', this.userMenus)
      // // 判断下如果信息不对，提示登录失败
      // if (!menusRes) {
      //   return
      // }
      // // 4.保存到缓存中
      // localCache.set('token', token)
      // localCache.set('userInfo', userRes)
      localCache.setCache(USER_MENUS, this.userMenus)
      // // 5.保存到vuex中
      // // 2.保存在cache中
      // localCache.setCache('token', token)

      // // 3.获取用户信息
      // const userRes = await getUserById()
      // this.userInfo = userRes.data
      // localCache.setCache('useInfo', this.userInfo)

      // // 4.根据role的id获取菜单
      // const roleId = this.userInfo.role.id
      // const menuRes = await getRoleMenus(roleId)
      // this.userMenus = menuRes.data
      // localCache.setCache('userMenus', this.userMenus)

      // // 5.保存权限信息
      // const permissions = mapMenuToPersssions(this.userMenus)
      // this.permissions = permissions
      // localCache.setCache('permissions', this.permissions)

      // // 5.获取所有的数据
      // const mainStore = useMainStore()
      // mainStore.fetchEntireDataAction()

      // // 5.动态添加路由
      // addRoutesWithMenu(this.userMenus)

      // 跳转到首页
      router.push('/')
    },
    loadLocalDataAction() {
      this.token = localCache.getCache('token')
      this.userInfo = localCache.getCache('userInfo')
      this.userMenus = localCache.getCache('userMenus')
      this.permissions = localCache.getCache('permissions')

      // if (this.token && this.userMenus) {
      //   addRoutesWithMenu(this.userMenus) // 获取所有的数据
      //   const mainStore = useMainStore()
      //   mainStore.fetchEntireDataAction()
      // }
    }
  }
})

export default useLoginStore
