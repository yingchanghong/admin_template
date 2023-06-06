<template>
  <h2 class="mb-15px text-center animate-fade-in-right animate-duration-700">{{ getFormTitle }}</h2>
</template>

<script lang="ts" setup>
  import { LoginStateEnum, useLoginState } from './useLogin';
  const { getLoginState } = useLoginState();
  const { t } = useI18n();
  const getFormTitle = computed(() => {
  const titleObj = {
    [LoginStateEnum.LOGIN]: t('login.submitText'),
    [LoginStateEnum.REGISTER]: t('login.registerText'),
    [LoginStateEnum.MOBILE]: t('login.mobileLogin'),
    [LoginStateEnum.RESET_PASSWORD]: t('login.forgetFormTitle'),
    [LoginStateEnum.QR_CODE]: t('login.qrCodeLogin'),
  };
  return titleObj[unref(getLoginState)];
});
</script>
<style lang="less" scoped>

</style>
