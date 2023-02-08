// 以后这个文件专门用来封装跟用户有关的请求

// 导入请求对象
import request from '@/utils/request'

// 按需暴露一个注册的接口
export const registerAPI = data => {
  return request({
    url: '/h5/user/register',
    method: 'post',
    data
  })
}
