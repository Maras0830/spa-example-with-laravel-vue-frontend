<template lang="pug">
.login-form
    h1 Log In
    form(method='POST' v-on:submit.prevent="submitLogin({email,password})")
      div
        label(for='email') Email
        input.form-control(type='text' v-model="email" id='email' placeholder='email' name='email')
      div
        label(for='password') Password
        input.form-control(type='password' v-model="password" id='password' placeholder='password' name='password')
      button.btn.btn-primary(type='submit') Log in 
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'login',
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (typeof localStorage.getItem('spaUserToken') === 'string') {
        vm.getAuthUser(localStorage.getItem('spaUserToken')).then(function () {
          vm.$router.push('/')
        }, function () {
          localStorage.clear()
          alert('請重新登入')
        })
      }
    })
  },
  data () {
    return {
      'email': 'maraschen@codingweb.tw',
      'password': '123456'
    }
  },
  computed: mapGetters([
    'getPostsList',
    'isUserLogin'
  ]),
  watch: {
    isUserLogin: function () {
      this.getAuthUser(localStorage.getItem('spaUserToken')).then(function (e) {
        console.log(this)
        window.location.href = '/'
      })
      console.log('isLogin func')
    }
  },
  methods: Object.assign(
    mapActions([
      'submitLogin',
      'getAuthUser'
    ]),
    {
    }
  )
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import '~stylesheets/mixin'

.post-wrap
  box-shadow: 0px 3px 3px 2px rgba(#000, 0.1)
  background-color: #FFF
  margin-bottom: 32px
  .post
    padding: 16px 24px 12px 24px
    .title
      color: #333
      font-size: 24px
      font-weight: bold
      display: block
      margin-bottom: 12px
      text-decoration: none
      text-transform: uppercase
    .content-wrap
      margin-bottom: 12px
      @extend %clearfix
      .avatar
        width: 80px
        height: 80px
        background-color: #666
        float: left
        overflow: auto
      .content-right
        overflow: hidden
        padding-left: 8px
        .name
          font-size: 14px
          font-weight: bold
          margin-bottom: 8px
          .time
            margin-left: 8px
            font-size: 12px
            font-weight: normal
            color: #888
        .email
          color: #666
          // text-decoration: none
        .content
    .extra-btn
      @extend %clearfix
      border-top: 1px solid #ddd
      padding-top: 8px
      .function-btn
        margin-right: 24px
        cursor: pointer
        color: #888
        &:before
          padding-right: 3px
        &:hover
          color: #333

  .comments-wrap
    padding: 12px 16px 16px 32px
    background-color: #f5f5f5
    &.hide
      overflow: hidden
      height: 0
      padding: 0
    .comments
      margin-bottom: 20px
      .content-wrap
        @extend %clearfix
      .avatar
        width: 40px
        height: 40px
        // background-color: #666
        float: left
      .content-right
        border-left: 3px solid #ddd
        margin-left: 46px
        overflow: hidden
        padding-left: 4px
        .name
          font-size: 14px
          font-weight: bold
          margin-bottom: 3px
          .time
            margin-left: 8px
            font-size: 12px
            font-weight: normal
            color: #888
        .content
          color: #555
      .extra-btn
        @extend %clearfix
        // border-top: 1px solid #ddd
        padding-top: 4px
        .function-btn
          margin-right: 8px
          float: left
          font-size: 12px
          font-weight: bold
          cursor: pointer
          color: #888
          &:before
            padding-right: 3px
          &:hover
            color: #333
</style>
