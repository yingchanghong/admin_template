import { createI18n } from 'vue-i18n'
import cn from './language/cn'
import en from './language/en'

const i18n = createI18n({
  locale: 'cn',
  legacy: false,
  globalInjection: true,
  messages: {
    cn: {
      ...cn
    },
    en: {
      ...en
    },
  },
})

export default i18n
