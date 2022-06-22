import requestBymock from "./requestBymock";
const getAsideList = () => {
  return requestBymock({
    url: '/asideList',
    method: 'get'
  })
}
export { getAsideList }