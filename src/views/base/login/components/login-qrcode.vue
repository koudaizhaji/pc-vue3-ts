<template>
  <div class="login-qrcode">
    <h2 class="title">请使用微信扫码登录</h2>
    <vue-qr text="https://www.baidu.com"></vue-qr>
  </div>
</template>

<script lang="ts" setup>
import vueQr from 'vue-qr/src/packages/vue-qr.vue'
// 注意点，这里要使用上面的方式，一个相对路径 src/packages/vue-qr.vue
// import VueQr from 'vue-qr'
</script>

<style lang="less" scoped>
@import '../index';
</style>
