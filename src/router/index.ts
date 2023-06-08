import { createRouter, createWebHistory } from "vue-router";
import i18n from '~/locales';
import { routes } from './routes';
const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, _from, next) => {
  const { t } = i18n.global
  to.meta.title && (window.document.title = <string>t(to.meta.title as string))
  next()
})
export default router
