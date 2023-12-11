<template>
  <div class="role">
    <pageSearch
      :search-config="searchConfig"
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
    />
    <pageContent
      :content-config="contentConfig"
      ref="contentRef"
      @new-click="handleNewDataClick"
      @edit-click="handleEditDataClick"
    >
    </pageContent>
    <!-- 弹窗 -->
    <pageModal :modal-config="modalConfig" :other-info="otherInfo" ref="modalRef">
      <template #allmenus>
        <el-tree
          :data="entireMenus"
          ref="treeRef"
          show-checkbox
          node-key="id"
          highlight-current
          :props="{ children: 'children', label: 'title' }"
          @check="handleElTreeCheck"
        >
        </el-tree>
      </template>
    </pageModal>
  </div>
</template>

<script lang="ts" setup name="role">
import pageSearch from '@/components/public/page-search/page-search.vue'
import searchConfig from './config/search.config'

import pageContent from '@/components/public/page-content/page-content.vue'
import contentConfig from './config/content.config'

import pageModal from '@/components/public/page-modal/page-modal.vue'
import modalConfig from './config/modal.config'

import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'

import { mapMenuListToIds } from '@/utils/map-menus'

import { ref, nextTick } from 'vue'
import { ElTree } from 'element-plus'
import useMainStore from '@/stores/base/main'
import { storeToRefs } from 'pinia'

// 获取pinia里完整菜单列表
const mainStore = useMainStore()
const { entireMenus } = storeToRefs(mainStore)
// console.log('树形结果',entireMenus)
// 参考的树形数据
// interface Tree {
//   id: number
//   title: string
//   children?: Tree[]
// }
// const entireMenus:Tree[] = [
//   {
//     id: 1,
//     title: 'level 展示的数据',
//     children:[
//       {
//         id:3,
//         title: 'level 3展示的数据'
//       },
//       {
//         id:4,
//         title: 'level 4展示的数据'
//       }
//     ]
//   },
//   {
//     id: 2,
//     title: 'level2 要展示的数据',
//     children:[
//       {
//         id:5,
//         title: 'level 5展示的数据'
//       },
//       {
//         id:6,
//         title: 'level 6展示的数据'
//       }
//     ]
//   },
//   {
//     id: 7,
//     title: 'level7 要展示的数据',
//     children:[
//     ]
//   }
// ]

// 弹窗所需操作
const { contentRef, handleQueryClick, handleResetClick } = usePageContent()
const { modalRef, handleNewDataClick, handleEditDataClick } = usePageModal(
  newCallback,
  editCanllback
)

const otherInfo = ref({})
// 树形组件
const treeRef = ref<InstanceType<typeof ElTree>>()

// 树形选择操作
const handleElTreeCheck = (data1: any, data2: any) => {
  console.log('handleElTreeCheck', data1, data2)
  // 拿到选中的id
  const muluList = [...data2.checkedKeys, ...data2.halfCheckedKeys]
  // console.log("这里就是拿到的菜单id数组", muluList)
  otherInfo.value = {
    muluList
  }
}

// 编辑操作的回调函数
function editCanllback(itemData: any) {
  nextTick(() => {
    // console.log("编辑角色拿到的参数", itemData)
    // 这里拿到的是对应用户的全部菜单，然后转为ids数组，取决于接口返回的信息
    const menuIds = mapMenuListToIds(itemData.menuList)
    // treeRef.value?.setCheckedKeys([1, 2, 3, 4])
    console.log('拿到的菜单id数组111', menuIds)
    treeRef.value?.setCheckedKeys(menuIds)
    // treeRef.value?.setCheckedKeys(itemData.menuList)
  })
}
// 新建的操作
function newCallback(itemData: any) {
  nextTick(() => {
    treeRef.value?.setCheckedKeys([])
  })
}
</script>

<style scoped></style>
