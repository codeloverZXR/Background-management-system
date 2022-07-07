const state = {
  isCollapse: false,
  tabsList: [{
    path: "/",
    name: "home",
    label: "首页",
    icon: "s-home",
    url: "Home/Home"
  }],
}
const mutations = {
  CHANGEISCOLLAPSE(state) {
    state.isCollapse = !state.isCollapse
  },
  ADDTABSLIST(state, value) {
    if (state.tabsList.indexOf(value) === -1 && value.name != 'home') {
      state.tabsList.push(value)
    }
  },
  REMOVETAG(state, value) {
    state.tabsList.splice(state.tabsList.indexOf(value), 1)
  }
}
const actions = {

}
const getters = {

}
const lab = {
  state,
  mutations,
  actions,
  getters

}
export default lab
