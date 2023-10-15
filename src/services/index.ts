/*
 * @Author: 李立
 * @Date: 2023-09-30 23:31:07
 * @LastEditors: 李立
 * @LastEditTime: 2023-10-13 09:10:54
 * @FilePath: \apiObjectf:\pcadmin\src\services\index.ts
 * @Description: 所有后台服务交互的入口
 * 相关开发文件头自动添加：联系微信huaiplayboy
 */

import { localCache } from '@/utils/cache'
import { BASE_URL, TIME_OUT } from './config'
import LiLiRequest from './request'
import { LOGIN_TOKEN } from '@/config'

const liliRequest = new LiLiRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // 封装的拦截器
  interceptors: {
    requestSuccessFn: (config) => {
      // headers可选，所以可能为空会错误提示，加了！做非空断言
      const token = localCache.getCache(LOGIN_TOKEN)
      if (config.headers && token) {
        config.headers.Authorization = token
      }
      return config
    }
  }
})

export default liliRequest
