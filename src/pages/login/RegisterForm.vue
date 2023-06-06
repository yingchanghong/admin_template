<template>
  <Title v-show="getShow" />
  <el-form v-show="getShow" :model="formData">
    <el-form-item>
      <el-input v-model="formData.name" @keypress.enter="handleLogin" :placeholder="t('login.loginNamePlacehodel')"
        clearable />
    </el-form-item>
    <el-form-item>
      <el-input v-model="formData.mobile" :placeholder="t('login.mobilePlacehodel')" @keypress.enter="handleLogin"
        clearable />
    </el-form-item>
    <el-form-item>
      <el-input v-model="formData.password" :placeholder="t('login.loginPasswordPlacehodel')"
        @keypress.enter="handleLogin" clearable />
    </el-form-item>
    <el-form-item>
      <el-button class="btn" type="primary">{{ t('login.registerText') }}</el-button>
    </el-form-item>
    <el-form-item>
      <el-button class="btn" type="default" @click="setLoginState(LoginStateEnum.LOGIN)">{{ t('login.back') }}</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
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
})
const handleLogin = () => {
  console.log(formData)
}
</script>
