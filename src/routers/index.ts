/*
 * @Author: 李立
 * @Date: 2023-09-30 17:21:10
 * @LastEditors: 李立
 * @LastEditTime: 2023-10-13 09:05:42
 * @FilePath: \apiObjectf:\pcadmin\src\routers\index.ts
 * @Description:路由入口文件
 * 相关开发文件头自动添加：联系微信huaiplayboy
 */
import { LOGIN_TOKEN } from '../config'
import { localCache } from '../utils/cache'
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// 扩展继承属性
interface extendRoute {
  hidden?: boolean
}

/**
 * path ==> 路由路径
 * name ==> 路由名称
 * component ==> 路由组件
 * redirect ==> 路由重定向
 * alwaysShow ==> 如果设置为true，将始终显示根菜单，无论其子路由长度如何
 * hidden ==> 如果“hidden:true”不会显示在侧边栏中（默认值为false）
 * keepAlive ==> 设为true 缓存
 * meta ==> 路由元信息
 * meta.title ==> 路由标题
 * meta.icon ==> 菜单icon
 * meta.affix ==> 如果设置为true将会出现在 标签栏中
 * meta.breadcrumb ==> 如果设置为false，该项将隐藏在breadcrumb中（默认值为true）
 */

export const constantRoutes: Array<RouteRecordRaw & extendRoute> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('../views/base/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('../views/base/home/home.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/public/err-page/404-view.vue')
  },
  {
    path: '/403',
    name: '403',
    component: () => import('../views/public/err-page/403-view.vue')
  }
  // {
  //   path: '/:pathMatch(.*)',
  //   redirect: '/403'
  // }
]

/** notFoundRouter(找不到路由)
 */
export const notFoundRouter = {}

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL), // history
  history: createWebHashHistory(), // hash
  routes: constantRoutes
})

/** 导航守卫
 * to：跳转的位置/from,从哪里跳转过来的
 * 返回值：返回值决定导航路径
 */
router.beforeEach((to, from) => {
  const token = localCache.getCache(LOGIN_TOKEN)
  if (to.path === '/main' && !token) {
    return '/login'
  }
})

export default router
