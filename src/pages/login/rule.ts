import i18n from '~/locales';
const { t } = i18n.global
export const loginRUle = {
  name: [
    { required: true, message: t('rule.loginName'), trigger: 'blur' },
  ],
  password: [
    { required: true, message: t('rule.loginPassword'), trigger: 'blur' },
  ]
}
