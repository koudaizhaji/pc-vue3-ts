<!-- 当前内容被放到了 '../views/base/main/analysis/dashboard/index.vue' -->
<template>
  <div class="welcome">
    <div class="welcome-left">
      <div class="left-top">
        <div class="title before">访问量</div>
        <div class="visits">
          <div class="visits-item" v-for="(item, index) in arr" :key="index">
            <h4>{{ item.name }}</h4>
            <div class="circle">
              <img :src="item.url" alt="" />
              <span>{{ item.total }}</span>
            </div>
            <p>移动端：{{ item.mobile }}人</p>
            <p>PC端：{{ item.pc }}人</p>
          </div>
        </div>
      </div>
      <div class="left-bottom">
        <div class="bottom-left">
          <div class="ranking">
            <div>
              <p class="before">装饰分类排名</p>
              <p>更多>></p>
            </div>
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="date" label="排名" width="100" />
              <el-table-column prop="name" label="分类" width="100" />
              <el-table-column prop="address" label="浏览量" />
              <el-table-column prop="amend" label="编辑" />
            </el-table>
          </div>
        </div>
        <div class="bottom-right">
          <p class="before">运营状况</p>
          <p class="browse">浏览人数</p>
          <div ref="chart" class="echartbox"></div>
        </div>
      </div>
    </div>
    <div class="welcome-right">
      <div class="right-top">
        <div class="shortcut">
          <div class="shortcut-title">
            <p class="before">快捷入口</p>
            <p>更多>></p>
          </div>
          <div class="shortcut-box">
            <div class="shortcut-item" v-for="(item, index) in arr2" :key="index">
              <img src="@/assets/imgs/welcome/shortcut.png" alt="" />
              <div class="shortcut-text">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-bottom">
        <div class="notify">
          <div class="task-left">
            <p class="text">通知提醒</p>
            <p class="number">16</p>
          </div>
          <div class="task-right">
            <p class="text"><span>往期提醒</span><span>647</span></p>
            <p><span>已看提醒</span><span>647</span></p>
          </div>
        </div>
        <div class="backlog">
          <div class="task-left">
            <p class="text">待办事项</p>
            <p class="number">16</p>
          </div>
          <div class="task-right">
            <p><span>往期提醒</span><span>647</span></p>
            <p><span>已看提醒</span><span>647</span></p>
          </div>
        </div>
        <div class="rule">
          <div class="task-left">
            <p class="text">法律法规</p>
            <p class="number">16</p>
          </div>
          <div class="task-right">
            <p><span>往期提醒</span><span>647</span></p>
            <p><span>已看提醒</span><span>647</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
import todayImage from '@s-assets/imgs/welcome/today.png'
import yesterdayImage from '@s-assets/imgs/welcome/yesterday.png'
import weekImage from '@s-assets/imgs/welcome/week.png'
import mouthImage from '@s-assets/imgs/welcome/mouth.png'
const arr = [
  { name: '今日访问量', total: '189', mobile: '89', pc: '100', url: todayImage },
  { name: '昨日访问量', total: '456', mobile: '256', pc: '200', url: yesterdayImage },
  { name: '本周访问量', total: '4533', mobile: '2533', pc: '2000', url: weekImage },
  { name: '本月访问量', total: '7958', mobile: '4958', pc: '3000', url: mouthImage }
]
// console.log(arr[0].url,'url');

const arr2 = [
  { name: '添加内容' },
  { name: '添加图片' },
  { name: '添加广告' },
  { name: '添加资讯' }
]
const tableData = [
  {
    date: 'TOP.1',
    name: '办公',
    address: '6888',
    amend: '编辑'
  },
  {
    date: 'TOP.2',
    name: '商场',
    address: '6888',
    amend: '编辑'
  },
  {
    date: 'TOP.3',
    name: '酒店',
    address: '6888',
    amend: '编辑'
  },
  {
    date: 'TOP.4',
    name: '美容',
    address: '6888',
    amend: '编辑'
  },
  {
    date: 'TOP.5',
    name: '餐饮',
    address: '6888',
    amend: '编辑'
  },
  {
    date: 'TOP.6',
    name: '培训',
    address: '6888',
    amend: '编辑'
  }
]
onMounted(() => {
  init()
})
const chart = ref()
//创建echarst图表
const init = () => {
  const myChart = echarts.init(chart.value)
  var option = {
    grid: {
      bottom: 20,
      top: 20
    },
    xAxis: {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月'],
      splitLine: {
        show: false // 取消 x 轴的分段线
      }
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330],
        type: 'line',
        smooth: true
      }
    ]
  }
  myChart.setOption(option)
}
</script>
<style lang="less" scoped>
.before::before {
  content: '';
  display: inline-block;
  width: 6px;
  height: 19px;
  margin-right: 10px;
  background-color: #0a88e4;
  vertical-align: middle;
}
.welcome {
  display: flex;
  .welcome-left {
    width: 880px;
    height: 200px;
    .left-top {
      background-color: #fff;
      padding-bottom: 40px;
      .title {
        font-size: 18px;
        font-weight: 500;
      }
      .visits {
        display: flex;
        .visits-item {
          width: 100px;
          text-align: center;
          padding: 0 60px;
          background-color: #fff;
          .circle {
            width: 100px;
            height: 100px;
            line-height: 100px;
            border-radius: 50%;
            text-align: center;
            color: #fff;
            font-size: 18px;
            img {
              width: 100%;
            }
            span {
              position: relative;
              top: -105px;
            }
          }
          p {
            font-size: 12px;
            margin-top: 5px;
          }
        }
      }
    }
    .left-bottom {
      margin-top: 30px;
      display: flex;
      .bottom-left {
        background-color: #ffffff;
        padding: 10px;
        .ranking {
          width: 400px;
          div {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
          }
        }
      }
      .bottom-right {
        margin-left: 30px;
        padding: 10px;
        background-color: #ffffff;
        .browse::before {
          margin: 10px;
          content: '';
          width: 10px;
          height: 10px;
          display: inline-block;
          border-radius: 50%;
          background-color: #5470c6;
          vertical-align: middle;
        }
        .echartbox {
          width: 410px;
          height: 280px;
        }
      }
    }
  }
  .welcome-right {
    margin-left: 30px;
    width: 400px;
    .right-top {
      background-color: #ffffff;
      .shortcut {
        .shortcut-title {
          display: flex;
          justify-content: space-between;
        }
        .shortcut-box {
          display: flex;
          flex-wrap: wrap;
          .shortcut-item {
            margin: 15px;
            width: 140px;
            height: 90px;
            img {
              width: 100%;
            }
            .shortcut-text {
              margin-top: -55px;
              text-align: center;
            }
          }
        }
      }
    }
    .right-bottom {
      margin-top: 30px;
      .notify > .task-left > .text::before {
        content: '';
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin-right: 9px;
        background-color: #65c5f1;
      }
      .backlog > .task-left > .text::before {
        content: '';
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin-right: 9px;
        background-color: #ee1313;
      }
      .rule > .task-left > .text::before {
        content: '';
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin-right: 9px;
      }
      .rule,
      .backlog,
      .notify {
        display: flex;
        margin: 20px;
        height: 100px;
        background-color: #fff;
        .task-left {
          margin-top: 10px;
          .number {
            margin: 14px 0 0 23px;
            font-size: 30px;
          }
        }
        .task-right {
          padding: 20px 40px;
          p {
            width: 150px;
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
  }
}
</style>
