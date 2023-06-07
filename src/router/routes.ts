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
      keepAlive: false,
      hideNav: true,
    },
    component: () => import("~/pages/login/index.vue")
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: '首页',
      keepAlive: false,
      hideNav: false,
    },
    component: () => import("~/pages/home/index.vue")
  },
]