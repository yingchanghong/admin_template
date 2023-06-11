<template>
  <Title v-show="getShow" />
  <el-form v-show="getShow" :model="formData">
    <el-form-item>
      <el-input class="enter-x-350" v-model="formData.name" @keypress.enter="handleLogin"
        :placeholder="t('login.loginNamePlacehodel')" clearable />
    </el-form-item>
    <el-form-item>
      <el-input class="enter-x-500" v-model="formData.password" :placeholder="t('login.loginPasswordPlacehodel')"
        @keypress.enter="handleLogin" clearable animate-delay-200 />
    </el-form-item>
    <el-form-item>
      <el-button class="btn enter-x-700 w-full" size="large" type="primary">{{ t('login.submitText')
      }}</el-button>
    </el-form-item>
    <el-form-item>
      <el-button class="enter-x-800" type="default" @click="setLoginState(LoginStateEnum.MOBILE)">{{
        t('login.mobileLogin') }}</el-button>
      <el-button class="enter-x-800" type="default" @click="setLoginState(LoginStateEnum.QR_CODE)">{{
        t('login.qrCodeLogin') }}</el-button>
      <el-button class="enter-x-800" type="default" @click="setLoginState(LoginStateEnum.REGISTER)">{{
        t('login.registerText') }}</el-button>
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
