<template>
  <div class="page">
    <div class="sidebar">
      <!-- Left Sidebar with Categories -->
      <!-- Add your left sidebar content and categories here -->
    </div>

    <div class="main-content">
      <!-- Top Search Bar -->
      <pageSearch
        :search-config="searchConfig"
        @query-click="handleQueryClick"
        @reset-click="handleResetClick"
      />

      <!-- Table and Content -->
      <div class="group">
        <pageContent
          :contentConfig="contentConfig"
          @new-click="handleNewDataClick"
          @edit-click="handleEditDataClick"
          ref="contentRef"
        >
          <!-- Custom Slot for Status -->
          <template #status="scope">
            <el-tag :type="scope.row[scope.prop] == 1 ? 'primary' : 'danger'">
              {{ scope.row[scope.prop] == 1 ? '启用' : '禁用' }}
            </el-tag>
          </template>
        </pageContent>
        <pageModal :modalConfig="modalConfig" ref="modalRef" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="group">
import pageSearch from '@/components/public/page-search/page-search.vue'
import searchConfig from './config/search.config'
import pageContent from '@/components/public/page-content/page-content.vue'
import contentConfig from './config/content.config'
import pageModal from '@/components/public/page-modal/page-modal.vue'
import modalConfig from './config/modal.config'
import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'

// 弹窗所需操作
const { contentRef, handleQueryClick, handleResetClick } = usePageContent()
const { modalRef, handleNewDataClick, handleEditDataClick } = usePageModal()
</script>

<style scoped>
.page {
  display: flex;
}

.sidebar {
  /* Add your styles for the left sidebar */
}

.main-content {
  flex: 1;
  padding: 20px;
}

.group {
  /* Your existing styles for the group */
}
</style>
