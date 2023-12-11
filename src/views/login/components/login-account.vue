<template>
  <div class="login-title">
    <img class="icon" src="../../../assets/imgs/logo.png" alt="logo" />
    <h2 class="title">管理后台</h2>
  </div>
  <!-- 登录面板 -->
  <div class="pane-account">
    <el-form ref="formRef" :model="account" lable-width="60px" size="large" :rules="rules">
      <el-form-item label="" prop="username">
        <el-input
          placeholder="请输入用户名"
          autoComplete="on"
          style="position: relative;"
          v-model="account.username"
          @keyup.enter.native="submitForm(formRef)"
        >
          <template #prefix>
            <div class="i-tabler-pig-money font-size-20rpx"></div>
          </template>
        </el-input>
      </el-form-item>

      <el-form-item label="" prop="password">
        <el-input
          placeholder="请输入密码"
          autoComplete="on"
          @keyup.enter.native="submitForm(formRef)"
          v-model="account.password"
          :type="passwordType"
        >
          <template #prefix>
            <div class="i-tabler-lock-open"></div>
          </template>
          <template #suffix>
            <div class="show-pwd" @click="showPwd">
              <!-- <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" /> -->
              <div
                :class="passwordType === 'password' ? 'i-tabler-eye-closed' : 'i-tabler-eye'"
              ></div>
            </div>
          </template>
        </el-input>
      </el-form-item>

      <el-form-item style="width: 100%;">
        <el-button :loading="loading" class="login-btn" type="primary" @click="submitForm(formRef)"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
// import { useRouter } from 'vue-router'
// import { useUserStore } from '@/stores/modules/user'
// import { getTimeStateStr } from '@/utils/index'
import useLoginStore from '@/stores/login/login'
import { accountLogin, getIpMsg } from '@/services/login/login'
import router from '@/routers'

// const router = useRouter()
// const UserStore = useUserStore()
const formRef = ref<FormInstance>()
const passwordType = ref('password')
const loading = ref(false)
const loginStore = useLoginStore()
const ip = ref<any>()
const userAgent = ref<any>()

// step2:输入框验证规则
const rules = reactive({
  password: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  username: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})
// step3:执行逻辑
// 表单数据
const account = reactive({
  username: '',
  password: '',
  ip: ip,
  userAgentId: userAgent
})

// 显示密码图标
const showPwd = () => {
  passwordType.value = passwordType.value === 'password' ? '' : 'password'
}

onMounted(async () => {
  userAgent.value = navigator.userAgent.replace(/[^\w]/gi, '')
  const ipObj = await getIpMsg()
  ip.value = ipObj?.ip ? ipObj.ip : ''
  console.log('拿到的设备信息', userAgent.value, ip.value)
})
// const accountRef = ref<InstanceType<typeof PanelAccount>>()
// 这里使用ref选中的formRef.value也行
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      loading.value = true

      console.log('拿到的用户名', account)
      // 1.登录操作
      accountLogin(account)
        .then((data) => {
          if (data.code === 0) {
            // 后续操作交给pinia
            loginStore.setLoginInfo(data)
            // // 跳转到首页
            // router.push('/')
          } else if (data.code === 'S1000050') {
            ElMessage({
              type: 'error',
              message: data.message
            })
          }
        })
        .catch((error) => {
          console.error(error)
          ElMessage({
            type: 'error',
            message: '登录失败，原因未知'
          })
        })
        .finally(() => {
          loading.value = false
        })
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>

<style lang="less" scoped>
@import '../index.less';
</style>
