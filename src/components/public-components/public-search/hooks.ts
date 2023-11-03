const heightTransitionStyle = `height .5s ease`

// 动画效果
export const transitionHooks = {
  css: false,
  // 在元素被插入到 DOM 之前被调用
  // 用这个来设置元素的 "enter-from" 状态
  onBeforeEnter(el: any) {
    el.style.transition = heightTransitionStyle
    el.style.height = '0'
  },

  // 在元素被插入到 DOM 之后的下一帧被调用
  // 用这个来开始进入动画
  onEnter(el: any) {
    // 调用回调函数 done 表示过渡结束
    // 如果与 CSS 结合使用，则这个回调是可选参数
    // 表示动画开始之后的样式，这里，可以设置小球完成动画之后的，结束状态
    el.style.height = el.scrollHeight + 'px'
    el.style.overflow = 'hidden'
  },

  // 当进入过渡完成时调用。
  onAfterEnter(el: any) {
    el.style.height = el.scrollHeight + 'px'
  },
  // 在 leave 钩子之前调用
  // 大多数时候，你应该只会用到 leave 钩子
  onBeforeLeave(el: any) {
    el.style.height = el.scrollHeight + 'px'
  },

  // 在离开过渡开始时调用
  // 用这个来开始离开动画
  onLeave(el: any) {
    // 调用回调函数 done 表示过渡结束
    // 如果与 CSS 结合使用，则这个回调是可选参数
    if (el.scrollHeight !== 0) {
      el.style.transition = heightTransitionStyle
      el.style.height = '0'
    }
  },

  // 在离开过渡完成、
  // 且元素已从 DOM 中移除时调用
  onAfterLeave(el: any) {
    el.style.transition = ''
  }
}

// 未写入时退格符号 退出当前所选项
export const handleKeyDown = (e: KeyboardEvent | Event, cb: Function) => {
  if ('keyCode' in e && e.keyCode === 8) {
    // 处理退格符号的逻辑
    cb()
  }
}

// esc事件（自动退出）
export const handleKeyDownEsc = (e: KeyboardEvent | Event, cb: Function) => {
  if ('keyCode' in e && e.keyCode === 27) {
    // 处理退格符号的逻辑
    cb()
  }
}

// enter事件（type = input时候提交）
export const handleKeyDownEnter = (e: KeyboardEvent | Event, cb: Function) => {
  if ('keyCode' in e && e.keyCode === 13) {
    // 处理退格符号的逻辑
    cb()
  }
}

// 记录PublicSearch组件的type
export enum PublicSearchTypeList {
  'input',
  'selectOne',
  'select-one',
  'selectMore',
  'select-more',
  'others'
}

export interface PublicSearchItemProps {
  key: string
  value: string | number | boolean | Array<string | number | boolean>
  valueTitle: string | string[]
  type: PublicSearchTypeList
  label: string
}

export interface PublicSearchInputProps {
  type: 'input'
  label: string
  key: string
}

interface SelectOption {
  value: string | number | boolean
  label: string
  disabled?: boolean
}

export interface PublicSearchSelectOneProps {
  type: 'selectOne' | 'select-one'
  label: string
  key: string
  options: SelectOption[]
  loading?: boolean
}

export interface PublicSearchSelectMoreProps {
  type: 'selectMore' | 'select-more'
  label: string
  key: string
  options: SelectOption[]
  loading?: boolean
}

export interface PublicSearchProps {
  config: Array<PublicSearchInputProps | PublicSearchSelectOneProps | PublicSearchSelectMoreProps>
}

export interface SearchItemEmits {
  (
    e: 'submit',
    value: PublicSearchItemProps['value'],
    valueTitle: PublicSearchItemProps['valueTitle']
  ): void
  (e: 'cancel'): void
}
