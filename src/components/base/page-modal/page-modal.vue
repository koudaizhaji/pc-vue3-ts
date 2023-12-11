<template>
  <div class="modal">
    <el-dialog
      v-model="dialogVisible"
      :title="isNewRef ? modalConfig.newtitle : modalConfig.edittitle"
      width="30%"
      center
    >
      <div class="form">
        <el-form :model="formData" style="max-width: 460px" label-width="100px">
          <template v-for="item in modalConfig.formItems" :key="item.prop">
            <el-form-item :label="item.label" :prop="item.field">
              <template v-if="item.type === 'input'">
                <el-input v-model="formData[item.field]" :placeholder="item.placeholder"></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select v-model="formData[item.field]" :placeholder="item.placeholder">
                  <template v-for="option in item.options" :key="option.value">
                    <el-option :label="option.label" :value="option.value"></el-option>
                  </template>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-model="formData[item.field]"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                />
              </template>
              <template v-else-if="item.type === 'custom'">
                <!-- 插入一个具名插槽，方便自定义内容,本身该绑定数据 -->
                <slot :name="item.slotName"></slot>
              </template>
            </el-form-item>
          </template>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleCancel">取消</el-button>
          <el-button type="primary" @click="handleConfirm"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineExpose, reactive, defineProps } from 'vue'
import { useStore } from 'vuex'
import { areAllPropertiesEmpty } from '@/utils/data.format'
import { ElMessage } from 'element-plus'

// 定义props接收配置参数
interface IModalProps {
  modalConfig: {
    newtitle: string
    edittitle?: string
    pageName: string
    formItems: any[]
  }
  otherInfo?: any
}
// 定义props
const props = defineProps<IModalProps>()

const store = useStore()
// 1.定义内部的属性
const dialogVisible = ref(false)
// 遍历生成formData
const initialData: any = {} // 初始化数据
for (const item of props.modalConfig.formItems) {
  if (item.field) {
    initialData[item.field] = ''
  }
}

const formData = reactive<any>(initialData)
const isNewRef = ref(true) // 是否是新建
const editData = ref<any>() // 编辑的数据

// 添加信息
const addUserPageData = (queryInfo: any = {}) => {
  console.log('添加信息', queryInfo)
  if (areAllPropertiesEmpty(queryInfo)) {
    return ElMessage.warning('请填写信息')
  }
  store.dispatch('system/createPageDataAction', {
    pageName: props.modalConfig.pageName,
    pageData: queryInfo
  })
}
// 更新信息
const updateUserPageData = (id: number, queryInfo: any = {}) => {
  console.log('更新信息', queryInfo)
  queryInfo.id = store.dispatch('system/updatePageDataAction', {
    id: id,
    pageName: props.modalConfig.pageName,
    pageData: queryInfo
  })
}

// 弹窗出来
const setModalVisible = async (isNew = true, itemData?: any) => {
  if (!isNew && itemData) {
    // 编辑
    for (const key in formData) {
      formData[key] = itemData[key]
    }
    isNewRef.value = false
    editData.value = itemData
  } else {
    // 新增
    for (const key in formData) {
      // 如果有初始值，就用初始值，没有就用空字符串
      const item = props.modalConfig.formItems.find((item) => item.prop === key)
      formData[key] = item ? item.initialValue : ''
    }
    isNewRef.value = true
  }
  dialogVisible.value = true
}
// 弹窗确定和取消
const handleConfirm = async () => {
  // ElMessage({
  //   showClose: true,
  //   message: "确定添加！",
  //   type: "warning"
  // })
  let infoData = formData
  if (props.otherInfo) {
    infoData = { ...infoData, ...props.otherInfo }
  }
  if (!isNewRef.value && editData.value) {
    // 编辑
    // console.log("编辑")
    updateUserPageData(editData.value.id, infoData) // 更新数据
  } else {
    addUserPageData(infoData) // 添加数据
  }
  dialogVisible.value = false
}

const handleCancel = () => {
  console.log('取消')
  dialogVisible.value = false
}

// const roleList = computed(() =>
//   store.getters[`system/pageListData`](modalConfig.otherName[0])
// )
// const groupList = computed(() =>
//   store.getters[`system/pageListData`](modalConfig.otherName[1])
// )

defineExpose({
  setModalVisible
})
</script>

<style scoped lang="less">
.form {
  padding: 0 20px 0 0;
}
</style>
