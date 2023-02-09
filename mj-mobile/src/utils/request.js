import axios from 'axios'
import { Toast } from 'vant'
import Router from '@/router'

import { getToken, removeToken } from './token'
const request = axios.create({
  baseURL: 'http://interview-api-t.itheima.net/',
  timeout: 5000
})
// 添加请求拦截器
request.interceptors.request.use(
  function (config) {
    if (getToken()) {
      config.headers.Authorization = `Bearer ${getToken()}`
    }
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data
  },
  function (error) {
    console.log(error)
    if (error.response.status === 401) {
      Toast.fail('登录状态失效，请重新登录')
      Router.push('/login')
      // this.$router.push('/login')不能直接使用，要导入router
      removeToken()
    } else {
      // 超出 2xx 范围的状态码都会触发该函数。
      // 对响应错误做点什么

      Toast.fail(error.response.data.message)
      return Promise.reject(error)
    }
  }
)
export default request
