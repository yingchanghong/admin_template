import { defineStore } from 'pinia'
import { RouteInfo } from '~/utils/type'
import { useGo } from '~/hooks/useGo'

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
      if (state.path === '/login' || this.tabs.find((item) => item.fullPath === state.fullPath)) return
      this.tabs.push(state)
    },
    removeTab(route: RouteInfo) {
      const index = this.tabs.findIndex((item) => item.fullPath === route.fullPath)
      const _nextRoute = this.tabs[index - 1]
      const go = useGo()
      go({ path: _nextRoute.fullPath, query: _nextRoute.query })
      index !== -1 && this.tabs.splice(index, 1)
    }
  },
  getters: {
    getTabs(state) {
      return state.tabs
    },
  }
})
