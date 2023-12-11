/*
 * @Author: 李立
 * @Date: 2023-11-19 18:41:53
 * @LastEditors: 李立
 * @LastEditTime: 2023-12-04 18:39:04
 * @FilePath: \apiObjectc:\Users\Farben\Desktop\initobj\project\pc-vue3-ts\src\services\main\system\system.ts
 * @Description:
 * 相关开发文件头自动添加：联系微信huaiplayboy
 */
import liliRequest from '@/services'

/** 用户的网络请求 */
export function getUserListData(queryInfo: any) {
  return liliRequest.post({
    url: '/pcadmin/users/list',
    data: queryInfo
  })
}

export function newUserData(userInfo: any) {
  return liliRequest.post({
    url: '/users',
    data: userInfo
  })
}

export function deleteUserData(id: number) {
  return liliRequest.delete({
    url: '/users/' + id
  })
}

export function editUserData(id: number, userInfo: any) {
  return liliRequest.patch({
    url: '/users/' + id,
    data: userInfo
  })
}

/** 获取页面的数据 */
export function getPageListData(pageName: string, queryInfo: any) {
  return liliRequest.post({
    url: `/pcadmin/${pageName}/list`,
    data: queryInfo
  })
}

export function deletePageData(pageName: string, id: number) {
  return liliRequest.delete({
    url: `/pcadmin/${pageName}/${id}`
  })
}

export function newPageData(pageName: string, dataInfo: any) {
  return liliRequest.post({
    url: `/pcadmin/${pageName}/add`,
    data: dataInfo
  })
}

export function editPageData(pageName: string, id: number, dataInfo: any) {
  return liliRequest.patch({
    url: `/pcadmin/${pageName}/${id}`,
    data: dataInfo
  })
}

/** 获取部门的信息 */
export function getGroupData(queryInfo: any) {
  return liliRequest.post({
    url: '/pcadmin/groups/list',
    data: queryInfo
  })
}

/** 获取角色的信息 */
export function getRoleData(queryInfo: any) {
  return liliRequest.post({
    url: '/pcadmin/roles/list',
    data: queryInfo
  })
}

/** 获取菜单的信息 */
export function getMenuData() {
  return liliRequest.post({
    url: '/pcadmin/menus/list'
  })
}
