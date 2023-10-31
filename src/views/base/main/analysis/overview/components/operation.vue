<script setup lang="ts">
import { ElCard } from 'element-plus'

const config = [
  { id: 0, title: '功能名称', route: '/main/analysis/dashboard', icon: 'ri-file-list-3-fill' },
  { id: 1, title: '功能名称', route: '/main/analysis/dashboard', icon: 'ri-cloud-fill' },
  { id: 2, title: '功能名称', route: '/main/analysis/dashboard', icon: 'ri-message-2-fill' },
  { id: 3, title: '功能名称', route: '/main/analysis/dashboard', icon: 'ri-money-cny-box-fill' }
]
</script>

<template>
  <ElCard class="analysis-overview-operation">
    <template v-slot:header>
      <div>
        <span>快捷操作</span>
      </div>
    </template>
    <template v-slot:default>
      <div class="grid grid-cols-2 grid-gap-16px">
        <div
          v-for="item of config"
          :key="item.id"
          class="flex flex-justify-center v-middle flex-items-center p-16px h-75px b-1px b-solid border-#409eff bg-#ecf5ff c-#409eff b-rd-4px font-size-20px font-700"
        >
          <i :class="item.icon + ' '" />
          {{ item.title }}
        </div>
      </div>
    </template>
  </ElCard>
</template>
