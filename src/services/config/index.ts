/*
 * @Author: 李立
 * @Date: 2023-09-30 23:31:07
 * @LastEditors: 李立
 * @LastEditTime: 2023-10-13 09:37:44
 * @FilePath: \apiObjectf:\pcadmin\src\services\config\index.ts
 * @Description:
 * 相关开发文件头自动添加：联系微信huaiplayboy
 */
// 1.区分开发环境和生产环境
// export const BASE_URL = 'http://coderwhy.dev:8000'
// export const BASE_URL = 'http://codercba.prod:8000'

// 2.代码逻辑判断, 判断当前环境
// vite默认提供的环境变量
// console.log(import.meta.env.MODE)
// console.log(import.meta.env.DEV) // 是否开发环境
// console.log(import.meta.env.PROD) // 是否生产环境
// console.log(import.meta.env.SSR) // 是否是服务器端渲染(server side render)

let BASE_URL = ''
// if(import.meta.env.MODE == 'production')
if (import.meta.env.PROD) {
  // 生产环境
  BASE_URL = 'http://koudai.develop.idushenghuo.com/'
} else {
  // 开发环境
  BASE_URL = 'http://koudai.develop.idushenghuo.com/'
}

console.log('当前环境是', import.meta.env.MODE, BASE_URL)

// 3.通过创建.env文件直接创建变量
// console.log(import.meta.env.VITE_URL)

export const TIME_OUT = 10000
export { BASE_URL }
