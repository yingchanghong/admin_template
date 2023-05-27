import { API_LIST } from './api'
import axios from './request'
import { LoginParams, UserInfo } from './type'

export const login = async (params: LoginParams) => {
  return await axios.post<UserInfo>(API_LIST.login, params)
}