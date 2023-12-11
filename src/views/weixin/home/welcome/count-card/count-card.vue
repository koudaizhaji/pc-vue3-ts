<template>
  <div class="count-card">
    <div class="header">
      <span class="title">{{ title }}</span>
      <el-tooltip :content="tips" placement="top" effect="dark">
        <el-icon><Warning /></el-icon>
      </el-tooltip>
    </div>
    <div class="content">
      <!-- <span v-if="amount == 'saleroom'">￥</span> -->
      <span ref="countRef" class="count">{{ count }}</span>
    </div>
    <div class="footer">
      <span>{{ subtitle }}</span>
      <!-- <span v-if="amount == 'saleroom'">￥</span> -->
      <span ref="numberRef">{{ number }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CountUp } from 'countup.js'
import { ref, onMounted } from 'vue'

interface IProps {
  amount?: string
  title?: string
  tips?: string
  count?: number
  number?: number
  countUnit?: string
  subtitle?: string
}
// 保留接口的属性类型约束，并使用默认值，使用如下写法
const props = withDefaults(defineProps<IProps>(), {
  title: '商品总销量',
  tips: '所有商品的总销量',
  count: 509989,
  number: 509989,
  countUnit: '件',
  subtitle: '商品总销量'
})

// 创建动画实例对象
const countRef = ref<HTMLElement>()
const numberRef = ref<HTMLElement>()
// 只要用到dom操作都可以写这里
// countup可选属性参数
const countOption = {
  prefix: props.amount === 'saleroom' ? '￥' : '',
  startVal: 1000
}
onMounted(() => {
  // 参数1：执行动画的元素，参数2数字增加的值：10000
  const countup1 = new CountUp(countRef.value, props.count, countOption)
  const countup2 = new CountUp(numberRef.value, props.number, countOption)
  countup1.start()
  countup2.start()
})
</script>

<style lang="less" scoped>
.count-card {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  height: 130px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .header {
    display: flex;
    height: 38px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    justify-content: space-between;
    align-items: flex-end;
  }

  .content {
    display: flex;
    flex: 1;
    align-items: center;
    margin-left: 0px;
    font-size: 26px;
    color: rgba(0, 0, 0, 0.85);
  }

  .footer {
    display: flex;
    height: 38px;
    line-height: 38px;
    font-size: 14px;
    letter-spacing: 1px;
    color: rgba(0, 0, 0, 0.85);
    border-top: 1px solid #f0f0f0;
  }
}
</style>
