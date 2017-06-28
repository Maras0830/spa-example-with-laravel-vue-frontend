import posts from '../../api/posts'
import * as types from '../mutation-types'

export const fetchPostsList = ({ commit, rootState }, params) => {
  return posts.get(params).then((data) => {
    commit(types.POSTS_LIST, data)
    return data
  }, (err) => {
    return Promise.reject(err)
  })
}

export const postReply = ({ commit, rootState }, params) => {
  return posts.postReply(params.accessToken, params.content, params.postId).then((data) => {
    commit(types.POSTS_REPLY_LIST, data)
    return data
  }, (err) => {
    return Promise.reject(err)
  })
}
