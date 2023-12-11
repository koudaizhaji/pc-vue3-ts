import { ref } from 'vue'
import type PageContent from '@/components/page-content/page-content.vue'

function usePageContent() {
  const contentRef = ref<InstanceType<typeof PageContent>>()
  function handleQueryClick(searchInfo: any) {
    console.log('拿到的搜索111', searchInfo)
    // 调用content页面里的fetchPageListData方法
    contentRef.value?.fetchPageListData(searchInfo)
  }
  function handleResetClick() {
    contentRef.value?.handleResetClick()
  }

  return {
    contentRef,
    handleQueryClick,
    handleResetClick
  }
}

export default usePageContent
