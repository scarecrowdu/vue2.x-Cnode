<template>
    <div class="header">
        <div class="head-box" :class="{ 'is-fixed': fixed }">
            <header class="head-logo clearfix">
                <i class="head-logo-menu iconfont icon-fenlei1" v-if="icon" @click="showMenuSlide"></i>
                <i class="head-logo-back iconfont icon-fanhui" v-if="!icon" @click="goHistory"></i>
                <img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" class="logo-img">
            </header>
        </div>
        <menu-slide :show="leftNavStatus" @hideMenuSlide="hideMenuSlide"></menu-slide>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    import MenuSlide from './Menu.vue'
    export default {
        props: {
            fixed: Boolean,
            icon: Boolean
        },
        computed: mapState({
            leftNavStatus: state => state.com.leftNavStatus
        }),
        methods: {
            ...mapActions({ setNavState: 'setNavState' }),

            // 显示MenuSlide
            showMenuSlide() {
                this.setNavState(true)
            },
            // 隐藏MenuSlide
            hideMenuSlide() {
                this.setNavState(false)
            },
            // 返回上一页
            goHistory() {
                this.$router.go(-1)
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
    .head-logo .head-logo-menu,
    .head-logo-back{
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