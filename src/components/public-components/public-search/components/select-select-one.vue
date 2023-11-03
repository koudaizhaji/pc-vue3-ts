<script setup lang="ts">
import { ElInput, ElPopover, ElButton, ElRadio } from 'element-plus'
import type { PublicSearchItemProps, PublicSearchSelectOneProps } from '../index'
import { ref } from 'vue'
import { handleKeyDown, handleKeyDownEsc, type SearchItemEmits } from '../hooks'

const props = defineProps<{
  currentItem: PublicSearchItemProps
  currentConfig: PublicSearchSelectOneProps // 这个是搜索配置
}>()
const emits = defineEmits<SearchItemEmits>()

const selectValue = ref<number>(
  props.currentConfig.options.findIndex((item) => item.value === props.currentItem.value)
)
const setSelectValue = (index: number) => {
  selectValue.value = index
}

const submit = () => {
  const item = props.currentConfig.options[selectValue.value] as { value: any; label: string }
  emits('submit', item.value, item.label)
}
const cancel = () => emits('cancel')
const keydown = (e) => {
  handleKeyDown(e, cancel)
  handleKeyDownEsc(e, cancel)
}
</script>

<template>
  <div class="flex flex-justify-between">
    <div
      class="max-w-80px text-right truncate line-height-32px font-size-12px flex-basis-100px p-x-10px"
    >
      {{ props.currentItem.label }}
    </div>
    <ElPopover :visible="true" trigger="click" placement="bottom-start" width="300px">
      <template v-slot:reference>
        <ElInput
          size="default"
          :placeholder="`请选择${props.currentItem.label}`"
          @keydown="keydown"
        />
      </template>
      <template v-slot:default>
        <div class="max-h-200px" v-loading="props.currentConfig?.loading">
          <div
            v-for="(item, index) of currentConfig.options as PublicSearchSelectOneProps['options']"
            :key="index"
          >
            <ElRadio
              size="large"
              v-model="selectValue"
              :label="index"
              :disabled="item.disabled"
              @click="setSelectValue(index)"
            >
              <div class="max-w-248px truncate">{{ item.label }}</div>
            </ElRadio>
          </div>
          <div class="text-right m-t-8px p-t-8px border-t-1px border-t-solid border-#dcdfe6">
            <ElButton type="default" size="small" :disabled="selectValue < 0" @click="submit"
              >确定</ElButton
            >
            <ElButton style="margin-left: 4px" type="" size="small" @click="cancel">取消</ElButton>
          </div>
        </div>
      </template>
    </ElPopover>
  </div>
</template>
