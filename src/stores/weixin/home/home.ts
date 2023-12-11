/*
 * @Author: 李立
 * @Date: 2023-12-09 23:35:03
 * @LastEditors: 李立
 * @LastEditTime: 2023-12-10 16:01:14
 * @FilePath: \apiObjectc:\Users\Farben\Desktop\initobj\project\pc-vue3-ts\src\stores\weixin\home\home.ts
 * @Description:
 * 相关开发文件头自动添加：联系微信huaiplayboy
 */
import { defineStore } from 'pinia'
import { getAmountListData } from '@/services/weixin/home/home'

interface IAnalysisState {
  amountList: any[]
  goodsCategoryCount: any[]
  goodsCategorySale: any[]
  goodsCategoryFavor: any[]
  goodsAddressSale: any[]
}

const useAnalysisStore = defineStore('analysis', {
  state: (): IAnalysisState => ({
    amountList: [],
    goodsCategoryCount: [],
    goodsCategorySale: [],
    goodsCategoryFavor: [],
    goodsAddressSale: [] // 城市销量
  }),
  actions: {
    async fetchAnalysisDataAction() {
      // const amountResult = await getAmountListData()
      // this.amountList = amountResult.data
      this.amountList = [
        {
          amount: 'sale',
          title: '商品总销量',
          tips: '所有商品的总销量',
          subtitle: '商品总销量',
          count: 509989,
          number: 509989
        },
        {
          amount: 'favor',
          title: '商品总收藏',
          tips: '所有商品的总收藏',
          subtitle: '商品总收藏',
          count: 87226,
          number: 87226
        },
        {
          amount: 'inventory',
          title: '商品总库存',
          tips: '所有商品的总库存',
          subtitle: '商品总库存',
          count: 100000,
          number: 100000
        },
        {
          amount: 'saleroom',
          title: '商品总销售额',
          tips: '所有商品的总销售额',
          subtitle: '商品总销售额',
          count: 43118530,
          number: 43118530
        }
      ]

      // const goodsCategoryCountResult = await getAmountListData()
      // this.goodsCategoryCount = goodsCategoryCountResult.data
      this.goodsCategoryCount = [
        {
          goodsCount: 49741,
          id: 2,
          name: '上衣'
        },
        {
          goodsCount: 17492,
          id: 3,
          name: '裤子'
        },
        {
          goodsCount: 56738,
          id: 4,
          name: '裙'
        },
        {
          goodsCount: 35679,
          id: 5,
          name: '鞋子'
        },
        {
          goodsCount: 23449,
          id: 6,
          name: '包'
        },
        {
          goodsCount: 99865,
          id: 7,
          name: '配饰'
        }
      ]
      // const goodsCategorySaleResult = await getAmountListData()
      // this.goodsCategorySale = goodsCategorySaleResult.data
      ;(this.goodsCategorySale = [
        {
          goodsCount: 49749,
          id: 2,
          name: '上衣'
        },
        {
          goodsCount: 17491,
          id: 3,
          name: '裤子'
        },
        {
          goodsCount: 56738,
          id: 4,
          name: '裙'
        },
        {
          goodsCount: 35679,
          id: 5,
          name: '鞋子'
        },
        {
          goodsCount: 23449,
          id: 6,
          name: '包'
        },
        {
          goodsCount: 19865,
          id: 7,
          name: '配饰'
        }
      ]),
        (this.goodsCategoryFavor = [
          {
            goodsCount: 49749,
            id: 2,
            name: '上衣'
          },
          {
            goodsCount: 17491,
            id: 3,
            name: '裤子'
          },
          {
            goodsCount: 56738,
            id: 4,
            name: '裙'
          },
          {
            goodsCount: 35679,
            id: 5,
            name: '鞋子'
          },
          {
            goodsCount: 23449,
            id: 6,
            name: '包'
          },
          {
            goodsCount: 19865,
            id: 7,
            name: '配饰'
          }
        ]),
        (this.goodsAddressSale = [
          { address: '上海', count: 62239 },
          { address: '北京', count: 25688 },
          { address: '广州', count: 62239 },
          { address: '深圳', count: 32239 },
          { address: '杭州', count: 45687 },
          { address: '成都', count: 55686 },
          { address: '重庆', count: 12567 },
          { address: '西安', count: 75685 },
          { address: '南京', count: 684 },
          { address: '苏州', count: 95683 },
          { address: '厦门', count: 5645 }
        ])
    }
  }
})

export default useAnalysisStore
