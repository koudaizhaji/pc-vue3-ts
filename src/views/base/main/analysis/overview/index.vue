<script setup lang="ts">
import { ElCard } from 'element-plus'
import UserInfo from './components/user-info.vue'
import Operation from './components/operation.vue'
import FundsTimeLine from './components/funds-time-line.vue'
import FundingSourceClassification from './components/funding-source-classification.vue'
</script>

<template>
  <div class="analysis-overview grid grid-cols-4 grid-gap-16px">
    <UserInfo style="grid-column: span 4" /><!-- 用户信息，4格 -->
    <FundsTimeLine class="h-330px" style="grid-column: span 2" /><!-- 收入曲线，2格 -->
    <FundingSourceClassification class="h-330px" />
    <Operation class="h-330px" /><!-- 资金信息，1格 -->
    <ElCard></ElCard>
    <ElCard></ElCard>
    <ElCard style="grid-column: span 2"></ElCard>
  </div>
</template>
