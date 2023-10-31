import type { RouterProps } from './index'

const resourceRoutes: RouterProps = [
  {
    path: 'resource',
    name: 'Resource',
    component: () => import('../views/base/main/resource/index.vue'),
    meta: {
      nav: [
        { title: '首页', path: '/main/analysis' },
        { title: '资源管理', path: '/main/resource' }
      ]
    }
  }
]

export default resourceRoutes
