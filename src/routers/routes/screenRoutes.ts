import type { RouterProps } from '../index'

const navMap: Record<string, { title: string; path: string }> = {
  screen: { title: '大屏', path: '/screen' },
  home: { title: '首页', path: '/screen/home' },
  board: { title: '常用模板', path: '/screen/board' }
}
const getNav = (list: string[]) => list.map((item) => navMap[item])

const screenRoutes: RouterProps = [
  {
    path: 'screen',
    component: () => import('@/views/screen/index.vue'),
    children: [
      {
        path: '',
        redirect: '/screen/home'
      },
      {
        path: 'home',
        name: 'ScreenHome',
        component: () => import('@/views/screen/home/index.vue'),
        meta: {
          nav: getNav(['screen', 'home'])
        }
      },
      {
        path: 'board',
        name: 'ScreenBoard',
        component: () => import('@/views/screen/board/index.vue'),
        meta: {
          nav: getNav(['screen', 'board']),
          isSpecially: true
        }
      }
    ]
  }
]

export default screenRoutes
