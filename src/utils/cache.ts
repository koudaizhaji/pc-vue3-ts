/*
 * @Author: 李立
 * @Date: 2023-09-30 19:03:05
 * @LastEditors: 李立
 * @LastEditTime: 2023-10-13 09:26:39
 * @FilePath: \apiObjectf:\pcadmin\src\utils\cache.ts
 * @Description: 数据缓存的工具
 * 相关开发文件头自动添加：联系微信huaiplayboy
 */
enum CacheType {
  Local,
  Session
}
class LocalCache {
  storage: Storage
  constructor(type: CacheType) {
    this.storage = type === CacheType.Local ? window.localStorage : window.sessionStorage
  }
  setCache(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string) {
    // obj => string => obj
    const value = this.storage.getItem(key)
    // console.log("getCache的参数", key, value)
    return value ? JSON.parse(value) : null
  }

  removeCache(key: string) {
    this.storage.removeItem(key)
  }

  clearCache() {
    this.storage.clear()
  }
}

const localCache = new LocalCache(CacheType.Local)
const SessionCache = new LocalCache(CacheType.Session)

export { localCache, SessionCache }
