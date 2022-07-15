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
//编辑(更新)用户信息
const updateUser = (params) => {
  return requestBymock({
    url: '/editUser',
    method: 'post',
    data: params
  })
}
//获取用户列表
const getUserList = (params) => {
  return requestBymock({
    url: '/getUserList',
    method: 'get',
    data: params
  })
}
//删除用户信息
const deleteUser = (params) => {
  return requestBymock({
    url: '/deleteUser',
    method: 'post',
    data: params
  })
}
export { getAsideList, getGoodsList, getSalesList, createUser, getUserList, updateUser, deleteUser }