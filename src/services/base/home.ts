import liliRequest from '../index'

export const getMenuList = () =>
  liliRequest.get({
    url: '/pcadmin/menus/list'
  })

export const addMenu = <T>(data: T) =>
  liliRequest.post({
    url: '/pcadmin/menus/add',
    data: data
  })

export const editMenu = <T>(data: T) =>
  liliRequest.patch({
    url: '/pcadmin/menus',
    data: data
  })

export const deleteMenu = (id: string | number) =>
  liliRequest.patch({
    url: '/pcadmin/menus/' + id
  })

// 获取管理员用户列表
export const getUserList = <T>(data: T) =>
  liliRequest.get({
    url: 'pcadmin/users/list',
    params: data
  })

// 删除管理用户
export const deleteUser = (id: string | number) =>
  liliRequest.delete({
    url: '/pcadmin/users/' + id
  })

// 添加管理用户
export const addUser = <T>(data: T) =>
  liliRequest.post({
    url: '/pcadmin/users/add',
    data: data
  })

// 编辑管理用户
export const editUser = <T>(data: T) =>
  liliRequest.patch({
    url: '/pcadmin/users/info',
    data: data
  })
