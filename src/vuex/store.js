import Vue from 'vue'
import Vuex from 'vuex'
import posts from './posts/store'

Vue.use(Vuex)

const debug = process.env.NODE_ENV === 'development'

const store = new Vuex.Store({
  modules: {
    posts
  },
  strict: debug
})

if (module.hot) {
  module.hot.accept([
    './posts/store'
  ], () => {
    store.hotUpdate({
      modules: {
        posts: require('./posts/store').default
      }
    })
  })
}

export default store
