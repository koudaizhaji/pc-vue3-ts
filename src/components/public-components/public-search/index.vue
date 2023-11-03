<script setup lang="ts">
import { ElButton } from 'element-plus'
import { Search, ArrowUpBold, RefreshRight } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { transitionHooks } from './hooks'
import { type PublicSearchItemProps, type PublicSearchProps, PublicSearchTypeList } from './index'
import Tags from './components/tags.vue'
import SelectNothing from './components/select-nothing.vue'
import SelectInput from './components/select-input.vue'
import SelectSelectOne from './components/select-select-one.vue'
import SelectSelectMore from './components/select-select-more.vue'

const props = defineProps<PublicSearchProps>()
const emits = defineEmits<{
  (e: 'submit', searchForm: Record<string, any>): void
  (e: 'reset', searchForm: Record<string, string>): void
}>()

// 初始化，分为 未填写搜索项、已填写搜索项、当前填写搜索项
const unSetList = reactive<PublicSearchItemProps[]>(
  props.config.map((item) => ({
    key: item.key,
    value: '',
    type: item.type as PublicSearchTypeList,
    label: item.label
  }))
)
const setList = reactive<PublicSearchItemProps[]>([])
const currentItem = reactive<PublicSearchItemProps[]>([])
const currentConfig = reactive<any[]>([])

// 在未填写搜索项中选择备选项
const selectUnSetItemToCurrent = (item: PublicSearchItemProps, index: number) => {
  currentItem.push(...unSetList.splice(index, 1))
  currentConfig.splice(
    0,
    1,
    props.config.find((it) => it.key === item.key)
  )
}
// 取消当前填写搜索项
const cancelCurrentItem = () => {
  unSetList.push(...currentItem.splice(0, 1))
}
// 提交时将记录放在已填写搜索项中
const submitCurrentItem = (
  value: PublicSearchItemProps['value'],
  valueTitle: PublicSearchItemProps['valueTitle']
) => {
  currentItem[0].value = value
  currentItem[0].valueTitle = valueTitle
  setList.push(...currentItem.splice(0, 1))
}
// 移除已填写搜索内容
const removeSetList = (item: PublicSearchItemProps) => {
  item.value = ''
  const findIndex = setList.findIndex((it) => it.key === item.key)
  unSetList.push(...setList.splice(findIndex, 1))
}
// 编辑已填写搜索内容
const editSetList = (item: PublicSearchItemProps) => {
  const findIndex = setList.findIndex((it) => it.key === item.key)
  currentItem.push(...setList.splice(findIndex, 1))
  currentConfig.splice(
    0,
    1,
    props.config.find((it) => it.key === item.key)
  )
}

// 显示隐藏搜索表单
const show = ref<boolean>(false)
const setShow = () => {
  show.value = !show.value
}
const submit = () => {
  const out: Record<string, any> = {}
  setList.forEach((item) => {
    out[item.key] = item.value
  })
  unSetList.forEach((item) => {
    out[item.key] = item.value
  })
  emits('submit', out)
}
const reset = () => {
  unSetList.push(
    ...currentItem,
    ...setList.splice(0, setList.length).map((item) => ({ ...item, value: '' }))
  )
  const out: Record<string, string> = {}
  unSetList.forEach((item) => {
    out[item.key] = ''
  })
  emits('reset', out)
}
</script>

<template>
  <div class="public-search">
    <div class="public-search flex flex-justify-between">
      <div><slot name="default"></slot></div>
      <div>
        <ElButton
          :type="show ? '' : 'primary'"
          :icon="show ? ArrowUpBold : Search"
          @click="setShow"
        />
      </div>
    </div>
    <Transition v-bind="transitionHooks">
      <div v-show="show" class="public-search-show-content">
        <div class="w-full flex flex-items-center">
          <Tags
            :setList="setList"
            :currentItem="currentItem"
            @remove="removeSetList"
            @edit="editSetList"
          />
          <div class="w-full">
            <SelectNothing
              v-if="currentItem.length === 0"
              :unSetList="unSetList"
              @selectItem="selectUnSetItemToCurrent"
            />
            <SelectInput
              v-else-if="currentItem[0].type === 'input'"
              :currentItem="currentItem[0]"
              @cancel="cancelCurrentItem"
              @submit="submitCurrentItem"
            />
            <SelectSelectOne
              v-else-if="
                currentItem[0].type === 'selectOne' || currentItem[0].type === 'select-one'
              "
              :currentItem="currentItem[0]"
              :currentConfig="currentConfig[0]"
              @cancel="cancelCurrentItem"
              @submit="submitCurrentItem"
            />
            <SelectSelectMore
              v-else-if="
                currentItem[0].type === 'selectMore' || currentItem[0].type === 'select-more'
              "
              :currentItem="currentItem[0]"
              :currentConfig="currentConfig[0]"
              @cancel="cancelCurrentItem"
              @submit="submitCurrentItem"
            />
          </div>
        </div>
        <el-button-group>
          <el-button class="p-x-16px p-y-8px" @click="reset" text :icon="RefreshRight" />
          <el-button class="p-x-16px p-y-8px" @click="submit" text :icon="Search" />
        </el-button-group>
      </div>
    </Transition>
  </div>
</template>

<style lang="less" scoped>
.public-search-show-content {
  display: grid;
  grid-template-columns: 1fr 98px;
  width: 100%;
  margin-top: 8px;
  height: 32px;
  border: 1px #dcdfe6 solid;
  border-radius: 4px;
}

:deep(.el-input) {
  .el-input__wrapper {
    border: none;
    box-shadow: none;
  }
}
</style>
