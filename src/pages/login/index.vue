<template>
  <div class="login">
    <el-button @click="changeLocale('en')">英文</el-button>
    <el-button @click="changeLocale('cn')">中文</el-button>
    <el-button type="primary" @click="jump">{{ t('login.submitText') }}</el-button>
    <el-button type="primary" @click="jump">{{ t('login.registerText') }}</el-button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
import { authStore } from '~/store/auth'
const { locale, t } = useI18n();

const jump = () => {
  router.push({ path: '/home' })
}
const store = authStore()
const changeLocale = (languge: string) => {
  locale.value = languge
  store.setLocale(languge)
}
</script>

<style scoped lang="less">
  .login {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>