/*
 * @Author: 李立
 * @Date: 2023-10-01 22:11:02
 * @LastEditors: 李立
 * @LastEditTime: 2023-12-09 12:19:52
 * @FilePath: \apiObjectc:\Users\Farben\Desktop\initobj\project\pc-vue3-ts\src\stores\login\login.ts
 * @Description: 参考代码，从登录到登录成功后的所作操作
 * 相关开发文件头自动添加：联系微信huaiplayboy
 */
import { getUserById, getRoleMenus } from '@/services/login/login'
import { localCache } from '@/utils/cache'
import { defineStore } from 'pinia'
import { LOGIN_TOKEN, USER_INFO, USER_MENUS, PERMISSIONS } from '@/config'
import { mapMenusToRoutes, mapMenuToPermissions } from '@/utils/map-menus'
import router, { addRoutesWithMenu } from '@/routers'
import { urlMatch } from '@/utils/format'
import useMainStore from '@/stores/base/main'

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
      const userRes = await getUserById()
      this.userInfo = userRes.data
      console.log('拿到的用户信息', userRes)
      localCache.setCache(USER_INFO, this.userInfo)

      // 3.根据角色请求用户权限
      await this.getUserMenus()

      // 5. 动态添加路由
      const routes = mapMenusToRoutes(this.userMenus)
      console.log('routes', routes)
      routes.forEach((route: any) => {
        console.log('route', urlMatch(route.path))
        // 获取根路径名称base,weixin
        const rootPath = urlMatch(route.path)
        // 动态添加路由
        if (rootPath) {
          router.addRoute(rootPath, route)
        }
      })

      // 5.保存权限信息
      const permissions = mapMenuToPermissions(this.userMenus)
      this.permissions = permissions
      console.log('PERMISSIONS', permissions)
      localCache.setCache(PERMISSIONS, this.permissions)

      // 5.获取所有的数据,分组数据，角色数据
      const mainStore = useMainStore()
      mainStore.fetchEntireDataAction()

      // // 5.动态添加路由
      // addRoutesWithMenu(this.userMenus)

      router.push('/base')
    },
    loadLocalDataAction() {
      console.log('Loading local data')
      // 用户进行刷新时默认加载数据
      const token = localCache.getCache(LOGIN_TOKEN)
      const userInfo = localCache.getCache(USER_INFO)
      const userMenus = localCache.getCache(USER_MENUS)
      const permissions = localCache.getCache('permissions')

      if (token && userInfo && userMenus) {
        this.token = token
        this.userInfo = userInfo
        this.userMenus = userMenus
        this.permissions = permissions

        // 一旦刷新了，直接请求最新的角色和分组数据
        const mainStore = useMainStore()
        mainStore.fetchEntireDataAction()

        console.log('this.userMenus', this.userMenus)
        const routes = mapMenusToRoutes(this.userMenus)
        // console.log('routes', routes)
        routes.forEach((route: any) => {
          console.log('route111', route)
          // 动态添加路由
          // 获取根路径名称base,weixin
          const rootPath = urlMatch(route.path)
          // 动态添加路由
          if (rootPath) {
            router.addRoute(rootPath, route)
          }
        })
      }
    },
    async getUserMenus(): Promise<any> {
      const menusRes = await getRoleMenus()
      this.userMenus = menusRes.data
      console.log('拿到的用户菜单', menusRes.data)

      // 4.保存到缓存中
      localCache.setCache(USER_MENUS, this.userMenus)
    }
  }
})

export default useLoginStore
