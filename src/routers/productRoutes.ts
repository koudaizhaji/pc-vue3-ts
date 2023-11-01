import type { RouterProps } from './index'

const productRoutes: RouterProps = [
  {
    path: 'product',
    component: () => import('../views/base/main/product/index.vue'),
    children: [
      {
        path: '',
        redirect: '/main/product/wxh5fans'
      },
      {
        path: 'wxh5fans',
        name: 'WxH5Fans',
        component: () => import('../views/base/main/product/wx-h5-fans/index.vue'),
        meta: {
          nav: [
            { title: '首页', path: '/main/product' },
            { title: '公众号平台', path: '/main/product' },
            { title: '公众号粉丝', path: '/main/product/wxh5fans' }
          ]
        }
      },
      {
        path: 'menus',
        name: 'WxH5Fans',
        component: () => import('../views/base/main/product/menus/index.vue'),
        meta: {
          nav: [
            { title: '首页', path: '/main/product' },
            { title: '公众号平台', path: '/main/product' },
            { title: '公众号菜单', path: '/main/product/menus' }
          ]
        }
      }
    ]
  }
]

export default productRoutes
