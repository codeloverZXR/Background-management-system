import axios from "axios";
import { Promise } from "core-js";
const requestBymock = axios.create({
  baseURL: '/mock',
  timeout: 5000
})
requestBymock.interceptors.request.use((config) => {
  return config
})
requestBymock.interceptors.response.use((result) => {
  return result.data
}, (reject) => {
  console.log(reject)
  return new Promise.reject('服务器响应失败')
})
export default requestBymock