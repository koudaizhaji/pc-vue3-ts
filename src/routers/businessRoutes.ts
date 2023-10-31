import type { RouterProps } from './index'

const businessRoutes: RouterProps = [
  {
    path: 'business',
    name: 'Business',
    component: () => import('../views/base/main/business/index.vue'),
    meta: {
      nav: [
        { title: '首页', path: '/main/analysis' },
        { title: '业务管理', path: '/main/business' }
      ]
    }
  }
]

export default businessRoutes
