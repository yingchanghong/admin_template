import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { authStore } from '~/store/auth';
interface Result {
  code: number;
  msg: string;
}
interface ResultData<T = any> extends Result {
  data?: T;
}
const URL: string = ''
enum RequestEnums {
  TIMEOUT = 60000,
  OVERDUE = 600, // 登录失效
  FAIL = 999, // 请求失败
  SUCCESS = 200, // 请求成功
}
const config = {
  baseURL: URL as string,
  timeout: RequestEnums.TIMEOUT as number,
  withCredentials: true
}

class RequestHttp {
  service: AxiosInstance;
  public constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config);
    this.service.interceptors.request.use(
      (config: AxiosRequestConfig | any) => {
        config.headers = {
          token: localStorage.getItem('token') || '',
        }
        return {
          ...config,
        }
      },
      (error: AxiosError) => {
        Promise.reject(error)
      }
    )
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        const store = authStore()
        const { data, config } = response;
        if (data.code === RequestEnums.OVERDUE) {
          store.clearToken()
          // 可根据需求是否需重新请求
          console.log(config)
          return Promise.reject(data)
        }
        if (data.code && data.code !== RequestEnums.SUCCESS) {
          return Promise.reject(data)
        }
        return data
      },
      (error: AxiosError) => {
        const { response } = error;
        if (response) {
          this.handleCode(response.status)
        }
      }
    )
  }
  handleCode(code: number): void {
    switch (code) {
      case 401:
        break;
      default:
        break;
    }
  }

  get<T>(url: string, params?: object): Promise<ResultData<T>> {
    return this.service.get(url, { params })
  }
  post<T>(url: string, params?: object): Promise<ResultData<T>> {
    return this.service.post(url, params)
  }
  put<T>(url: string, params?: object): Promise<ResultData<T>> {
    return this.service.put(url, params)
  }
  delete<T>(url: string, params?: object): Promise<ResultData<T>> {
    return this.service.delete(url, { params })
  }
}

export default new RequestHttp(config)
