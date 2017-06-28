import * as actions from './actions'
import * as getters from './getters'
import * as types from '../mutation-types'

const state = {
  user: {}
}

const mutations = {
  [types.AUTH_USER] (state, data) {
    state.user = data
  }
}

export default {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
}
