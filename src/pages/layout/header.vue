<template>
  <header>
    <div class="header bg-white w-full relative hp-48 flex-items-center flex">
      <span class="wp-20 inline-block cursor-pointer ml-1"
        :class="store.expand ? 'i-ci-text-align-right' : 'i-ci-text-align-left'" @click="changeExpand"></span>
      <Locale class="locale" />
    </div>
    <TabBar class="bar" />
  </header>
</template>
<script lang="ts" setup>
import { menuStore } from '~/store/Menu';
const store = menuStore()
const changeExpand = () => {
  store.setExpand(!store.expand)
}
</script>
<style lang="less" scoped>
.header {
  border-bottom: 1px solid #eee;

  .locale {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
