<template>
  <div class="login">
    <button @click="jump">{{ t('login.submitText') }}</button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const { t } = useI18n();
console.log(t('login'));

const jump = () => {
  router.push({ path: '/home' })
}
</script>

<style scoped lang="less">
  .login {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      padding: 5px 12px;
      background: #fff;
      border: 1px solid #eee;
      cursor: pointer;
      &:hover {
        color: aqua;
        border-color: aqua;
      }
    }
  }
</style>