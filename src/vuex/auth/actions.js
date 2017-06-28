import auth from '../../api/auth'
import * as types from '../mutation-types'

export const submitLogin = ({ commit, rootState }, credentials) => {
  return auth.post(credentials.email, credentials.password).then((data) => {
    commit(types.AUTH_USER, data.user)
    localStorage.setItem('spaUserToken', data.token)
    localStorage.setItem('spaUserTTL', data.token_ttl)
    return data
  }, (err) => {
    return Promise.reject(err)
  })
}

export const getAuthUser = ({ commit, rootState }, accessToken) => {
  return auth.get(accessToken).then((data) => {
    commit(types.AUTH_USER, data)
    return data
  }, (err) => {
    return Promise.reject(err)
  })
}
