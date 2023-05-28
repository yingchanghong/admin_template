import { createRouter, createWebHistory } from "vue-router";
import { routes } from './routes';
const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  to.meta.title && (window.document.title = <string>to.meta.title)
  next()
})
export default router
