<template>
  <el-menu-item v-if="!item.children" :index="item.path">
    <!-- <el-icon><icon-menu /></el-icon> -->
    <component v-if="item.meta?.icon" class="icon" :is="item.meta.icon"></component>
    <span>{{ item.meta.title }}</span>
  </el-menu-item>

  <el-sub-menu v-else :index="item.code">
    <template #title>
      <component v-if="item.meta?.icon" class="icon" :is="item.meta.icon"></component>
      <span>{{ item.meta.title }}</span>
    </template>
    <!-- 组件自调 -->
    <y-menu v-for="ele in item.children" :index="ele.path" :key="ele" :item="ele" />
  </el-sub-menu>
</template>
<script lang="ts" setup>
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