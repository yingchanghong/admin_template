import { defineStore } from 'pinia'
import { Menu } from '~/utils/type'
interface Menus {
  menuList: Menu[];
  expand: boolean;
}
export const menuStore = defineStore({
  id: 'menu',
  state: (): Menus => {
    return {
      menuList: [],
      expand: true,
    }
  },
  actions: {
    setMenu(menu: Menu[]) {
      this.menuList = menu
    },
    clearMenu() {
      this.menuList = []
    },
    setExpand(status: boolean) {
      this.expand = status
    },
  },
  getters: {
    getMenu(state) {
      return state.menuList
    },
    getExpand(state) {
      return state.expand
    }
  }
})
