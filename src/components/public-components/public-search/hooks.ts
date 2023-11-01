const hieghtTransitionStyle = `height .5s ease`

// 动画效果
export const transitionHooks = {
  css: false,
  // 在元素被插入到 DOM 之前被调用
  // 用这个来设置元素的 "enter-from" 状态
  onBeforeEnter(el) {
    el.style.transition = hieghtTransitionStyle
    el.style.height = 0
  },

  // 在元素被插入到 DOM 之后的下一帧被调用
  // 用这个来开始进入动画
  onEnter(el) {
    // 调用回调函数 done 表示过渡结束
    // 如果与 CSS 结合使用，则这个回调是可选参数
    // 表示动画开始之后的样式，这里，可以设置小球完成动画之后的，结束状态
    el.style.height = el.scrollHeight + 'px'
    el.style.overflow = 'hidden'
  },

  // 当进入过渡完成时调用。
  onAfterEnter(el) {
    el.style.height = el.scrollHeight + 'px'
  },
  // 在 leave 钩子之前调用
  // 大多数时候，你应该只会用到 leave 钩子
  onBeforeLeave(el) {
    el.style.height = el.scrollHeight + 'px'
    el.style.overflow = 'hidden'
  },

  // 在离开过渡开始时调用
  // 用这个来开始离开动画
  onLeave(el) {
    // 调用回调函数 done 表示过渡结束
    // 如果与 CSS 结合使用，则这个回调是可选参数
    if (el.scrollHeight !== 0) {
      el.style.transition = hieghtTransitionStyle
      el.style.height = 0
    }
  },

  // 在离开过渡完成、
  // 且元素已从 DOM 中移除时调用
  onAfterLeave(el) {
    el.style.transition = ''
  }
}
