<template>
  <div class="page-card">
    <div class="header">
      <span class="title">{{ title }}</span>
      <slot name="headerRight"></slot>

      <!-- 定义具名插槽。这里方便自定义内容 -->
    </div>
    <div class="content">
      <!-- <span v-if="amount === 'saleroom'">￥</span> -->
      <!-- <span>￥</span> -->
      <span ref="countRef">{{ count }}</span>
    </div>
    <div class="footer">
      <span>{{ subtitle }}</span>
      <span ref="footerRef">{{ footerCount }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup name="page-card">
import { defineProps, withDefaults, ref, onMounted } from 'vue'
import { CountUp } from 'countup.js'

interface IProps {
  title?: string
  tips?: string
  count?: number
  subtitle?: string
  footerCount?: number
}

// 设置默认值
const props = withDefaults(defineProps<IProps>(), {
  title: '商品总销量',
  tips: '所有商品的总销量',
  count: 51234,
  subtitle: '总销量',
  footerCount: 147258
})
// 一处做动画的位置
const countRef = ref<HTMLElement>()
const footerRef = ref<HTMLElement>()

// 参数1,执行动画的元素，参数2，动画的值，递增到多大，参数3，动画的配置
onMounted(() => {
  const countUp1 = new CountUp(countRef.value!, props.count, {
    duration: 2, // 动画持续时间,多久执行完
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.'
    // startVal: 10 // 开始值
  })
  countUp1.start()
  const countUp2 = new CountUp(footerRef.value!, props.footerCount, {
    duration: 2, // 动画持续时间,多久执行完
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.'
    // startVal: 10 // 开始值
  })
  countUp2.start()
})
</script>

<style lang="less" scoped>
.page-card {
  width: 180px;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  height: 130px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .header {
    display: flex;
    justify-content: space-between;
    height: 38px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    align-items: flex-end;
  }

  .content {
    display: flex;
    margin-left: 0;
    font-size: 26px;
    color: rgba(0, 0, 0, 0.85);
    flex: 1;
    align-items: center;
    // flex-direction: column;
    // justify-content: center;
    // align-items: flex-start;
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
