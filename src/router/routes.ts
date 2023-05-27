export const routes = [
  // 路由重定向
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/login',
    // component: Home
    component: () => import("~/pages/login/index.vue")
  },
]