import type { RouterProps } from '../index'

const navMap: Record<string, { title: string; path: string }> = {
  weixin: { title: '微信', path: '/weixin' },
  home: { title: '首页', path: '/weixin/home' },
  mph5: { title: '公众号', path: '/weixin/mph5' },
  wxapp: { title: '小程序', path: '/weixin/wxapp' },
  welcome: { title: '欢迎页', path: '/weixin/home/welcome' },
  mph5Users: { title: '用户管理', path: '/weixin/mph5/users' },
  messages: { title: '消息管理', path: '/weixin/mph5/messages' },
  menus: { title: '菜单管理', path: '/weixin/mph5/menus' },
  keywords: { title: '关键字回复', path: '/weixin/mph5/keywords' },
  wxappUsers: { title: '用户管理', path: '/weixin/wxapp/users' }
}
const getNav = (list: string[]) => list.map((item) => navMap[item])

const screenRoutes: RouterProps = [
  {
    path: 'weixin',
    component: () => import('@/views/weixin/index.vue'),
    children: [
      {
        path: '',
        redirect: '/weixin/home'
      },
      {
        path: 'home',
        component: () => import('@/views/weixin/home/index.vue'),
        children: [
          {
            path: '',
            redirect: '/weixin/home/welcome'
          },
          {
            path: 'welcome',
            name: 'WeixinWelcome',
            component: () => import('@/views/weixin/home/welcome/index.vue'),
            meta: {
              nav: getNav(['weixin', 'home', 'welcome'])
            }
          }
        ]
      },
      {
        path: 'mph5',
        component: () => import('@/views/weixin/mph5/index.vue'),
        children: [
          {
            path: '',
            redirect: '/weixin/mph5/users'
          },
          {
            path: 'users',
            name: 'WeixinUser',
            component: () => import('@/views/weixin/mph5/users/index.vue'),
            meta: {
              nav: getNav(['weixin', 'mph5', 'mph5Users'])
            }
          },
          {
            path: 'messages',
            name: 'WeixinMessage',
            component: () => import('@/views/weixin/mph5/messages/index.vue'),
            meta: {
              nav: getNav(['weixin', 'mph5', 'messages'])
            }
          },
          {
            path: 'menus',
            name: 'WeixinMenus',
            component: () => import('@/views/weixin/mph5/menus/index.vue'),
            meta: {
              nav: getNav(['weixin', 'mph5', 'menus'])
            }
          },
          {
            path: 'keywords',
            name: 'WeixinKeywords',
            component: () => import('@/views/weixin/mph5/keywords/index.vue'),
            meta: {
              nav: getNav(['weixin', 'mph5', 'keywords'])
            }
          }
        ]
      },
      {
        path: 'wxapp',
        component: () => import('@/views/weixin/wxapp/index.vue'),
        children: [
          {
            path: '',
            redirect: '/wxapp/users'
          },
          {
            path: 'users',
            name: 'WxappUsers',
            component: () => import('@/views/weixin/wxapp/users/index.vue'),
            meta: {
              nav: getNav(['weixin', 'wxapp', 'wxappUsers'])
            }
          }
        ]
      }
    ]
  }
]

export default screenRoutes
