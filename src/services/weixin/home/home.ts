import liliRequest from '@/services'

// 统计图顶部的4个滚动数字使用
export function getAmountListData() {
  return liliRequest.get({
    url: '/pcadmin/amount/list'
  })
}

export function getGoodsCategoryCount() {
  return liliRequest.get({
    url: '/pcadmin/goods/category/count'
  })
}

export function getGoodsCategorySale() {
  return liliRequest.get({
    url: '/pcadmin/goods/category/sale'
  })
}
