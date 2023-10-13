// 常用工具函数封装
import { h } from 'vue'
/** 将时间转换为字符串格式，可传入自定义的时间格式字符串。
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (typeof time === 'string') {
      if (/^[0-9]+$/.test(time)) {
        // support "1548221490638"
        time = parseInt(time)
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }

    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    return value.toString().padStart(2, '0')
  })
  return time_str
}

/** 将时间戳转换为友好的时间描述，例如“刚刚”，“1小时前”等。
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分'
    )
  }
}

/** 从 URL 中解析查询参数并返回一个对象。
 * @param {string} url
 * @returns {Object}
 */
export function getQueryObject(url) {
  url = url == null ? window.location.href : url
  const search = url.substring(url.lastIndexOf('?') + 1)
  const obj = {}
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}

/** 计算字符串的字节长度，考虑了 UTF-8 编码的情况。
 * @param {string} input value
 * @returns {number} output value
 */
export function byteLength(str) {
  // returns the byte length of an utf8 string
  let s = str.length
  for (let i = str.length - 1; i >= 0; i--) {
    const code = str.charCodeAt(i)
    if (code > 0x7f && code <= 0x7ff) s++
    else if (code > 0x7ff && code <= 0xffff) s += 2
    if (code >= 0xdc00 && code <= 0xdfff) i--
  }
  return s
}

/** 移除数组中的空元素，返回一个新数组。
 * @param {Array} actual
 * @returns {Array}
 */
export function cleanArray(actual) {
  const newArray = []
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i])
    }
  }
  return newArray
}

/** 将一个对象转换为 URL 查询字符串。
 * @param {Object} json
 * @returns {Array}
 */
export function param(json) {
  if (!json) return ''
  return cleanArray(
    Object.keys(json).map((key) => {
      if (json[key] === undefined) return ''
      return encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
    })
  ).join('&')
}

/** 将 URL 查询字符串解析为对象。
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach((v) => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}

/** 将包含 HTML 标签的字符串转换为纯文本。
 * @param {string} val
 * @returns {string}
 * Vue3写法
 */
export function html2Text(val) {
  // 创建虚拟 DOM 元素
  const vnode = h('div', { innerHTML: val })
  // 将虚拟 DOM 渲染为字符串
  const text = vnode.children.map((child) => child.children || '').join('')

  return text
}

/** 将两个对象合并，后一个对象会覆盖前一个对象的同名属性。
 * @param {Object} target
 * @param {(Object|Array)} source
 * @returns {Object}
 */
export function objectMerge(target, source) {
  if (typeof target !== 'object') {
    target = {}
  }
  if (Array.isArray(source)) {
    return source.slice()
  }
  Object.keys(source).forEach((property) => {
    const sourceProperty = source[property]
    if (typeof sourceProperty === 'object') {
      target[property] = objectMerge(target[property], sourceProperty)
    } else {
      target[property] = sourceProperty
    }
  })
  return target
}

/** 在 DOM 元素上添加或移除 CSS 类名。
 * @param {HTMLElement} element
 * @param {string} className
 */
export function toggleClass(element, className) {
  if (!element || !className) {
    return
  }
  let classString = element.className
  const nameIndex = classString.indexOf(className)
  if (nameIndex === -1) {
    classString += '' + className
  } else {
    classString =
      classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length)
  }
  element.className = classString
}

/** 获取指定类型的时间戳，用于获取当前时间或某个相对时间。
 * @param {string} type
 * @returns {Date}
 */
export function getTime(type) {
  if (type === 'start') {
    return new Date().getTime() - 3600 * 1000 * 24 * 90
  } else {
    return new Date(new Date().toDateString())
  }
}

/** 创建一个防抖函数，用于限制函数在一段时间内的连续调用。
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function () {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function (...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}

/** 深度克隆一个对象，以防止引用共享。
 * @param {Object} source
 * @returns {Object}
 */
export function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'deepClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach((keys) => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}

/** 从数组中移除重复的元素并返回新数组。
 * @param {Array} arr
 * @returns {Array}
 */
export function uniqueArr(arr) {
  return Array.from(new Set(arr))
}

/** 生成一个唯一的字符串，通常用于生成唯一的标识符。
 * @returns {string}
 */
export function createUniqueString() {
  const timestamp = +new Date() + ''
  const randomNum = parseInt((1 + Math.random()) * 65536) + ''
  return (+(randomNum + timestamp)).toString(32)
}

/** 检查 DOM 元素是否包含指定的 CSS 类。
 * @param {HTMLElement} elm
 * @param {string} cls
 * @returns {boolean}
 */
export function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

/** 向 DOM 元素添加指定的 CSS 类。
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function addClass(ele, cls) {
  if (!hasClass(ele, cls)) ele.className += ' ' + cls
}

/** 从 DOM 元素中移除指定的 CSS 类。
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    ele.className = ele.className.replace(reg, ' ')
  }
}
// 生成一个随机颜色值。
export function getColor() {
  let str = '#'
  const arr = ['1', '2', '3', '4', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
  for (let i = 0; i < 6; i++) {
    const num = parseInt(Math.random() * 16)
    str += arr[num]
  }
  return str
}

// 检查给定的值是否是数组
export const isArray = function (value) {
  return objToString.call(value) === '[object Array]'
}

const funProto = Function.prototype
const objProto = Object.prototype

const getPrototypeOf = Object.getPrototypeOf

const objToString = objProto.toString
const hasOwnProperty = objProto.hasOwnProperty
const funToString = funProto.toString
// 检查给定的值是否是字符串
export const isString = function (value) {
  return objToString.call(value) === '[object String]'
}
// 检查给定的值是否是纯对象，纯对象是指通过 {} 或 new Object() 声明的对象
export const isPlainObject = function (value) {
  if (!value || objToString.call(value) !== '[object Object]') {
    return false
  }

  const prototype = getPrototypeOf(value)

  if (prototype === null) {
    return true
  }

  const constructor = hasOwnProperty.call(prototype, 'constructor') && prototype.constructor

  return (
    typeof constructor === 'function' && funToString.call(constructor) === funToString.call(Object)
  )
}

// // 深度克隆 array 数组或 json 对象，返回克隆后的副本
export const deepObjClone = function (obj) {
  const weakMap = new WeakMap()
  function clone(obj) {
    if (obj == null) {
      return obj
    }
    if (obj instanceof Date) {
      return new Date(obj)
    }
    if (obj instanceof RegExp) {
      return new RegExp(obj)
    }
    if (typeof obj !== 'object') return obj

    if (weakMap.get(obj)) {
      return weakMap.get(obj)
    }
    const copy = new obj.constructor()
    weakMap.set(obj, copy)
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const value = obj[key]
        copy[key] = clone(value)
      }
    }
    return copy
  }
  return clone(obj)
}
// 获取当前时间所在的时段，如“早上好”、“下午好”等。
export function getTimeStateStr() {
  const timeNow = new Date()
  const hours = timeNow.getHours()
  if (hours >= 6 && hours <= 10) return `早上好`
  if (hours >= 10 && hours <= 14) return `中午好`
  if (hours >= 14 && hours <= 18) return `下午好`
  if (hours >= 18 && hours <= 24) return `晚上好`
  if (hours >= 0 && hours <= 6) return `凌晨好`
}
