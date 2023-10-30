import type { RouterProps } from './index.ts'

const mainRoutes: RouterProps = [
  {
    path: '/main',
    // name: 'Main',
    component: () => import('../views/base/main/index.vue'),
    children: [
      {
        path: '',
        redirect: '/main/analysis'
      },
      {
        path: 'analysis',
        // name: 'Analysis',
        component: () => import('../views/base/main/analysis/index.vue'),
        children: [
          {
            path: '',
            redirect: '/main/analysis/overview'
          },
          {
            path: 'overview',
            name: 'AnalysisOverview',
            component: () => import('../views/base/main/analysis/overview/index.vue'),
            meta: {
              nav: [
                { title: '首页', path: '/main/analysis' },
                { title: '核心技术', path: '/main/analysis/overview' }
              ],
              isNormal: true
            }
          },
          {
            path: 'dashboard',
            name: 'AnalysisDashboard',
            component: () => import('../views/base/main/analysis/dashboard/index.vue'),
            meta: {
              nav: [
                { title: '首页', path: '/main/analysis' },
                { title: '大数据分析', path: '/main/analysis/dashboard' }
              ]
            }
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
  }
]

export default mainRoutes
