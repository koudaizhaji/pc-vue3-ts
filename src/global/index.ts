/** 注册全局组件
 */
import { App } from 'vue'

import registerProperties from './register-properties'
// import registerElement from "./register-element"

export function globalRegister(app: App): void {
  app.use(registerProperties)
}
