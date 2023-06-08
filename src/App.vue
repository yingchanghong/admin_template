
<template>
  <section v-if="!route.meta.hideNav">
    <Aside />
    <main class="main">
      <Header/>
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
  section {
    display: flex;
    height: 100%;
  }
  .main {
    display: flex;
    flex-direction: column;
    width: calc(100% - 200px);
  }
  article {
    flex: 1 1 auto;
  }
</style>
