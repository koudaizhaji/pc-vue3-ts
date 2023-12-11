<template>
  <div class="lili-form">
    <!-- 搜索表头部 -->
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <el-col v-for="item in formItems" :key="item.label" v-bind="colLayout">
          <el-form-item
            v-if="!item.isHidden"
            :label="item.label"
            :rules="item.rules"
            :style="itemStyle"
          >
            <!-- 如果是输入框或密码 -->
            <!-- <template v-if="item.type === 'input' || item.type === 'password'">
              <el-input
                :placeholder="item.placeholder"
                v-bind="item.otherOptions"
                :show-password="item.type === 'password'"
                :model-value="modelValue[`${item.field}`]"
                @update:modelValue="handleValueChange($event, item.field)"
              />
            </template> -->
            <template v-if="item.type === 'input' || item.type === 'password'">
              <el-input
                :placeholder="item.placeholder"
                v-bind="item.otherOptions"
                :show-password="item.type === 'password'"
                v-model="formData[`${item.field}`]"
              />
            </template>
            <!-- 如果是选择器 -->
            <template v-else-if="item.type === 'select'">
              <el-select
                :placeholder="item.placeholder"
                v-bind="item.otherOptions"
                v-model="formData[`${item.field}`]"
              >
                <el-option
                  v-for="option in item.options"
                  :key="option.value"
                  :label="option.label"
                  :value="option.value"
                ></el-option>
              </el-select>
            </template>
            <!-- 如果是时间 -->
            <template v-else-if="item.type === 'datepicker'">
              <el-date-picker v-bind="item.otherOptions" v-model="formData[`${item.field}`]" />
            </template>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType, defineProps, defineEmits, ref, watch } from 'vue'
import { LILIFormItem } from '../types'

const props = defineProps({
  /** 在这里写，就表明这个组件是可以通过外界参数信息进行控制的
   * formItems这里的数组类型，是一个对象数组并且是确定的，例对象中有label、prop、value
   * 如果是数组或对象，这里的默认值一定是一个箭头函数，否则会报错
   */
  // modalValue: {
  //   type: Object as PropType<Record<string, any>>,
  //   required: true
  // },
  formItems: {
    type: Array as PropType<LILIFormItem[]>,
    default: () => []
  },
  labelWidth: {
    type: String,
    default: '100px'
  },
  itemStyle: {
    type: Object,
    default: () => ({ padding: '5px 30px' })
  },

  colLayout: {
    type: Object,
    default: () => ({
      xs: 24,
      sm: 24,
      md: 12,
      lg: 8,
      xl: 6
    })
  }
})

// const emit = defineEmits(["update:modalValue"])
// 第二种写法，自定义v-model语法糖
// const handleValueChange = (value: any, field: string) => {
//   emit("update:modalValue", { ...props.modalValue, [field]: value })
// }
/** 将props.modelValue里的内容全部取出放到formData里
 * 如果直接赋值，还是违反单向数据流的原则，所以要用ref，并结构赋值
 * 这里对应上面输入表单的v-model=formData[]写法
 */
const formData = ref({ ...props.formItems }) // 在通过父组件浅拷贝
// watch(
//   formData,
//   (newVal) => {
//     console.log("formData的newVal", newVal)
//     emit("update:modalValue", newVal) // 想父组件派发更新
//   },
//   { deep: true }
// )
</script>

<style lang="less">
.lili-form {
  padding-top: 22px;
}
</style>
