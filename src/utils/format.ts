import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

export function utcFormat(utcString: string, format = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs.utc(utcString).utcOffset(8).format(format)
}

// 获取匹配的第一个路径的根路径
export function urlMatch(path: string, isPath = false) {
  const match = path.match(/^\/([^/]+)/)
  if (match) {
    if (isPath) {
      return '/' + match[1]
    }
    return match[1]
  }
  return ''
}
