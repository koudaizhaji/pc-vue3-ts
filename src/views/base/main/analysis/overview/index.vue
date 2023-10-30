<script setup lang="ts">
import { ElCard } from 'element-plus'
import UserInfo from './components/UserInfo.vue'
import Operation from './components/Operation.vue'
import FundsTimeLine from './components/FundsTimeLine.vue'
</script>

<template>
  <div class="analysis-overview grid grid-cols-4 grid-gap-16px">
    <UserInfo /><!-- 用户信息，4格 -->
    <FundsTimeLine class="h-330px" /><!-- 收入曲线，2格 -->
    <ElCard class="h-330px"></ElCard>
    <Operation class="h-330px" /><!-- 资金信息，1格 -->
    <ElCard></ElCard>
    <ElCard></ElCard>
    <ElCard style="grid-column: span 2"></ElCard>
  </div>
</template>
