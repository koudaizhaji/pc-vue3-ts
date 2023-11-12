import { LOGIN_TOKEN } from '@/config'
import { localCache } from '@/utils/cache'
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import baseRoutes from './routes/baseRoutes'
import weixinRoutes from './routes/weixinRoutes'
import screenRoutes from './routes/screenRoutes'
import studyRoutes from './routes/studyRoutes'
import chatRoutes from './routes/chatRoutes'

// 扩展继承属性
interface extendRoute {
  hidden?: boolean
  meta?: {
    nav: Array<{ title: string; path: string }>
    isSpecially?: boolean
  }
}

export interface RouterProps extends Array<RouteRecordRaw & extendRoute> {}

export const constantRoutes: RouterProps = [
  {
    path: '/login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/',
    component: () => import('@/views/index.vue'),
    children: [
      {
        path: '',
        redirect: '/base'
      },
      ...baseRoutes,
      ...weixinRoutes,
      ...screenRoutes,
      ...studyRoutes,
      ...chatRoutes,
      {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('../views/public/err-page/404-view.vue')
      },
      {
        path: '403',
        name: '403',
        component: () => import('../views/public/err-page/403-view.vue')
      }
    ]
  }
]

/** notFoundRouter(找不到路由)
 */
export const notFoundRouter = {}

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL), // history
  history: createWebHashHistory(), // hash
  routes: constantRoutes
})

router.beforeEach((to, _, next) => {
  const token = localCache.getCache(LOGIN_TOKEN)
  if (to.path !== '/login' && !token) {
    return next('/login')
  }
  return next()
})

export default router
