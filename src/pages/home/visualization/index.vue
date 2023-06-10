<template>
  <div>
    <span @click="jump">看板</span>
    <CountTo :endVal="endVal" />
  </div>
</template>

<script setup lang="ts">
const endVal = ref(0)
setTimeout(() => {
  endVal.value = 5000
}, 1000)
const router = useRouter()
const jump = () => {
  router.push({ path: '/home/work' })
}
</script>
