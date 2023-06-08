<template>
  <div>
    首页
    <CountTo :endVal="endVal" />
  </div>
</template>

<script setup lang="ts">
const endVal = ref(0)
setTimeout(() => {
  endVal.value = 5000
}, 1000)
</script>
