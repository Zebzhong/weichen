import axios from 'axios'
// 请求格式返回格式
// { static: 0 , data:{} }
const errCode = {
  '001': '网络错误',
  '002': '服务器异常',
  '003': '参数错误'
}
errCode.a = 1
export function httpPsot (url, params) {
  return axios.post(url, params).then((response, err) => {
    return Promise.reject(response.data)
  })
}
