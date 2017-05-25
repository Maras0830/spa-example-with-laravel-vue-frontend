import * as actions from './actions'
import * as getters from './getters'
import * as types from '../mutation-types'

const state = {
  list: {}
}

const mutations = {
  [types.POSTS_LIST] (state, data) {
    state.list = data
  }
}

export default {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
}
