<template>
  <div class="tabs">
    <div class="tabs_item" :class="current === item.name && 'tabs--active'" v-for="(item, index) in tabs" :key="index" @click="changeTab(item)">{{ item.name }}</div>
  </div>
</template>

<script setup lang="ts">
import { tabStore } from '~/store/tabs';
const router = useRouter();
const store = tabStore();
const tabs = ref(store.getTabs);
const current = ref('');
const changeTab = (item) => {
  current.value = item.name
}
watch(()=> router.currentRoute.value, (news) => {
  const { fullPath, path, name, meta, query } = news;
  current.value = news.name;
  store.setTab({ fullPath, path, name, meta, query })
} )
</script>

<style scoped lang="less">
.tabs {
  display: flex;
  &_item {
    padding: 3px 10px;
    margin: 0 3px;
    font-size: 12px;
    &:hover {
      cursor: pointer;
      color: var(--text--primary);
    }
    border: 1px solid var(--border--default);
  }
  &--active {
    background: var(--bg--primary);
    border: 1px solid var(--border--primary);
    color: var(--text--white);
    &:hover {
      color: var(--text--white);
    }
  }
}
</style>