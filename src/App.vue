
<template>
  <TabBar v-if="!route.meta.hideNav"/>
  <RouterView />
</template>

<script lang="ts" setup>
const route = useRoute()
</script>