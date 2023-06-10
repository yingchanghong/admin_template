
<template>
  <section class="flex h-full" v-if="!route.meta.hideNav">
    <Aside />
    <main class="main bg-main flex-col">
      <Header />
      <article>
        <RouterView />
      </article>
    </main>
  </section>
  <RouterView v-else />
</template>

<script lang="ts" setup>
import Header from '~/pages/layout/header.vue'
import Aside from '~/pages/layout/aside.vue'
const route = useRoute()
</script>

<style scoped>
.main {
  flex: 1 1 auto;
}

article {
  flex: 1 1 auto;
}
</style>
