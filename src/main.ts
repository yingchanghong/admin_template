import { createApp } from 'vue'
import 'uno.css'
import store from '~/store'
import router from '~/router'
import '~/assets/css/base.less'
import '~/assets/css/annimation.less'
import '~/assets/css/var.less'
import App from './App.vue'
import i18n from '~/locales'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(i18n)
app.mount('#app')
