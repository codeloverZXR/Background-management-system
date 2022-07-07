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
export { getAsideList, getGoodsList, getSalesList }