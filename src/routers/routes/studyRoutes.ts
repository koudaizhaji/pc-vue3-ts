import type { RouterProps } from '../index'

const navMap: Record<string, { title: string; path: string }> = {
  study: { title: '大学', path: '/study' },
  home: { title: '首页', path: '/study/home' },
  base: { title: '基础管理', path: '/study/base' },
  market: { title: '营销中心', path: '/study/market' }
}
const getNav = (list: string[]) => list.map((item) => navMap[item])

const studyRoutes: RouterProps = [
  {
    path: 'study',
    component: () => import('@/views/study/index.vue'),
    children: [
      {
        path: '',
        redirect: '/study/home'
      },
      {
        path: 'home',
        name: 'StudyHome',
        component: () => import('@/views/study/home/index.vue'),
        meta: {
          nav: getNav(['study', 'home'])
        }
      },
      {
        path: 'base',
        name: 'StudyBase',
        component: () => import('@/views/study/base/index.vue'),
        meta: {
          nav: getNav(['study', 'base'])
        }
      },
      {
        path: 'market',
        name: 'StudyMarket',
        component: () => import('@/views/study/market/index.vue'),
        meta: {
          nav: getNav(['study', 'market'])
        }
      }
    ]
  }
]

export default studyRoutes
