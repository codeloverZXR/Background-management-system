import Cookie from 'js-cookie'

const state = {
  token: ''
}
const mutations = {
  SETTOKEN(state, value) {
    //本地vuex中存储token
    state.token = value
    //浏览器生成值为token的cookie
    Cookie.set('token', value)
  },
  ClEARTOKEN(state, value) {
    state.token = ''
    Cookie.remove('token')
  },
  GETTOKEN(state) {
    //获取token保存在本地vuex中，主要是为了解决页面刷新，cookie丢失的情况
    state.token = state.token || Cookie.get('token')
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