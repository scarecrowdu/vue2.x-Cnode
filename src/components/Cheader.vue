<template>
    <div class="header">
        <div class="head-box" :class="{ 'is-fixed': fixed }">
          <header class="head-logo clearfix">
              <i class="head-logo-menu iconfont icon-fenlei1" @click="showMenuSlide"></i>
              <!-- <i class="head-logo-icon iconfont icon-logo"></i> -->
              <img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" class="logo-img">
          </header>
        </div> 
        <menu-slide :show="show" @hideMenuSlide="hideMenuSlide"></menu-slide>
    </div>
</template>

<script>
   
   import MenuSlide from './Menu.vue'
   export default {
      props: {
         fixed: Boolean,
      },
      data () {
          return {
              show : false
          }
      },
      methods: {
        // 显示MenuSlide
        showMenuSlide () {
            this.show = true
        },
        // 隐藏MenuSlide
        hideMenuSlide (){
            this.show = false
        }
      },
      components: {
          MenuSlide
      }
   }

</script>

<style lang="css" scoped>
    .is-fixed{
        position: fixed;
    }
    .head-box{
        width:100%;
        top:0;
        z-index:1;
        max-width: 640px;
    }
    .head-logo{
        height: 43px;
        line-height:43px;
        background: #444;
        text-align:center;
        position: relative;
    }
    .head-logo .head-logo-icon{
        font-size:28px;
        color: #80bd01;
    }
    .head-logo .head-logo-menu{
        position: absolute;
        top: 0;
        left: 20px;
        font-size: 20px;
        color: #fff;
    }
    .logo-img{
        width:120px;
        vertical-align: middle;
    }
</style>