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
    meta: { title: '个人中心' },
    children: [
      { code: 'admin_work', path: '/home/work', meta: { title: '工作台' }, children: null },
      { code: 'admin_visualization', path: '/home/visualization', meta: { title: '看板' }, children: null },
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
