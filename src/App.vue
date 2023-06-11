
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

/* 进入开始 */
.y-enter-from {
  opacity: 0;
}

/* 进入中 */
.y-enter-active {
  transition: all 1s linear;
}

/* 进入完成 */
.y-enter-to {
  opacity: 1;
}

/* 离开开始 */
.y-leave-from {
  opacity: 1;
}

/* 离开中 */
.y-leave-active {
  transition: all 0.5s linear;
}

/* 离开完成 */
.y-leave-to {
  opacity: 0;
}
</style>
