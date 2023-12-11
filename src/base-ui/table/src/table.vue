<template>
  <div class="lili-table">
    <div class="header">
      <slot name="header">
        <!-- 插槽默认一些东西 -->
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="listData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
      v-bind="childrenProps"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="60"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        align="center"
        label="序号"
        width="60"
      ></el-table-column>

      <template v-for="propItem in propList" :key="propItem.id">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          v-model:current-page="page.currentPage"
          v-model:page-size="page.pageSize"
          :page-sizes="[10, 20, 30]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  listData: {
    type: Array,
    required: true
  },
  listCount: {
    type: Number,
    default: 0
  },
  propList: {
    type: Array,
    required: true
  },
  showIndexColumn: {
    type: Boolean,
    default: false
  },
  showSelectColumn: {
    type: Boolean,
    default: false
  },
  page: {
    type: Object,
    default: () => {
      return {
        currentPage: 0,
        pageSize: 10
      }
    }
  },
  childrenProps: {
    type: Object,
    default: () => ({})
  },
  // 是否展示分页器
  showFooter: {
    type: Boolean,
    default: true
  }
})

// 发送出去的事件
const emit = defineEmits(['selection-change', 'update:page'])

const handleSelectionChange = (val: any) => {
  console.log(val)
  emit('selection-change', val)
}

// 当前页改变时触发
const handleCurrentChange = (currentPage: number) => {
  console.log('当前页改变时触发', currentPage)
  emit('update:page', {
    ...props.page,
    currentPage
  })
}
// 每页条数改变时触发
const handleSizeChange = (pageSize: number) => {
  console.log('每页条数改变时触发', pageSize)
  emit('update:page', {
    ...props.page,
    pageSize
  })
}
</script>

<style lang="less">
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handle {
    margin-top: 15px;

    .el-pagination {
      text-align: right;
    }
  }
}

.el-pagination {
  // margin: 15px 0 0 35%;
  // text-align: right;
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
}
</style>
