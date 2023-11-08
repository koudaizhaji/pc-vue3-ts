import type { RouterProps } from '../index'

const navMap: Record<string, { title: string; path: string }> = {
  base: { title: '基础', path: '/base' },
  home: { title: '首页', path: '/base/home' },
  system: { title: '系统管理', path: '/base/system' },
  plat: { title: '平台管理', path: '/base/plat' },
  welcome: { title: '欢迎页', path: '/base/system/welcome' },
  menus: { title: '菜单管理', path: '/base/system/menus' },
  users: { title: '人员管理', path: '/base/system/users' },
  groups: { title: '分组管理', path: '/base/system/groups' },
  roles: { title: '角色权限', path: '/base/system/roles' },
  wxh5: { title: '公众号列表', path: '/base/plat/wxh5' },
  wxapp: { title: '小程序列表', path: '/base/plat/wxapp' }
}
const getNav = (list: string[]) => list.map((item) => navMap[item])

const baseRoutes: RouterProps = [
  {
    path: 'base',
    component: () => import('@/views/base/index.vue'),
    children: [
      {
        path: '',
        redirect: '/base/home'
      },
      {
        path: 'home',
        component: () => import('@/views/base/home/index.vue'),
        children: [
          {
            path: '',
            redirect: '/base/home/welcome'
          },
          {
            path: 'welcome',
            name: 'HomeWelcome',
            component: () => import('@/views/base/home/welcome/index.vue'),
            meta: {
              nav: getNav(['base', 'home', 'welcome'])
            }
          },
          {
            path: '/base/system/menus',
            name: 'Menus',
            component: () => import('@/views/base/home/menus/index.vue'),
            meta: {
              nav: getNav(['base', 'home', 'menus'])
            }
          },
          {
            path: '/base/system/users',
            name: 'Users',
            component: () => import('@/views/base/home/users/index.vue'),
            meta: {
              nav: getNav(['base', 'home', 'users'])
            }
          },
          {
            path: '/base/system/groups',
            name: 'Groups',
            component: () => import('@/views/base/home/groups/index.vue'),
            meta: {
              nav: getNav(['base', 'home', 'groups'])
            }
          },
          {
            path: '/base/system/roles',
            name: 'Roles',
            component: () => import('@/views/base/home/roles/index.vue'),
            meta: {
              nav: getNav(['base', 'home', 'roles'])
            }
          }
        ]
      },
      {
        path: 'system',
        component: () => import('@/views/base/system/index.vue'),
        children: [
          {
            path: '',
            redirect: '/base/plat/wxh5'
          },
          {
            path: '/base/plat/wxh5',
            name: 'WXH5',
            component: () => import('@/views/base/system/wxh5/index.vue'),
            meta: {
              nav: getNav(['base', 'system', 'wxh5'])
            }
          },
          {
            path: '/base/plat/wxapp',
            name: 'WXAPP',
            component: () => import('@/views/base/system/wxapp/index.vue'),
            meta: {
              nav: getNav(['base', 'system', 'wxapp'])
            }
          }
        ]
      },
      {
        path: 'plat',
        name: 'Plat',
        component: () => import('@/views/base/plat/index.vue'),
        meta: {
          nav: getNav(['base', 'plat'])
        }
      }
    ]
  }
]

export default baseRoutes
