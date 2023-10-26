import { LOGIN_TOKEN } from '@/config'
import { localCache } from '@/utils/cache'
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// 扩展继承属性
interface extendRoute {
  hidden?: boolean
}

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
    component: () => import('../views/base/main/index.vue'),
    children: [
      {
        path: '',
        redirect: '/main/analysis'
      },
      {
        path: 'analysis',
        name: 'Analysis',
        component: () => import('../views/base/main/analysis/index.vue'),
        children: [
          {
            path: '',
            redirect: '/main/analysis/overview'
          },
          {
            path: 'overview',
            name: 'AnalysisOverview',
            component: () => import('../views/base/main/analysis/overview/index.vue')
          },
          {
            path: 'dashboard',
            name: 'AnalysisDashboard',
            component: () => import('../views/base/main/analysis/dashboard/index.vue')
          }
        ]
      },
      {
        path: 'resource',
        name: 'Resource',
        component: () => import('../views/base/main/resource/index.vue')
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('../views/public/err-page/404-view.vue')
      }
    ]
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

router.beforeEach((to) => {
  const token = localCache.getCache(LOGIN_TOKEN)
  if (to.path === '/main' && !token) {
    return '/login'
  }
})

export default router
