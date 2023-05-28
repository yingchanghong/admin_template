export const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/login',
    name: "Login",
    meta: {
      title: '登录页',
      keepAlive: false
    },
    component: () => import("~/pages/login/index.vue")
  },
  {
    path: '/home',
    meta: {
      title: '首页',
      keepAlive: false,
    },
    component: () => import("~/pages/home/index.vue")
  },
]