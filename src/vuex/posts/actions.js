import posts from '../../api/posts'
import * as types from '../mutation-types'

export const fetchPosts = ({ commit, rootState }, params) => {
  return posts.get(params).then((data) => {
    commit(types.POSTS_LIST, data)
    return data
  }, (err) => {
    return Promise.reject(err)
  })
}
