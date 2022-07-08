import requestBymock from "./requestBymock";

const getAsideList = () => {
  return requestBymock({
    url: '/asideList',
    method: 'get'
  })
}
const getGoodsList = () => {
  return requestBymock({
    url: '/goodsList',
    method: 'get'
  })
}
const getSalesList = () => {
  return requestBymock({
    url: '/salesList',
    method: 'get'
  })
}
//增加用户
const createUser = (params) => {
  return requestBymock({
    url: '/createUser',
    method: 'post',
    data: params
  })
}
//获取用户列表
const getUserList = () => {
  return requestBymock({
    url: '/getUserList',
    method: 'get',
  })
}
export {getAsideList, getGoodsList, getSalesList, createUser, getUserList}