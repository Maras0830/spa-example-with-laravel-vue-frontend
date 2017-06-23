<template lang="pug">
.post-list
  .post-wrap
    .post(@click="commentsToggle = !commentsToggle")
      //- a.title(:href="post.url")
      .title
        div {{post.title}}
      .content-wrap
        img.avatar(:src="'https://randomuser.me/api/portraits/women/' + (index + 56) + '.jpg'")
        .content-right
          .name {{ post.author.data.name }}
            span.time {{ post.time_ago}}
          //- a.email(href="post.author.data.email")  Email
          .content {{ post.content }}
      .extra-btn
        .heart.function-btn.fa.fa-heart Heart
        .comment.function-btn.fa.fa-comment Comment ( {{ commentCounts }} )
        .reply.function-btn.fa.fa-reply Share
    .comments-wrap(:class="{ 'hide' : commentsToggle }")
      .comments(v-for="comment, index in post.comments.data")
        //- h3 {{ comment.title }}
        .content-wrap
          img.avatar(v-if="index % 2 === 0", :src="'https://randomuser.me/api/portraits/men/' + (index + 20) + '.jpg'")
          img.avatar(v-else, :src="'https://randomuser.me/api/portraits/women/' + (index + 17) + '.jpg'")
          .content-right
            .name {{ comment.author.data.name }}
              span.time  {{ comment.time_ago }}
            .content  {{ comment.content }}
            .extra-btn
              .heart.function-btn Heart
              .comment.function-btn Comment
        //- .sub_comment(v-if="comment.sub_comments.data.length > 0", v-for="subComment in comment.sub_comments.data") {{ subComment.title }}
          .content {{ subComment.content }}
</template>

<script>
export default {
  props: {
    post: {
      type: [Object, Array]
    },
    index: {
      type: Number
    },
    commentCounts: {
      type: Number
    }
  },
  data () {
    return {
      commentsToggle: true
    }
  }
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
    // max-height: 1000px
    // opacity: 1
    +transition(opacity, 0.3s, ease)
    // +transition(max-height, 0.3s, ease)
    &.hide
      overflow: hidden
      max-height: 0
      // visibility: hidden
      padding: 0
      // opacity: 0
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
