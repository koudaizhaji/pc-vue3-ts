/**
 * @Author: 李立
 * @Date: 2023-09-30 23:31:07
 * @LastEditors: 李立
 * @LastEditTime: 2023-10-13 09:19:19
 * @FilePath: \apiObjectf:\pcadmin\src\services\main\main.ts
 * @Description: 主页相关请求封装
 * 相关开发文件头自动添加：联系微信huaiplayboy
 */
import liliRequest from '../request'

export function getEntireRoles() {
  return liliRequest.post({
    url: '/role/list'
  })
}

export function getEntireDepartments() {
  return liliRequest.post({
    url: '/department/list'
  })
}

export function getEntireMenus() {
  return liliRequest.post({
    url: '/menu/list'
  })
}
