<template lang="pug">
.post-ist
  .post-wrap(v-for="post in getPostsList")
    .post
      a.title(:href="post.url")
        div {{post.title}}
      span.time {{ post.time_ago}}
      .author
        .avatar
        .name {{ post.author.data.name }}
        a.email(href="post.author.data.email")  email 
      .content {{ post.content }}
    .comments-wrap
      .comments(v-for="comment in post.comments.data")
        //- h3 {{ comment.title }}
        .time  {{ comment.time_ago }}
        .name {{ comment.author.data.name }}
        .content  {{ comment.content }}
        div(v-if="comment.sub_comments.data.length > 0", v-for="subComment in comment.sub_comments.data") {{ subComment.title }}
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'hello',
  data () {
    return {
    }
  },
  computed: mapGetters([
    'getPostsList'
  ]),
  methods: Object.assign(
    mapActions([
      'fetchPostsList'
    ])
  ),
  created () {
    this.fetchPostsList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  .post-wrap
    box-shadow: 0 0 20px 3px rgba(#000, 0.1)
    background-color: #FFF
    margin-bottom: 32px
    .post
      padding: 16px 24px 24px 24px
      .title
        color: #888
        font-size: 32px
        font-weight: bold
      .time
        color: #888
      .author
        margin-bottom: 8px
        .avatar
          width: 60px
          height: 60px
          background-color: #666
          border-radius: 50%
        .name
          font-weight: bold
        .email
          color: #666
          // text-decoration: none
      .content

    .comments-wrap
      padding: 16px 16px 16px 40px
      background-color: #f5f5f5
      .comments
        margin-bottom: 16px
        .time
          color: #888
        .name
          font-weight: bold
          margin-bottom: 8px
        .content
          color: #555
</style>
