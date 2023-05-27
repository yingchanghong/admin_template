import { authStore } from '~/store/auth'

const auth = authStore();

export const queryAuth = async () => {
  const token = auth.getToken;
  if (token) return;
  // const { success, model } = await xxx
}