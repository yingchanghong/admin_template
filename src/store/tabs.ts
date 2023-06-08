import { defineStore } from 'pinia'
interface TabsItem {
  path: string;
  fullPath: string;
  name: string;
  query: any;
  meta: {
    title: string;
    [key: string]: any;
  }
}
interface Tabs {
  tabs: TabsItem[];
}
export const tabStore = defineStore({
  id: 'tab',
  state: (): Tabs => {
    return {
      tabs: [],
    }
  },
  actions: {
    setTab(state: TabsItem) {
      if (state.path === '/login') return
      // if (this.tabs)
      this.tabs.push(state)
    },
  },
  getters: {
    getTabs(state) {
      return state.tabs
    },
  }
})
