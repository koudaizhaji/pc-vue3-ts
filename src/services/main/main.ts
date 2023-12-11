import liliRequest from '../request'

// 获取角色列表
export function getEntireRoles() {
  return liliRequest.post({
    url: '/pcadmin/role/list'
  })
}

export function getEntireDepartments() {
  return liliRequest.post({
    url: '/pcadmin/group/list'
  })
}

export function getEntireMenus() {
  return liliRequest.post({
    url: '/pcadmin/menu/list'
  })
}
