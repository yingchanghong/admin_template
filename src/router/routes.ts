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
    redirect: '/home/work',
    children: [
      {
        path: 'work',
        name: 'Work',
        meta: {
          title: 'route.work',
          keepAlive: false,
          hideNav: false,
        },
        component: () => import("~/pages/home/work/index.vue")
      },
      {
        path: 'visualization',
        name: 'Visualization',
        meta: {
          title: 'route.visu',
          keepAlive: false,
          hideNav: false,
        },
        component: () => import("~/pages/home/visualization/index.vue")
      },
    ],
  },
]