<template>
  <div class="sidebars">测试内容</div>
</template>

<script setup lang="ts" name="page-search">
import type { ElForm } from 'element-plus'
import { reactive, ref } from 'vue'

interface IProps {
  searchConfig: {
    pageName: string
    formItems: any[]
  }
}
const props = defineProps<IProps>()
const emit = defineEmits(['queryClick', 'resetClick'])

// 1.创建表单的数据
const initialForm: any = {}
for (const item of props.searchConfig.formItems) {
  initialForm[item['prop']] = item['initialValue'] ?? ''
}
const searchForm = reactive(initialForm)

// 2.监听按钮的点击
const formRef = ref<InstanceType<typeof ElForm>>()
function handleResetClick() {
  formRef.value?.resetFields()
  emit('resetClick')
}
function handleQueryClick() {
  console.log('拿到的搜索信息', searchForm)
  emit('queryClick', searchForm)
}
</script>

<style scoped lang="less">
.search {
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;

  .el-form-item {
    padding: 15px 40px;
    margin-bottom: 0;
  }
}

.btns {
  text-align: right;
  padding: 0 50px 10px 0;
}
</style>
