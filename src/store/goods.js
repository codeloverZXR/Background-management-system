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
  EDITGOOD(state, {form, index}) {
    state.goodsList[index] = form
  },
  DELGOOD(state, index) {
    state.goodsList.splice(index, 1)
  },
  EXCHANGEGOOD(state, {from, to}) {
    console.log(from, to, '11')
    const orgGood = state.goodsList[to]
    state.goodsList[to] = state.goodsList[from]
    state.goodsList[from] = orgGood
  }
}
const actions = {
  addGood({commit}, form) {
    commit('ADDGOOD', form)
  },
  editGood({commit}, keyword) {
    commit('EDITGOOD', keyword)
  },
  delGood({commit}, index) {
    commit('DELGOOD', index)
  },
  exchangeGood({commit}, keyword) {
    commit('EXCHANGEGOOD', keyword)
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