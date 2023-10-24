// import { localCache } from '@/utils/cache'
// import { LOGIN_TOKEN } from '@/config'
import liliRequest from '../index'

export function accountLogin(account: any) {
  return liliRequest.post({
    url: '/pcadmin/login',
    data: account
  })
}

export function getUserById() {
  return liliRequest.get({
    url: '/pcadmin/user/info'
    // headers: {
    //   Authorization: localCache.getCache(LOGIN_TOKEN)
    // }
  })
}

export function getRoleMenus() {
  return liliRequest.get({
    url: `/pcadmin/rolemenus/mylist`
  })
}
