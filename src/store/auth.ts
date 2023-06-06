import { defineStore } from 'pinia'
import { UserInfo } from '~/utils/type'

interface State {
  userInfo: Partial<UserInfo> | null,
  token: string;
  locale: string;
}
export const authStore = defineStore({
  id: 'auth',
  state: (): State => {
    return {
      token: '',
      userInfo: null,
      locale: '',
    }
  },
  actions: {
    setToken(state: string) {
      this.token = state
      localStorage.setItem('admin_template', state)
    },
    setLocale(state: string) {
      this.locale = state
      localStorage.setItem('admin_locale', state)
    },
    clearToken() {
      this.token = ''
      localStorage.removeItem('admin_template')
    },
    clearAll() {
      this.token = ''
      localStorage.removeItem('admin_template')
      this.userInfo = null
    },
  },
  getters: {
    getToken(state) {
      return state.token || localStorage.getItem('admin_template')
    },
    getLocale(state) {
      return state.locale || localStorage.getItem('admin_locale')
    }
  }
})
