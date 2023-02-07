// 以后这个文件专门发跟用户模块有关的接口，例如用户注册，用户登录，获取用户信息等。
import request from '@/utils/request'
// 封装请求

export function regAPI (data) {
  return request({
    url: '/h5/user/register',
    method: 'post',
    data
  })
}
