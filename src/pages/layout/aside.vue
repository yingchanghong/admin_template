<template>
  <div class="aside h-full bg-#001529">
    <el-menu background-color="#545c64" class="el-menu-vertical-demo" :default-active="route.path"
      :collapse="!store.expand" text-color="#fff" router>
      <menu-item v-for="item in Menu" :key="item.code" :item="item" />
    </el-menu>
  </div>
</template>
<script lang="ts" setup>
import { menuStore } from '~/store/Menu'
const store = menuStore()
const route = useRoute()
const Menu = [
  {
    code: 'admin_index',
    meta: { title: 'route.sinple', icon: 'i-ci-grid-big-round' },
    children: [
      { code: 'admin_work', path: '/home/work', meta: { title: 'route.work' }, children: null },
      { code: 'admin_visualization', path: '/home/visualization', meta: { title: 'route.visu' }, children: null },
    ]
  }
]
</script>
