/*
 * @Author: 李立
 * @Date: 2023-10-12 20:12:56
 * @LastEditors: 李立
 * @LastEditTime: 2023-12-03 20:19:48
 * @FilePath: \apiObjectc:\Users\Farben\Desktop\initobj\project\pc-vue3-ts\src\plugins\app-setup.ts
 * @Description: 用于处理应用程序的初始化和全局设置，已被引入main.ts里使用
 * 相关开发文件头自动添加：联系微信huaiplayboy
 */
import 'virtual:uno.css'
import 'normalize.css'
import '../styles/index.less'
// import App from '../App.vue'
import router from '../routers'
import store from '../stores'
// 引入自定义的组件布局-全局
import PageWrapLayout from '@/components/base/page-wrap-layout/index.vue'
// svg-icons注册导入，将svg图转icon
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/public/svg-icon/index.vue'
import type { App } from 'vue'

export default function appSetup(app: App): void {
  app.component('svg-icon', SvgIcon)
  app.component('PageWrapLayout', PageWrapLayout)

  app.use(store)

  app.use(router)
}
