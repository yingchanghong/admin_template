import { defineStore } from 'pinia'

export const authStore = defineStore({
  id: 'auth',
  state: () => {
    return {
      token: ''
    }
  },
  actions: {
    setToken(state: string) {
      this.token = state
    }
  },
  getters: {
    getToken(state) {
      return state.token
    }
  }
})