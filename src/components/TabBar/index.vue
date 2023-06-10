<template>
  <div class="tabs">
    <div class="tabs_item" :class="{ 'tabs--active': t(current) === t(item.meta.title), isOther: index !== 0 }"
      v-for="(item, index) in tabs" :key="index" @click="changeTab(item)">
      {{ t(item.meta.title) }}
      <span v-if="index !== 0" class="tabs_item--close" @click.stop="closeTab(item)">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z" />
        </svg>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { tabStore } from '~/store/tabs'
import { RouteInfo } from '~/utils/type'
const router = useRouter()
const store = tabStore()
const tabs = ref(store.getTabs)
const { t } = useI18n()
const current = ref('')
const changeTab = (item: RouteInfo) => {
  current.value = item.meta.title
  router.push(item.fullPath)
}
const closeTab = (item: RouteInfo) => {
  store.removeTab(item)
};
watch(() => router.currentRoute.value, (news: any) => {
  const { fullPath, path, name, query, meta } = news
  current.value = news.meta.title
  store.setTab({ fullPath, path, name, query, meta })
},
)
</script>

<style scoped lang="less">
.tabs {
  display: flex;
  padding: 3px 0;
  background: #fff;
  border-bottom: 1px solid #d9d9d9;

  &_item {
    padding: 3px 10px;
    margin: 0 3px;
    font-size: 12px;
    position: relative;
    display: flex;
    align-items: center;

    &:hover {
      cursor: pointer;
      color: var(--text--primary);
    }

    border: 1px solid var(--border--default);

    &--close {
      display: inline-block;
      width: 15px;
      height: 15px;

      svg {
        width: 15px;
        height: 15px;

        &:hover {
          transform: scale(1.5);
        }
      }
    }
  }

  .isOther {
    padding-right: 3px;
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

::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
</style>
