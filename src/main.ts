// main.ts
import { createApp } from 'vue'
import setup from './plugins/app-setup' // 引入应用程序初始化插件
import 'element-plus/theme-chalk/el-message.css' /* message 消息样式 */
import 'element-plus/theme-chalk/el-tag.css' /* tag     标签样式 */
import 'remixicon/fonts/remixicon.css' /* icon图标 */
import App from './App.vue' // 引入应用程序根组件

const app = createApp(App)
setup(app) // 调用插件初始化函数

app.mount('#app')
