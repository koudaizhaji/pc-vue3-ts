<template>
  <div class="menu">
    <pageContent
      :content-config="contentConfig"
      ref="contentRef"
      @new-click="handleNewDataClick"
      @edit-click="handleEditDataClick"
    >
      <template #status="scope">
        <el-tag :type="scope.row.status == '1' ? 'success' : 'danger'">{{
          scope.row.status == '1' ? '启用' : '禁用'
        }}</el-tag>
      </template>
    </pageContent>

    <pageModal :modal-config="modalConfig" ref="modalRef"></pageModal>
  </div>
</template>

<script lang="ts" setup name="menu">
import pageContent from '@/components/public/page-content/page-content.vue'
import contentConfig from './config/content.config'

import pageModal from '@/components/public/page-modal/page-modal.vue'
import modalConfig from './config/modal.config'

import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'

const { contentRef } = usePageContent()
const { modalRef, handleNewDataClick, handleEditDataClick } = usePageModal()
// 新建按钮
</script>

<style scoped></style>
