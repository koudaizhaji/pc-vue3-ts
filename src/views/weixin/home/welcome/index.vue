<template>
  <div class="dashboard">
    <!-- 1.顶部数字的展示 -->
    <el-row :gutter="10">
      <template v-for="item in amountList" :key="item.amount">
        <el-col :span="6" :xs="24" :sm="12" :md="8" :lg="6">
          <countCard v-bind="item" />
        </el-col>
      </template>
    </el-row>
    <!-- 2. 中间部分的图表 -->
    <el-row :gutter="10">
      <el-col :span="7">
        <chart-card :header="titleObj.title1">
          <pie-echart :pie-data="showGoodsCategoryCount" />
        </chart-card>
      </el-col>
      <el-col :span="10">
        <chart-card :header="titleObj.title5">
          <map-echart :map-data="showGoodsAddressSale" />
        </chart-card>
      </el-col>
      <el-col :span="7">
        <chart-card :header="titleObj.title2">
          <rose-echart :rose-data="showGoodsCategoryCount" />
        </chart-card>
      </el-col>
    </el-row>
    <!-- 3. 底部部分的图表 -->
    <el-row :gutter="10">
      <el-col :span="12">
        <chart-card :header="titleObj.title3">
          <!-- <line-echart :labels="showGoodsCategorySale.labels"
            :values="showGoodsCategorySale.values"/> -->
          <line-echart v-bind="showGoodsCategorySale" />
        </chart-card>
      </el-col>
      <el-col :span="12">
        <chart-card :header="titleObj.title4">
          <bar-echart v-bind="showGoodsCategoryFavor" />
        </chart-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import countCard from './count-card/count-card.vue'
import useAnalysisStore from '@/stores/weixin/home/home'

// import countCard from "@/components/public/count-card/count-card.vue"
import chartCard from '@/components/public/chart-card/chart-card.vue'

import {
  PieEchart,
  RoseEchart,
  LineEchart,
  BarEchart,
  MapEchart
} from '@/components/public/page-echarts'

// 1.发起数据请求
const analysisStore = useAnalysisStore()
analysisStore.fetchAnalysisDataAction()

// echarts标题
const titleObj = {
  title1: '商品销售统计',
  title2: '商品销售额统计',
  title3: '商品收藏统计折线图',
  title4: '商品收藏统计条形图',
  title5: '商品销售地区统计'
}

// 2.拿到store里的数据
const { amountList, goodsCategoryCount, goodsCategorySale, goodsCategoryFavor, goodsAddressSale } =
  storeToRefs(analysisStore)

// 3. 获取数据
const showGoodsCategoryCount = computed(() => {
  console.log('拿到的数据', goodsCategoryCount.value)
  return goodsCategoryCount.value.map((item: any) => {
    return {
      name: item.name,
      value: item.goodsCount
    }
  })
})

const showGoodsCategorySale = computed(() => {
  // const labels = [] 一维数字组成的数组
  // const values = [] 一维数字组成的数组
  const labels = goodsCategorySale.value.map((item) => item.name)
  const values = goodsCategorySale.value.map((item) => item.goodsCount)
  // console.log('折线图需求',labels,values)
  return { labels, values }
})

const showGoodsCategoryFavor = computed(() => {
  // const labels = [] 一维数字组成的数组
  // const values = [] 一维数字组成的数组
  const labels = goodsCategoryFavor.value.map((item) => item.name)
  const values = goodsCategoryFavor.value.map((item) => item.goodsCount)
  return { labels, values }
})
// 获取商品地图数据
const showGoodsAddressSale = computed(() => {
  return goodsAddressSale.value.map((item: any) => {
    return {
      name: item.address,
      value: item.count
    }
  })
})
</script>

<style lang="less" scoped>
.dashboard {
  color: red;
}

.el-row {
  margin-bottom: 10px;
}
</style>
