import Cookie from 'js-cookie'

const state = {
  token: ''
}
const mutations = {
  SETTOKEN(state, value) {
    //本地vuex中存储token
    state.token = value
    //浏览器生成值为token的cookie
    // Cookie.set('token', value)
    sessionStorage.setItem('token', value)
  },
  ClEARTOKEN(state) {
    state.token = ''
    // Cookie.remove('token')
    sessionStorage.removeItem('token')
  },
  GETTOKEN(state) {
    //获取token保存在本地cookie中，主要是为了解决页面刷新，丢失token的情况
    // state.token = Cookie.get('token')
    state.token = sessionStorage.getItem('token')
  }
}
const actions = {}
const getters = {}
const user = {
  state,
  mutations,
  actions,
  getters

}
export default user