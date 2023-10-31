import type { RouterProps } from './index'

const systemRoutes: RouterProps = [
  {
    path: 'system',
    component: () => import('../views/base/main/system/index.vue'),
    children: [
      {
        path: '',
        redirect: '/main/system/menu'
      },
      {
        path: 'menu',
        name: 'SystemMenu',
        component: () => import('../views/base/main/system/menu/index.vue'),
        meta: {
          nav: [
            { title: '首页', path: '/main/system' },
            { title: '平台操作', path: '/main/system' },
            { title: '菜单管理', path: '/main/system/menu' }
          ]
        }
      },
      {
        path: 'user',
        name: 'SystemUser',
        component: () => import('../views/base/main/system/user/index.vue'),
        meta: {
          nav: [
            { title: '首页', path: '/main/system' },
            { title: '平台操作', path: '/main/system' },
            { title: '人员管理', path: '/main/system/user' }
          ]
        }
      },
      {
        path: 'group',
        name: 'SystemGroup',
        component: () => import('../views/base/main/system/group/index.vue'),
        meta: {
          nav: [
            { title: '首页', path: '/main/system' },
            { title: '平台操作', path: '/main/system' },
            { title: '分组管理', path: '/main/system/group' }
          ]
        }
      },
      {
        path: 'role',
        name: 'SystemRole',
        component: () => import('../views/base/main/system/role/index.vue'),
        meta: {
          nav: [
            { title: '首页', path: '/main/system' },
            { title: '平台操作', path: '/main/system' },
            { title: '权限角色', path: '/main/system/role' }
          ]
        }
      }
    ]
  }
]

export default systemRoutes
