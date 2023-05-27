import { defineStore } from 'pinia'
import { UserInfo } from '~/utils/type'

interface State {
  userInfo: Partial<UserInfo>,
  token: string;
}
export const authStore = defineStore({
  id: 'auth',
  state: (): State => {
    return {
      token: '',
      userInfo: {},
    }
  },
  actions: {
    setToken(state: string) {
      this.token = state;
      sessionStorage.setItem('admin_template', state)
    }
  },
  getters: {
    getToken(state) {
      return state.token || sessionStorage.getItem('admin_template')
    }
  }
})