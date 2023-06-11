<template>
  <el-menu-item v-if="!item.children" :index="item.path">
    <component v-if="item.meta?.icon" class="icon" :is="item.meta.icon"></component>
    <el-icon v-if="item.meta?.icon"><span class="wp-20" :class="item.meta?.icon"></span></el-icon>
    <span>{{ t(item.meta.title) }}</span>
  </el-menu-item>

  <el-sub-menu v-else :index="item.code">
    <template #title>
      <el-icon v-if="item.meta?.icon"><span class="wp-20" :class="item.meta?.icon"></span></el-icon>
      <span>{{ t(item.meta.title) }}</span>
    </template>
    <!-- 组件自调 -->
    <y-menu v-for="ele in item.children" :index="ele.path" :key="ele" :item="ele" />
  </el-sub-menu>
</template>
<script lang="ts" setup>
const { t } = useI18n()
defineOptions({
  name: "YMenu",
})
defineProps(["item"])
</script>
<style scoped>
.icon {
  width: 20px;
  height: 20px;
}
</style>