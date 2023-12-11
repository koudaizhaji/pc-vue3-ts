import { ref } from 'vue'
import type PageModal from '@/components/public/page-modal/page-modal.vue'

type callbackType = (item?: any) => void

function usePageModal(newCallback?: callbackType, editCallback?: callbackType) {
  const modalRef = ref<InstanceType<typeof PageModal>>()
  function handleNewDataClick() {
    // console.log('点了新建handleNewDataClick')
    modalRef.value?.setDialogVisible()
    if (newCallback) newCallback()
  }
  function handleEditDataClick(data: any) {
    // console.log('点击了编辑操作',data)
    modalRef.value?.setDialogVisible(false, data)
    if (editCallback) editCallback(data)
  }

  return {
    modalRef,
    handleNewDataClick,
    handleEditDataClick
  }
}

export default usePageModal
