<template>
  <Title v-show="getShow" />
  <el-form v-show="getShow" :model="formData">
    <el-form-item>
      <el-input class="animate-delay-100 animate-fade-in-right animate-duration-500" v-model="formData.name"
        @keypress.enter="handleLogin" :placeholder="t('login.loginNamePlacehodel')" clearable animate-delay-100 />
    </el-form-item>
    <el-form-item>
      <el-input class="animate-delay-200 animate-fade-in-right animate-duration-500" v-model="formData.password"
        :placeholder="t('login.loginPasswordPlacehodel')" @keypress.enter="handleLogin" clearable animate-delay-200 />
    </el-form-item>
    <el-form-item>
      <el-button class="btn animate-delay-300 animate-fade-in-right animate-duration-500 w-full" size="large"
        type="primary" animate-delay-300>{{ t('login.submitText') }}</el-button>
    </el-form-item>
    <el-form-item>
      <el-button class="animate-delay-400 animate-fade-in-right animate-duration-500" type="default"
        @click="setLoginState(LoginStateEnum.MOBILE)" animate-delay-400>{{ t('login.mobileLogin') }}</el-button>
      <el-button class="animate-delay-500 animate-fade-in-right animate-duration-500" type="default"
        @click="setLoginState(LoginStateEnum.QR_CODE)" animate-delay-500>{{ t('login.qrCodeLogin') }}</el-button>
      <el-button class="animate-delay-600 animate-fade-in-right animate-duration-500" animate- type="default"
        @click="setLoginState(LoginStateEnum.REGISTER)">{{ t('login.registerText') }}</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import Title from './Title.vue'
import { LoginStateEnum, useLoginState } from './useLogin'
const { t } = useI18n()
const { getLoginState, setLoginState } = useLoginState()
const getShow = computed(() => unref(getLoginState) === LoginStateEnum.LOGIN)
const formData = ref({
  name: '',
  password: '',
})
const handleLogin = () => {
  console.log(formData.value);
}
</script>
<style>
.el-input {
  width: 100%;
}

.el-button {
  border-radius: 2px;
}

@media (max-width: 700px) {
  .el-button {
    width: 100%;
  }

  .el-button+.el-button {
    margin: 10px 0 0;
  }
}
</style>
