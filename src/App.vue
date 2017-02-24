<template>
  <div class="app">
    <cheader v-if="headerShow" fixed :icon="iconType"></cheader>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>

  import Cheader from './components/Cheader.vue'
  import { mapActions } from 'vuex'

  export default {
    name: 'App',
    data() {
      return {
        iconType: true,
        headerShow: true
      }
    },
    created() {
      if (this.$route.name == "login") { this.headerShow = false }
      if (this.$route.name == "detail") { this.iconType = false }
    },
    components: {
      Cheader
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'hideMenuSlide'
    },
    methods: {
      ...mapActions({ setNavState: 'setNavState' }),
      // 隐藏MenuSlide
      hideMenuSlide() {
        this.setNavState(false)
      }
    }
  }

</script>

<style lang="scss">
.app {
  overflow: hidden;
  height: 100%;
  min-height: calc(100vh);
  background:#fff;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.child-view {
  position: absolute;
  transition: all .2s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>