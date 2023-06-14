<template>
  <section class="flex h-full" v-if="!route.meta.hideNav">
    <Aside />
    <main class="main bg-main flex-col">
      <Header />
      <article>
        <router-view v-slot="{ Component }">
          <transition name="y">
            <component :is="Component" />
          </transition>
        </router-view>
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
.y-enter-from {
  opacity: 0;
}
.y-enter-active {
  transition: all 1s linear;
}
.y-enter-to {
  opacity: 1;
}
.y-leave-from {
  opacity: 1;
}
.y-leave-active {
  transition: all 0.5s linear;
}
.y-leave-to {
  opacity: 0;
}
</style>
