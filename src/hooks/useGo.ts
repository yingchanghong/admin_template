import router from '~/router'
export function useGo() {
  return function go(_route: any) {
    router.push(_route)
  }
}