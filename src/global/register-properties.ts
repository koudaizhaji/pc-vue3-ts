// 注册全局的属性
import { App } from 'vue'

import { formatUtcString } from '@/utils/data.format'
export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    foo() {
      console.log('foo')
    },
    // 格式化时间
    formatTime(value: string) {
      return formatUtcString(value)
    }
  }
}
