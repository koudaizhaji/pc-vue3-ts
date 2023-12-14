/*
 * @Author: 李立
 * @Date: 2023-11-19 18:41:53
 * @LastEditors: 李立
 * @LastEditTime: 2023-12-04 12:49:20
 * @FilePath: \apiObjectc:\Users\Farben\Desktop\initobj\project\pc-vue3-ts\src\routers\index.ts
 * @Description:
 * 相关开发文件头自动添加：联系微信huaiplayboy
 */

import { LOGIN_TOKEN } from '@/config'
import { localCache } from '@/utils/cache'
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { firstMenu, mapMenusToRoutes } from '@/utils/map-menus'
import { urlMatch } from '@/utils/format'

// 路由
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/base'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login.vue')
    },
    {
      path: '/base',
      name: 'base',
      component: () => import('@/views/base/base.vue')
    },
    {
      path: '/weixin',
      name: 'weixin',
      component: () => import('@/views/weixin/weixin.vue')
    },
    {
      path: '/screen',
      name: 'screen',
      component: () => import('@/views/screen/screen.vue')
    },
    {
      path: '/study',
      name: 'study',
      component: () => import('@/views/study/study.vue')
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('@/views/chat/chat.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('@/views/shop/shop.vue')
    },
    {
      path: '/template',
      name: 'template',
      component: () => import('@/views/template/template.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('../views/public/err-page/404-view.vue')
    },
    {
      path: '/403',
      name: '403',
      component: () => import('../views/public/err-page/403-view.vue')
    }
  ]
})

// 动态添加路由
export function addRoutesWithMenu(menus: any) {
  // console.log('addRoutesWithMenu',addRoutesWithMenu)
  // 1.获取匹配到的所有的路由
  const routes = mapMenusToRoutes(menus)

  // 2.动态添加到router中
  for (const route of routes) {
    // console.log('添加前记录',route.path)
    // 获取根路径名称base,weixin
    const rootPath = urlMatch(route.path)
    router.addRoute('base', route)
  }
  console.log('此时的router', router)
}

router.beforeEach((to, from, next) => {
  const token = localCache.getCache(LOGIN_TOKEN)

  // console.log('to.path:', to.path);

  if (to.path !== '/login' && !token) {
    console.log('Not on login page')
    // 仅当未登录时才重定向到登录页
    return next('/login')
  }
  // console.log('1111111',to.path,firstMenu,Object.keys(firstMenu).includes(to.path))
  if (Object.keys(firstMenu).includes(to.path)) {
    return next(firstMenu[to.path])
  }
  // if(to.path =='/base'){
  // if(token && to.path == urlMatch(firstMenu?.path,true)){
  // console.log('Redirecting to:', firstMenu?.path);
  // 异步获取菜单信息
  // return next(firstMenu?.path);
  // }

  // 如果已经在登录页，正常导航
  console.log('Already on login page, proceeding with navigation')
  return next()
})

export default router
