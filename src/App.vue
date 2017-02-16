<template>
  <div class="app">
     <cheader fixed :show="show"></cheader>
     <!-- <transition name="fade" mode="out-in">-->
     <keep-alive>    
          <router-view></router-view>
     </keep-alive>
    <!--  </transition> -->
  </div>
</template>

<script>

import Cheader from './components/Cheader.vue'
export default {
  name: 'App',
  data () {
    return {
      show: true  
    }
  },
  components: {
    Cheader
  }
}
</script>

<style lang="scss">
.app {
  overflow: hidden;
  background:#fff;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.child-view {
  position: absolute;
  transition: all .5s cubic-bezier(.55,0,.1,1);
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
