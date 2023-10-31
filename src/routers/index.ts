import { LOGIN_TOKEN } from '@/config'
import { localCache } from '@/utils/cache'
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import mainRoutes from './mainRoutes'

// 扩展继承属性
interface extendRoute {
  hidden?: boolean
  meta?: {
    nav: Array<{ title: string; path: string }>
  }
}

export interface RouterProps extends Array<RouteRecordRaw & extendRoute> {}

export const constantRoutes: RouterProps = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('../views/base/login/login.vue')
  },
  ...mainRoutes,
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

router.beforeEach((to) => {
  const token = localCache.getCache(LOGIN_TOKEN)
  if (to.path !== '/login' && !token) {
    return '/login'
  }
})

export default router
