<template>
  <div class="count-card">
    <div class="header">
      <span>{{ title }}</span>
      <el-tooltip :content="tips" placement="top" effect="light">
        <el-icon><Warning /></el-icon>
      </el-tooltip>
    </div>
    <div class="content">
      <span ref="count1Ref">{{ number1 }}</span>
    </div>
    <div class="footer">
      <span>{{ subtitle }}</span>
      <span ref="count2Ref">{{ number2 }}</span>
    </div>
  </div>
</template>

<script setup lang="ts" name="count">
import { onMounted, ref } from 'vue'
import { CountUp } from 'countup.js'

interface IProps {
  amount?: string
  title: string
  subtitle: string
  tips: string
  number1: number
  number2: number
}

const props = defineProps<IProps>()

const count1Ref = ref<HTMLElement>()
const count2Ref = ref<HTMLElement>()

const options = {
  decimalPlaces: 2,
  prefix: props.amount === 'saleroom' ? '¥' : ' '
}
onMounted(() => {
  const countup1 = new CountUp(count1Ref.value!, props.number1, options)
  const countup2 = new CountUp(count2Ref.value!, props.number2, options)
  countup1.start()
  countup2.start()
})
</script>

<style scoped lang="less">
.count-card {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  height: 130px;
  background: white;
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
    margin-left: 0px;
    font-size: 26px;
    color: rgba(0, 0, 0, 0.85);
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
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
