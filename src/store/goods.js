const state = {
  goodsList: [
    {
      name: '香蕉',
      quantity: '>1000',
      date: '2011-10-2',
      location: '境内',
      others: ['需冷藏', '避光存放'],
      remarks: '无'
    },
    {
      name: '苹果',
      quantity: '100 - 500',
      date: '2011-10-2',
      location: '境内',
      others: ['需冷藏'],
      remarks: '无'
    },
    {
      name: '菠萝',
      quantity: '100 - 500',
      date: '2011-10-2',
      location: '境内',
      others: ['需冷藏', '避光存放'],
      remarks: '无'
    },
    {
      name: '橙子',
      quantity: '100 - 500',
      date: '2011-10-2',
      location: '境内',
      others: ['需冷藏'],
      remarks: '无'
    },
  ]
}
const mutations = {
  ADDGOOD(state, form) {
    state.goodsList.push(form)
  },
  EDITGOOD(state, form, index) {
    state.goodsList[index] = form
  },
  DELGOOD(state, index) {
    state.goodsList.splice(index, 1)
  }
}
const actions = {
  addGood({commit}, form) {
    commit('ADDGOOD', form)
  },
  editGood({commit}, form, index) {
    commit('EDITGOOD', form, index)
  },
  delGood({commit}, index) {
    commit('DELGOOD', index)
  }
}
const getters = {}
const goods = {
  state,
  mutations,
  actions,
  getters
}
export default goods