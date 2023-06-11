<template>
  <Title v-show="getShow" />
  <el-form v-show="getShow" :model="formData">
    <el-form-item>
      <el-input class="enter-x-150" v-model="formData.name" @keypress.enter="handleLogin"
        :placeholder="t('login.loginNamePlacehodel')" clearable />
    </el-form-item>
    <el-form-item class="nowrap">
      <el-input class="enter-x-300" v-model="formData.code" :placeholder="t('login.smsPlacehodel')"
        @keypress.enter="handleLogin" clearable />
      <el-button class="ml-2 enter-x-300" :class="{ disabled: !!counter }" :disabled="!!counter" @click="getCode">{{
        counter
        ? `${counter}秒后重新获取` :
        t('login.sms') }}</el-button>
    </el-form-item>
    <el-form-item>
      <el-input class="enter-x-300" v-model="formData.mobile" :placeholder="t('login.mobilePlacehodel')"
        @keypress.enter="handleLogin" clearable />
    </el-form-item>
    <el-form-item>
      <el-input class="enter-x-500" v-model="formData.password" :placeholder="t('login.loginPasswordPlacehodel')"
        @keypress.enter="handleLogin" clearable />
    </el-form-item>
    <el-form-item>
      <el-button class="btn enter-x-500 w-full" size="large" type="primary">{{ t('login.registerText') }}</el-button>
    </el-form-item>
    <el-form-item>
      <el-button class="btn enter-x-500 w-full" size="large" type="default"
        @click="setLoginState(LoginStateEnum.LOGIN)">{{
          t('login.back')
        }}</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { useCountDown } from '~/hooks/sendTimeout';
import Title from './Title.vue'
import { LoginStateEnum, useLoginState } from './useLogin'
const { getLoginState, setLoginState } = useLoginState()
const { t } = useI18n()
const getShow = computed(() => unref(getLoginState) === LoginStateEnum.REGISTER)
const formData = ref({
  name: '',
  password: '',
  mobile: '',
  validCode: '',
  code: '',
})
const handleLogin = () => {
  console.log(formData)
}
const { starte, counter } = useCountDown()
const getCode = () => {
  starte(60)
}
</script>
<style lang="less" scoped>
.nowrap {
  :deep(.el-form-item__content) {
    flex-wrap: nowrap;
  }
}

.disabled {
  color: #00000040;
  border-color: #d9d9d9;
  background: #f5f5f5;
  cursor: not-allowed;
  pointer-events: none;
}
</style>