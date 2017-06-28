import Vue from 'vue'
import Vuex from 'vuex'
import posts from './posts/store'
import auth from './auth/store'

Vue.use(Vuex)

const debug = process.env.NODE_ENV === 'development'

const store = new Vuex.Store({
  modules: {
    posts,
    auth
  },
  strict: debug
})

if (module.hot) {
  module.hot.accept([
    './posts/store',
    './auth/store'
  ], () => {
    store.hotUpdate({
      modules: {
        posts: require('./posts/store').default,
        auth: require('./auth/store').default
      }
    })
  })
}

export default store
