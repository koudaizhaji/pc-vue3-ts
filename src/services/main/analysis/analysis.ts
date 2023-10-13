/*
 * @Author: 李立
 * @Date: 2023-09-30 23:31:07
 * @LastEditors: 李立
 * @LastEditTime: 2023-10-13 09:21:39
 * @FilePath: \apiObjectf:\pcadmin\src\services\main\analysis\analysis.ts
 * @Description: 商品统计首页的封装
 * 相关开发文件头自动添加：联系微信huaiplayboy
 */
import liliRequest from '@/services'

export function getAmountListData() {
  return liliRequest.get({
    url: '/goods/amount/list'
  })
}

export function getGoodsCategoryCount() {
  return liliRequest.get({
    url: '/goods/category/count'
  })
}

export function getGoodsCategorySale() {
  return liliRequest.get({
    url: '/goods/category/sale'
  })
}

export function getGoodsCategoryFavor() {
  return liliRequest.get({
    url: '/goods/category/favor'
  })
}

export function getGoodsAddressSale() {
  return liliRequest.get({
    url: '/goods/address/sale'
  })
}
