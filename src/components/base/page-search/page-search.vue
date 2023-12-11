<template>
  <div class="search" v-if="isQuery">
    <!-- 1.1.表单输入 -->
    <el-form
      :model="searchForm"
      ref="formRef"
      size="large"
      label-position="right"
      label-width="80px"
    >
      <el-row :gutter="20">
        <template v-for="item in searchConfig.formItems" :key="item.field">
          <el-col :span="8">
            <el-form-item :label="item.label" :prop="item.field">
              <template v-if="item.type === 'input'">
                <el-input
                  v-model="searchForm[item.field]"
                  :placeholder="item.placeholder"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select v-model="searchForm[item.field]" :placeholder="item.placeholder">
                  <template v-for="option in item.options" :key="option.value">
                    <el-option :label="option.label" :value="option.value"></el-option>
                  </template>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-model="searchForm[item.field]"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <!-- 1.2.搜索按钮  -->
    <div class="btns">
      <el-button size="large" icon="Refresh" @click="handleResetClick">重置</el-button>
      <el-button size="large" icon="Search" type="primary" @click="handleQueryClick">
        查询
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts" name="page-search">
import type { ElForm } from 'element-plus'
import { reactive, ref } from 'vue'
import usePermissions from '@/hooks/usePermissions'
// 自定义事件和接收的属性
interface IProps {
  searchConfig: {
    pageName: string
    labelWidth?: string
    itemStyle?: string
    formItems: any[]
  }
}
const emit = defineEmits(['queryClick', 'resetClick'])
const props = defineProps<IProps>()

const isQuery = usePermissions(`${props.searchConfig.pageName}:query`)
// const isQuery = true
// 1.定义form的数据
const initialForm: any = {}
for (const item of props.searchConfig.formItems) {
  initialForm[item.field] = item.initialValue ?? ''
}
const searchForm = reactive(initialForm)
console.log('searchForm11111111', props.searchConfig.formItems)
// 2.监听按钮的点击
const formRef = ref<InstanceType<typeof ElForm>>()
// 重置操作
function handleResetClick() {
  formRef.value?.resetFields()
  console.log('点了重置')
  emit('resetClick')
}
function handleQueryClick() {
  console.log('查询的参数', searchForm)
  emit('queryClick', searchForm)
}
</script>

<style scoped lang="less">
.search {
  padding: 35px 15px 20px;
  border-radius: 5px;

  .el-form-item {
    padding: 20px 20px;
    margin-bottom: 0;
  }
}

.btns {
  text-align: right;
  padding: 0 50px 0 0;
}
</style>
