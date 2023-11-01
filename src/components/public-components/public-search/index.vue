<script setup lang="ts">
import { ElButton, ElInput, ElTag } from 'element-plus'
import { Search, ArrowUpBold } from '@element-plus/icons-vue'
import { ref } from 'vue'

const show = ref<boolean>(false)
const setShow = () => {
  show.value = !show.value
}
</script>

<template>
  <div class="public-search">
    <div class="public-search flex flex-justify-between">
      <div><slot name="default"></slot></div>
      <div>
        <ElButton :icon="show ? ArrowUpBold : Search" @click="setShow" />
      </div>
    </div>
    <div v-show="show" class="h-40px">
      <ElInput class="mt-8px" size="default"></ElInput>
    </div>
  </div>
</template>
