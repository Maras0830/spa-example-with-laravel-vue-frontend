<template>
<div>
  <div class="login-form">
    <ul v-for="post in getPostsList">
      <li style="color:red">{{ post.title }}</li>
      <li>{{ post.content }}</li>
      <li><a v-bind:href="'mailto:'+ post.author.data.email">{{ post.author.data.name }}</a></li>
      <li>{{ post.time_ago }}</li>

      <ul v-for="comment in post.comments.data">
        <li style="color:green">{{ comment.title }}</li>
        <li>{{ comment.content }}</li>
        <li><a v-bind:href="'mailto:'+ comment.author.data.email">{{ comment.author.data.name }}</a></li>
        <li>{{ comment.time_ago }}</li>
        <ul v-for="sub_comment in comment.sub_comments.data">
          <li style="color:blue">{{ sub_comment.title }}</li>
          <li>{{ sub_comment.content }}</li>
          <li><a v-bind:href="'mailto:'+ sub_comment.author.email">{{ sub_comment.author.data.name }}</a></li>
          <li>{{ sub_comment.time_ago }}</li>
        </ul>
      </ul>
    </ul>
    <div class="card">
      <h1 class="title">Login</h1>
      <form v-on:submit.prevent="onSubmit">
        <div class="input-container">
          <label for="email">Email:</label>
          <input type="text" name="email" id="email">
        </div>
        <div class="input-container">
          <label for="password">Password:</label>
          <input type="password" name="password" id="password">
        </div>
        <div class="button-container">
          <button>Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'hello',
  created () {
    let q = this.$route.query
    if (typeof q !== 'undefined') {
      if (typeof q.page !== 'undefined') {
        this.page = parseInt(q.page, 10)
      }
    }
    this.$watch(() => {
      if (typeof q !== 'undefined') {
        this.onLoading = true
        this.fetchPosts().then(() => {
          this.onLoading = false
        })
      }
    })
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: mapGetters([
    'getPostsList'
  ]),
  methods: Object.assign(
    mapActions([
      'fetchPosts'
    ])
  )
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    margin: 30px;
  }
  li {
    list-style-type: none;
  }
</style>
