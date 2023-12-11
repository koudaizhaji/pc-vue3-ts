/** 工具文件
 * 后台路径与菜单路由的映射关系
 */
import type { LILIBreadcrumbItem } from '@/components/public/layout/breadcrumb'
import type { RouteRecordRaw } from 'vue-router'
import { urlMatch } from '@/utils/format'

/** 默认main的对应的菜单
 * 定义好空数组localRoutes方便返回
 * 中间的部分就是将对应的路径菜单映射到路由中
 * 最后 return localRoutes
 */
/** 将对应的路径菜单映射到路由中
 * 注：require.context("../router/main", true, /\.ts/)是webpack的api
 * 参数：1.路径 2.是否遍历子目录，布尔值 3.匹配文件，正则
 */
// 定义为空对象，第一个属性是根路由，第二个属性是子路由
export let firstMenu: any = {}

// 加载本地路由的函数封装
function loadLocalRoutes() {
  // 动态添加路由，1动态获取所有路由对象，放在数组中
  // 路由对象都在文件中，从文件中读取动态添加到数组中
  const localRoutes: RouteRecordRaw[] = []
  // 读取所有的指定位置的ts文件
  // const basefiles:Record<string,any> = import.meta.glob('@/routers/base/**/*.ts',{
  //   eager: true
  // })

  const files: Record<string, any> = import.meta.glob('@/routers/**/*.ts', {
    eager: true
  })

  // console.log('basefiles', files)
  for (const key in files) {
    // console.log('key',key)
    if (key == '/src/routers/index.ts') continue
    const basefile = files[key]
    const base = basefile.default
    // console.log('base', base)
    localRoutes.push(base)
    // 动态添加路由
    // localRoutes.push(base)
  }

  return localRoutes
}

// 后台路径与菜单的映射关系,参数：用户的菜单
// 只负责映射，映射完返回
export const mapMenusToRoutes = (userMenus: any[]): RouteRecordRaw[] => {
  // step1:加载本地路由
  const localRoutes = loadLocalRoutes()
  // console.log('拿到的本地文件路径',localRoutes)
  // step2:根据菜单匹配正确的路由
  // 匹配到的真正路由放在这里
  const routes: RouteRecordRaw[] = []
  for (const menu of userMenus) {
    // console.log('拿到的每个菜单项',menu)
    for (const submenu of menu.children) {
      for (const page of submenu.children) {
        const route = localRoutes.find((item) => item.path === page.url)
        // console.log('匹配结果',route)
        if (route) {
          // 给2级路由增加一个重定向功能，但只需要增加1次，且判断用户是否有权限
          if (!routes.find((item) => item.path === submenu.url)) {
            routes.push({ path: submenu.url, redirect: route.path })
          }
          // 这里是将3级菜单对应的路径加到路由中
          routes.push(route)
          const isHasRootpath = Object.keys(firstMenu).includes(urlMatch(route.path, true))
          if (!isHasRootpath) {
            firstMenu[urlMatch(route.path, true)] = route.path
          }
        }
        // if(!firstMenu && route) {
        // console.log('firstMenu', route)
        // firstMenu = route
        // }
      }
    }
  }
  return routes

  /* 2. 根据菜单获取需要添加的routes。递归实现
   * 2.1. 先获取一级菜单,如果没有children或者type为1，就不需要再获取二级菜单
   * 2.2. 再获取二级菜单
   */
  const _recurseGetRoutes = (menus: any[]) => {
    console.log('这里的menus', menus)
    menus.map((menu) => {
      // 无子菜单或type为2，就是二级菜单,直接添加
      if (menu.children?.length === 0 || menu.type === 2) {
        // console.log("数据库返回的结果", menu)

        const route = allRoutes.find((routeItem) => routeItem.path === menu.url)

        if (route) {
          // 以下是给一级菜单添加redirect重定向，让一级菜单也可直接跳转有权限的对应一级的二级菜单的第一个页面//
          // 下面对应的处理是这里，以下代码目前有问题
          // if (!allRoutes.find((item) => item.path === menu.url)) {
          //   console.log("结果", menu.url, route.path)
          //   localRoutes.push({
          //     path: menu.url,
          //     redirect: route.path
          //   })
          // }
          localRoutes.push(route)
        }
        if (!firstMenu) firstMenu = menu
      } else {
        _recurseGetRoutes(menu.children)
      }
    })
  }

  _recurseGetRoutes(userMenus)

  return localRoutes
}

// 根据当前路径获取对应的面包屑
export function pathMapBreadcrumbs(currentPath: string, userMenus: any[]): any {
  // 定义面包屑
  const breadcrumbs: LILIBreadcrumbItem[] = []

  // 遍历获取面包屑的层级
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      for (const page of submenu.children) {
        if (page.url === currentPath) {
          breadcrumbs.push({ name: menu.title, path: '/' })
          breadcrumbs.push({ name: submenu.title, path: submenu.url })
          breadcrumbs.push({ name: page.title, path: page.url })
        }
      }
    }
  }
  console.log('breadcrumbs的加工结果', breadcrumbs)
  return breadcrumbs
}

// 通过菜单信息获取到所有对应的id
// 注意点：我们要取到的是最底层的id,ElTree是直接选中父级id
// 这里传入的是菜单列表[{}]对象，返回的是id数组
export function mapMenuListToIds(menuList: any[]) {
  const ids: number[] = []
  function _recurseGetId(menus: any) {
    for (const item of menus) {
      if (item.children.length !== 0) {
        _recurseGetId(item.children)
      } else {
        ids.push(item.id)
      }
    }
  }
  _recurseGetId(menuList)

  return ids
}

// 所有的菜单映射权限 递归
// 参数：菜单列表
// 返回值：权限的数组【'字符串数组'】
export function mapMenuToPermissions(menuList: any[]) {
  const permissions: string[] = []
  function _recurseGetPermissions(menus: any) {
    for (const item of menus) {
      if (item.type == 5) {
        permissions.push(item.permission)
      } else {
        // 确保item.children是空数组
        _recurseGetPermissions(item.children ?? [])
      }
    }
  }
  _recurseGetPermissions(menuList)

  return permissions
}
