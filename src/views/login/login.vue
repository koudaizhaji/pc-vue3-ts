<template>
  <div class="login-container">
    <div class="login-box">
      <!-- <SwitchDark class="login-dark" /> -->
      <div class="login-left">
        <img src="../../assets/imgs/login/side-logo.png" alt="" />
      </div>
      <div class="login-form">
        <div class="info-qrcode">{{ accountLogin ? '微信扫码登录' : '账号登录' }}</div>
        <img
          src="../../assets/imgs/login/qrcode-icon.png"
          class="qrcode"
          @click="handleClick"
          alt=""
        />
        <LoginForm v-if="accountLogin" />
        <LoginQrcode v-else />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onErrorCaptured } from 'vue'
import LoginForm from './components/login-account.vue'
// import SwitchDark from '@/components/switch-dark/index.vue'
import LoginQrcode from './components/login-qrcode.vue'

const accountLogin = ref<boolean>(true)

const handleClick = () => {
  console.log('=======', accountLogin)
  accountLogin.value = !accountLogin.value
}
// 在 setup 函数中的适当位置添加 onErrorCaptured 处理程序
onErrorCaptured((error) => {
  console.error('Error captured in setup:', error)
})
</script>
<style lang="less" scoped>
@import 'index.less';
</style>
