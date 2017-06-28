const Promise = window.Promise || require('promise')
const request = require('superagent-promise')(require('superagent'), Promise)
const API_END_POINT = process.env.API_END_POINT
const AUTH_USER_URL = API_END_POINT + '/login'
const AUTH_ME_URL = API_END_POINT + '/me'
const generateAuthResponse = (res) => {
  const response = JSON.parse(res.text)

  return Promise.resolve(response)
}
const generateResponse = (res) => {
  const response = JSON.parse(res.text)

  return Promise.resolve(response.data)
}
const generateErrorResponse = (err) => {
  const response = JSON.parse(err.response.text)
  if (response instanceof Array) {
    var errorMessage = []
    for (var error in response) {
      errorMessage.push(response[error][0])
    }
    response.error = errorMessage
  }
  return Promise.reject({
    status: 'err',
    messages: response.error
  })
}

export default {
  API_END_POINT: API_END_POINT,
  post (email, password) {
    let req = request.post(AUTH_USER_URL).send({'email': email, 'password': password})
    return req
      .end()
      .then(generateAuthResponse, generateErrorResponse)
  },
  get (accessToken) {
    let req = request.get(AUTH_ME_URL).set('Authorization', 'Bearer ' + accessToken).set('Accept', 'application/json')
    return req
      .end()
      .then(generateResponse, generateErrorResponse)
  }
}
