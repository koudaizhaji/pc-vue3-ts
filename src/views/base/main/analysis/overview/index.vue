<script setup lang="ts">
import UserInfo from './components/user-info.vue'
import Operation from './components/operation.vue'
import FundsTimeLine from './components/funds-time-line.vue'
import FundingSourceClassification from './components/funding-source-classification.vue'
import ToDoList from './components/to-do-list.vue'
import Message from './components/message.vue'
import MainTain from './components/main-tain.vue'
</script>

<template>
  <div class="analysis-overview grid grid-cols-4 grid-gap-16px">
    <UserInfo style="grid-column: span 4" /><!-- 用户信息，4格 -->
    <FundsTimeLine style="grid-column: span 2" /><!-- 收入统计，2格 -->
    <Message /><!-- 消息，1格 -->
    <Operation /><!-- 操作，1格 -->
    <MainTain /><!-- 支出分类，1格 -->
    <FundingSourceClassification /><!-- 收入来源分类，1格 -->
    <ToDoList style="grid-column: span 2" /><!-- 待完成事项，1格 -->
  </div>
</template>
