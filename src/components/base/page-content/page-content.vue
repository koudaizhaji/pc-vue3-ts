<template>
  <div class="content">
    <div class="header">
      <h3 class="title">{{ contentConfig?.title ?? '数据列表' }}</h3>
      <el-button v-if="isCreate" type="primary" @click="handleNewUserClick">{{
        contentConfig?.newBtnText ?? '新建数据'
      }}</el-button>
    </div>
    <div class="table">
      <el-table :data="pageList" style="width: 100%" v-bind="contentConfig.childrenTree">
        <template v-for="item in contentConfig.propList">
          <!-- 时间处理 -->
          <template v-if="item.type === 'timer'">
            <el-table-column align="center" :key="item.prop" v-bind="item">
              <template #default="scope">
                {{ formatUtcString(scope.row[item.prop]) }}
              </template>
            </el-table-column>
          </template>
          <!-- 操作处理 -->
          <template v-else-if="item.type === 'handler'">
            <el-table-column align="center" :key="item.prop" v-bind="item">
              <template #default="scope">
                <!-- <el-button
                  v-if="isUpdate"
                  type="primary"
                  size="small"
                  icon="Edit"
                  link
                  @click="handleEditClick(scope.row)"
                > -->
                <el-button
                  type="primary"
                  size="small"
                  icon="Edit"
                  link
                  @click="handleEditClick(scope.row)"
                  v-if="isUpdate"
                >
                  编辑
                </el-button>
                <el-button
                  type="danger"
                  size="small"
                  icon="Delete"
                  link
                  @click="handleDeleteClick(scope.row.id)"
                  v-if="isDelete"
                >
                  删除
                </el-button>
              </template>
            </el-table-column>
          </template>
          <!-- 普通处理 -->
          <template v-else-if="item.type === 'normal'">
            <el-table-column align="center" :key="item.prop" v-bind="item">
              <template #default="scope">
                <!-- 插入一个具名插槽，方便使用的vue可以自定义内容 -->
                <slot :name="item.slotName" v-bind="scope" :prop="item.prop"></slot>
              </template>
            </el-table-column>
          </template>
          <template v-else>
            <el-table-column align="center" :key="item.prop" v-bind="item"></el-table-column>
          </template>
        </template>
      </el-table>
    </div>
    <div class="footer">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30]"
        small="small"
        layout=" sizes, prev, pager, next, jumper,total"
        :total="userTotal"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script lang="ts" setup name="user">
import { ref, computed, defineExpose, defineEmits, defineProps } from 'vue'
import { useStore } from 'vuex'
import { formatUtcString } from '@/utils/data.format'
import usePermissions from '@/hooks/usePermissions'

const store = useStore()

// 1. 接收配置信息
interface IProps {
  contentConfig: {
    pageName: string
    title?: string
    showFooter?: boolean
    newBtnText?: string
    propList: any[]
    childrenTree?: any
  }
}
const props = defineProps<IProps>()
const emit = defineEmits(['newClick', 'editClick'])

// 获取是否有对应的增删改查的权限
const isCreate = usePermissions(`${props.contentConfig.pageName}:create`)
const isDelete = usePermissions(`${props.contentConfig.pageName}:delete`)
const isUpdate = usePermissions(`${props.contentConfig.pageName}:update`)
const isQuery = usePermissions(`${props.contentConfig.pageName}:query`)
// console.log("permissions", permissions)
// const isCreate = false
// const isDelete = false
// const isUpdate = false
// const isQuery = false

const pageInfo = ref({ currentPage: 1, pageSize: 10 })
// const isShowFooter = computed(() => props.contentConfig.showFooter ?? true)
// 2.发送网络请求,没有传，默认空的对象
// 监听getPageData被触发时【重新获取页面数据】时的变化，重置页码到1
const getPageData = (queryInfo: any = {}) => {
  // 如果没有查询权限，直接return
  if (!isQuery) return
  store.dispatch('system/getPageListAction', {
    pageName: props.contentConfig.pageName,
    queryInfo: {
      pageNum: pageInfo.value.currentPage,
      pageSize: pageInfo.value.pageSize,
      // 注：这里参数怎么使用具体看接口文档
      ...queryInfo
    }
  })
  // currentPage.value = 1
}
// 删除的网络请求
const handleDeleteData = (id: number) => {
  store.dispatch('system/deletePageDataAction', {
    pageName: props.contentConfig.pageName,
    id
  })
}

getPageData()

const pageList = computed(() => store.getters[`system/pageListData`](props.contentConfig.pageName))
const userTotal = computed(() =>
  store.getters[`system/pageListCount`](props.contentConfig.pageName)
)

// 3.页码相关逻辑
const currentPage = ref(1)
const pageSize = ref(10)
const handleSizeChange = (val: number) => {
  pageInfo.value.pageSize = val
  getPageData()
}
const handleCurrentChange = (val: number) => {
  pageInfo.value.currentPage = val
  getPageData()
}

// 4. 新建用户
const handleNewUserClick = () => {
  // console.log("新建用户")
  emit('newClick')
}

// 5. 点击删除和编辑
const handleDeleteClick = (id: number) => {
  // console.log("删除", id)
  handleDeleteData(id)
}
const handleEditClick = (row: any = {}) => {
  // console.log("编辑", row)
  emit('editClick', row)
}

// 暴露网络请求给父组件
defineExpose({
  getPageData
})
</script>

<style scoped lang="less">
.content {
  padding: 20px 0;
  background-color: #f0f2f5;

  .header {
    display: flex;
    height: 45px;
    padding: 5px 15px;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;

    .title {
      font-size: 20px;
      font-weight: 700;
    }

    .handler {
      align-items: center;
    }
  }

  .table {
    :deep(.el-table__cell) {
      padding: 10px 0;
    }
    /*设置显示隐藏部分内容，按50%显示*/
    :deep(.el-tooltip__popper) {
      font-size: 14px;
      max-width: 50%;
    }
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;
  }
}
</style>
