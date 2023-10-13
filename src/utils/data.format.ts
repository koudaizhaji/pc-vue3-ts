/*
 * @Author: 李立
 * @Date: 2023-09-30 19:03:05
 * @LastEditors: 李立
 * @LastEditTime: 2023-10-13 09:27:10
 * @FilePath: \apiObjectf:\pcadmin\src\utils\data.format.ts
 * @Description: 数据格式化：时间格式化工具及对象属性判断
 * 相关开发文件头自动添加：联系微信huaiplayboy
 */
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

const DATA_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export function formatUtcString(utcString: string, format = DATA_TIME_FORMAT) {
  const resultTime = dayjs.utc(utcString).utcOffset(8).format(format)
  return resultTime
}

// 判断对象所有属性值是否为空
export function areAllPropertiesEmpty(obj: Record<string, any>): boolean {
  for (const key in obj) {
    if (
      Object.prototype.hasOwnProperty.call(obj, key) &&
      obj[key] !== null &&
      obj[key] !== undefined &&
      obj[key] !== ''
    ) {
      return false
    }
  }
  return true
}
