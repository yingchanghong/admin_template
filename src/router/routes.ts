export const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/login',
    component: () => import("~/pages/login/index.vue")
  },
  {
    path: '/home',
    component: () => import("~/pages/home/index.vue")
  },
]