<template>
  <div>
    首页
    <CountTo :endVal="endVal" />
    <div class="login" @click="de">登陆</div>
  </div>
</template>

<script setup lang="ts">
const endVal = ref(0)
setTimeout(() => {
  endVal.value = 5000
}, 1000)
const router = useRouter()
const de = () => {
  router.push({ path: '/login' })
}
</script>
