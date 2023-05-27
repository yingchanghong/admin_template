import { createApp } from 'vue'
import store from '~/store'
import router from '~/router'
import '~/assets/css/base.less'
import App from './App.vue'
const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
