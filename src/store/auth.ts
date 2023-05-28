import { defineStore } from 'pinia'
import { UserInfo } from '~/utils/type'

interface State {
  userInfo: Partial<UserInfo>,
  token: string;
  locale: string;
}
export const authStore = defineStore({
  id: 'auth',
  state: (): State => {
    return {
      token: '',
      userInfo: {},
      locale: '',
    }
  },
  actions: {
    setToken(state: string) {
      this.token = state;
      sessionStorage.setItem('admin_template', state)
    },
    setLocale(state: string) {
      this.locale = state;
      localStorage.setItem('admin_locale', state)
    }
  },
  getters: {
    getToken(state) {
      return state.token || sessionStorage.getItem('admin_template')
    },
    getLocale(state) {
      return state.locale || localStorage.getItem('admin_locale')
    }
  }
})