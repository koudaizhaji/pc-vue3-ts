<script setup lang="ts">
import { ElButton } from 'element-plus'
import { Search, ArrowUpBold } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { transitionHooks } from './hooks'
import { type PublicSearchItemProps, type PublicSearchProps, PublicSearchTypeList } from './index'
import Tags from './components/tags.vue'
import SelectNothing from './components/select-nothing.vue'
import SelectInput from './components/select-input.vue'

const props = defineProps<PublicSearchProps>()

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

// 在未填写搜索项中选择备选项
const selectUnSetItemToCurrent = (_: PublicSearchItemProps, index: number) => {
  currentItem.push(...unSetList.splice(index, 1))
  console.log(currentItem[0])
}
// 取消当前填写搜索项
const cancelCurrentItem = () => {
  unSetList.push(...currentItem.splice(0, 1))
}
// 提交时将记录放在已填写搜索项中
const submitCurrentItem = (value: PublicSearchItemProps['value']) => {
  currentItem[0].value = value
  setList.push(...currentItem.splice(0, 1))
}

// 显示隐藏搜索表单
const show = ref<boolean>(false)
const setShow = () => {
  show.value = !show.value
}
</script>

<template>
  <div class="public-search">
    <div class="public-search flex flex-justify-between">
      <div><slot name="default"></slot></div>
      <div>
        <ElButton :icon="show ? ArrowUpBold : Search" @click="setShow" />
      </div>
    </div>
    <Transition v-bind="transitionHooks">
      <div v-show="show" class="public-search-show-content">
        <div class="w-full flex flex-items-center">
          <Tags :setList="setList" />
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
          </div>
        </div>
        <el-button-group class="m-t-4px">
          <el-button :icon="Search" />
          <el-button :icon="Search" />
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
  padding-top: 8px;
  height: 32px;
}
</style>
