import type { RouterProps } from './index'

const mainRoutes: RouterProps = [
  {
    path: 'analysis',
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
          isSpecially: true
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
  }
]

export default mainRoutes
