const MODE = 'MOCK'
const API_PREFIX_LIST = {
  DEV: '/admin-api',
  MOCK: '/admin-mock',
}
// const prefix = API_PREFIX_LIST[MODE]
const prefix = (import.meta as any).env.VITE_ENV === 'dev' ? API_PREFIX_LIST[MODE] : (import.meta as any).env.VITE_MOCK
export const API_LIST = {
  login: `${prefix}/login`
}
