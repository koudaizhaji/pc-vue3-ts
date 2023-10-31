<!-- 该部分未使用 unocss 请注意 -->
<script setup lang="ts">
import Left from './left.vue'
import Right from './right.vue'
</script>

<template>
  <div class="header">
    <Left />
    <Right />
  </div>
</template>
<style scoped lang="less">
.header {
  width: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 50px;
  border: 0 solid rgba(217, 217, 217, 0.7);
  border-bottom-width: 1px;
  box-sizing: border-box;
}
</style>
