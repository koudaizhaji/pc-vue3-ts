import type { RouterProps } from '../index'

const navMap: Record<string, { title: string; path: string }> = {
  chat: { title: '社交', path: '/chat' },
  home: { title: '首页', path: '/chat/home' },
  users: { title: '用户相关', path: '/chat/users' }
}
const getNav = (list: string[]) => list.map((item) => navMap[item])

const chatRoutes: RouterProps = [
  {
    path: 'chat',
    component: () => import('@/views/chat/index.vue'),
    children: [
      {
        path: '',
        redirect: '/chat/home'
      },
      {
        path: 'home',
        name: 'StudyHome',
        component: () => import('@/views/chat/home/index.vue'),
        meta: {
          nav: getNav(['chat', 'home'])
        }
      },
      {
        path: 'users',
        name: 'StudyUser',
        component: () => import('@/views/chat/users/index.vue'),
        meta: {
          nav: getNav(['chat', 'users'])
        }
      }
    ]
  }
]

export default chatRoutes
