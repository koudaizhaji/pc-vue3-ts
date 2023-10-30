<script setup lang="ts">
import { ElCard } from 'element-plus'
import UserInfo from './components/UserInfo.vue'
</script>

<template>
  <div class="analysis-overview grid grid-cols-4 grid-gap-16px">
    <UserInfo />
    <ElCard style="grid-column: span 2"></ElCard>
    <ElCard style="grid-column: span 2"></ElCard>
    <ElCard></ElCard>
    <ElCard></ElCard>
    <ElCard></ElCard>
    <ElCard></ElCard>
  </div>
</template>
