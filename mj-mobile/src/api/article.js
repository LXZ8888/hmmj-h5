import request from '@/utils/request'

// 封装跟文章有关的接口。

export const articleListAPI = params => {
  return request({
    url: '/h5/interview/query',
    params
  })
}
// 封装跟文章有关的接口。

export const detailAPI = params => {
  return request({
    url: '/h5/interview/show',
    params
  })
}
// 点赞收藏或者取消点赞收藏。
export const optAPI = data => {
  return request({
    url: '/h5/interview/opt',
    data,
    method: 'post'
  })
}
