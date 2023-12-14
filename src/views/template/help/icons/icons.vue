<template>
  <div class="container">
    <h2>使用方法</h2>
    <p style="line-height: 50px;">
      直接通过设置类名为 el-icon-lx-iconName 来使用即可。例如：（共{{ iconList.length }}个图标）
    </p>
    <p class="example-p">
      <i class="i-ep-lx-redpacket_fill" style="font-size: 30px; color: #ff5900;"></i>
      <span>&lt;el-icon&gt;&lt;Edit /&gt;&lt;/el-icon&gt;</span>
    </p>
    <!-- <p class="example-p">
      <i class="el-icon-lx-weibo" style="font-size: 30px; color: #fd5656;"></i>
      <span>&lt;i class=&quot;el-icon-lx-weibo&quot;&gt;&lt;/i&gt;</span>
    </p>
    <p class="example-p">
      <i class="el-icon-lx-emojifill" style="font-size: 30px; color: #ffc300;"></i>
      <span>&lt;i class=&quot;el-icon-lx-emojifill&quot;&gt;&lt;/i&gt;</span>
    </p> -->
    <br />
    <h2>图标</h2>
    <div class="search-box">
      <el-input
        class="search"
        size="large"
        v-model="keyword"
        clearable
        placeholder="请输入图标名称"
      ></el-input>
    </div>
    <ul>
      <li class="icon-li" v-for="(item, index) in list" :key="index">
        <div class="icon-li-content copy-btn" @click="copyText(item)">
          <el-icon>
            <component :is="item" />
          </el-icon>

          <span>{{ item }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="icon">
import ClipboardJS from 'clipboard'
import { ref, computed, onBeforeUnmount, Ref } from 'vue'
import { ElMessage } from 'element-plus'
import { iconList } from './icons.ts'

const keyword = ref('')
const list = computed(() => {
  return iconList.filter((item) => {
    return item.indexOf(keyword.value) !== -1
  })
})
const clipboardInstance: Ref<ClipboardJS | null> = ref(null)

const copyText = (copyItem: string) => {
  // 销毁之前的实例
  if (clipboardInstance.value) {
    clipboardInstance.value.destroy()
  }

  // 创建新的 ClipboardJS 实例
  clipboardInstance.value = new ClipboardJS('.copy-btn', {
    text() {
      return copyItem
    }
  })

  clipboardInstance.value.on('success', (res) => {
    console.log('复制成功', res)
    ElMessage({
      duration: 1000,
      message: `复制图标名称 ${res.text} 成功`,
      type: 'success'
    })
  })

  clipboardInstance.value.on('error', (data) => {
    console.log('复制失败', data)
    ElMessage({
      duration: 1000,
      message: '复制失败',
      type: 'warning'
    })
  })
}

// 在组件销毁前销毁 ClipboardJS 实例
onBeforeUnmount(() => {
  if (clipboardInstance.value) {
    clipboardInstance.value.destroy()
  }
})
</script>

<style scoped>
.container {
  margin: 30px 60px;
}

.example-p {
  display: flex;
  align-items: center;
  height: 45px;
}

.search-box {
  margin-top: 10px;
  text-align: center;
}

.search {
  width: 300px;
}

ul {
  width: 80vw;
  list-style: none;
}

li {
  list-style: none;
}

.icon-li {
  display: inline-block;
  width: 120px;
  height: 120px;
  padding: 40px 10px;
}

.icon-li-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
}

.icon-li-content i {
  font-size: 36px;
  color: #606266;
}

.icon-li-content span {
  margin-top: 10px;
  color: #787878;
}
</style>
