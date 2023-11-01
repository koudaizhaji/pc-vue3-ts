import type { RouterProps } from './index'

const distributeRoutes: RouterProps = [
  {
    path: 'distribute',
    name: 'Distribute',
    component: () => import('../views/base/main/distribute/index.vue'),
    meta: {
      nav: [
        { title: '首页', path: '/main/analysis' },
        { title: '分销中心', path: '/main/distribute' }
      ]
    }
  }
]

export default distributeRoutes
