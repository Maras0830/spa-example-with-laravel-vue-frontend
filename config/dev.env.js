var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_END_POINT: '"http://spa-laravel.codingweb.tw/api"',
})
