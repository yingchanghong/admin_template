<template>
  <div class="login">
    <Locale color="#fff" class="locale" />
    <div class="login_form animate-fade-in-right animate-duration-700">
      <LoginForm />
      <RegisterForm />
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginForm from './LoginForm.vue'
import RegisterForm from './RegisterForm.vue'
</script>

<style scoped lang="less">
.login {
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: #293146;
  display: flex;
  justify-content: center;
  align-items: center;

  .locale {
    position: absolute;
    right: 20px;
    top: 20px;
    color: #fff;
  }

  &_form {
    padding: 20px;
    background: #fff;
    border-radius: 8px;
  }
}
@media (min-width: 1600px) {
  .login_form {
    width: 500px;
  }
}
@media (max-width: 1600px) {
  .login_form {
    width: 500px;
  }
}
@media (max-width: 992px) {
  .login_form {
    width: 50%;
  }
}
@media (max-width: 576px) {
  .login_form {
    width: 50%;
    min-width: 150px;
  }
}
</style>
