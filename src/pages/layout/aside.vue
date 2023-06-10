<template>
  <div class="aside">
    <el-menu background-color="#545c64" class="el-menu-vertical-demo" :default-active="route.path" text-color="#fff"
      router>
      <menu-item v-for="item in Menu" :key="item.code" :item="item" />
    </el-menu>
  </div>
</template>
<script lang="ts" setup>
const route = useRoute()
const Menu = [
  {
    code: 'admin_index',
    meta: { title: 'route.sinple' },
    children: [
      { code: 'admin_work', path: '/home/work', meta: { title: 'route.work' }, children: null },
      { code: 'admin_visualization', path: '/home/visualization', meta: { title: 'route.visu' }, children: null },
    ]
  }
]
</script>

<style>
.aside {
  width: 200px;
  height: 100%;
  background: #001529;
}
</style>
