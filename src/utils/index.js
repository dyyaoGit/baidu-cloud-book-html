import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://m.yaojunrong.com',
  timeout: 15000
})

instance.interceptors.response.use(function (response) {
  // Do something with response data
  return response.data
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})
