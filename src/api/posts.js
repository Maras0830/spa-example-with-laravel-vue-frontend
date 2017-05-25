const Promise = window.Promise || require('promise')
const request = require('superagent-promise')(require('superagent'), Promise)
const API_END_POINT = process.env.API_END_POINT
const POSTS_LIST = API_END_POINT + '/posts'
const generateResponse = (res) => {
  const response = JSON.parse(res.text)

  console.log(response.data)
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
  get (params) {
    let req = request.get(POSTS_LIST).query(params)
    return req
      .end()
      .then(generateResponse, generateErrorResponse)
  }
}
