// import { localCache } from '@/utils/cache'
// import { LOGIN_TOKEN } from '@/config'
import liliRequest from '../index'

export function getIpMsg() {
  return liliRequest.get({
    url: 'https://api.ipify.org?format=json'
  })
}
export function accountLogin(account: any) {
  return liliRequest.post({
    url: '/pcadmin/login',
    data: account
  })
}

export function getUserById() {
  return liliRequest.get({
    url: '/pcadmin/users/info'
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
