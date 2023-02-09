// 把token存到本地，把token取出来，然后把token从本地储存删除
const TOKEN_KEY = 'hmmj-mobile92'
export const setToken = token => {
  localStorage.setItem(TOKEN_KEY, token)
}
export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY)
}
export const removeToken = () => {
  localStorage.removeItem('hmmj-mobile92')
}
