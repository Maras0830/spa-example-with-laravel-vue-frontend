<template>
  <div id="app" :style="{'max-width': screenWidth + 'px'}">
    <div id="rwdBtn">
      <div class="btn blank"></div>
      <div class="btn xl" @click="screenSize('xl')" :class="{'actived' : nowRwd === 'xl', 'twinkle' : twinkle === 'xl'}">Large</div>
      <div class="btn md" @click="screenSize('md')" :class="{'actived' : nowRwd === 'md' || nowRwd === 'xl', 'twinkle' : twinkle === 'md'}">Medium</div>
      <div class="btn sm" @click="screenSize('sm')" :class="{'actived' : nowRwd === 'sm' || nowRwd === 'md' || nowRwd === 'xl', 'twinkle' : twinkle === 'sm'}">Small</div>
      <div class="btn md" @click="screenSize('md')" :class="{'actived' : nowRwd === 'md' || nowRwd === 'xl', 'twinkle' : twinkle === 'md'}">Medium</div>
      <div class="btn xl" @click="screenSize('xl')" :class="{'actived' : nowRwd === 'xl', 'twinkle' : twinkle === 'xl'}">Large</div>
      <div class="btn blank"></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      screenWidth: 700,
      nowRwd: 'md',
      twinkle: 'md'
    }
  },
  methods: {
    screenSize (size) {
      if (size === 'xl') {
        this.screenWidth = 1024
      } else if (size === 'md') {
        this.screenWidth = 700
      } else if (size === 'sm') {
        this.screenWidth = 480
      }
      this.nowRwd = size
      this.twinkle = size
    }
  }
}
</script>

<style lang="sass">
@import '~stylesheets/mixin'
@import '~stylesheets/keyframes'
html, body
  margin: 0
  padding: 0
  background-color: #FAFAFA
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #333
  margin: 40px auto
  +transition(max-width, 0.5s, ease)
#rwdBtn
  position: fixed
  top: 0
  left: 0
  display: flex
  width: 100%
  .btn
    background-color: rgba(#000, 0.3)
    color: #fff
    padding: 6px 10px
    text-align: center
    border:
      left: 1px solid rgba(#fff, 0.3)
    cursor: pointer
    &.blank
      background-color: rgba(#000, 0.1)
      flex: 1
    &.xl
      width: 140px
    &.md
      width: 90px
    &.sm
      width: 460px
    &.actived
      background-color: rgba(#000, 0.5)
    &.twinkle
      animation-name: twinkle
      animation-duration: 1.5s
      animation-iteration-count: infinite
</style>
