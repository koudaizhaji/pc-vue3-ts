<script setup lang="ts">
import { ElCard } from 'element-plus'
import UserInfo from './components/user-info.vue'
import Operation from './components/operation.vue'
import FundsTimeLine from './components/funds-time-line.vue'
import FundingSourceClassification from './components/funding-source-classification.vue'
import ToDoList from './components/to-do-list.vue'
</script>

<template>
  <div class="analysis-overview grid grid-cols-4 grid-gap-16px">
    <UserInfo style="grid-column: span 4" /><!-- 用户信息，4格 -->
    <FundsTimeLine style="grid-column: span 2" /><!-- 收入统计，2格 -->
    <FundingSourceClassification /><!-- 收入来源分类 -->
    <Operation /><!-- 资金信息，1格 -->
    <ElCard></ElCard>
    <ElCard></ElCard>
    <ToDoList style="grid-column: span 2" />
  </div>
</template>
