import request from '@/utils/request'

// 封装跟文章有关的接口。

export const articleListAPI = params => {
  return request({
    url: '/h5/interview/query',
    params
  })
}
