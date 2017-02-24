<template>
    <div class="me">
        <div class="auserinfo">
            <img class="auserinfo-avatar " v-if="userInfo.avatar_url" :src="userInfo.avatar_url">
            <img class="auserinfo-avatar " v-else src="~assets/timg.jpg">
            <p class="auserinfo-nickname">{{userInfo.loginname}}</p>
        </div>
        <div class="me-item">
            <mt-cell title="我的消息" is-link :to="{ name: 'message' }">
                <i slot="icon" class="iconfont icon-xiaoxi"></i>
            </mt-cell>
            <mt-cell title="发布主题" is-link :to="{ name: 'post' }">
                <i slot="icon" class="iconfont icon-fabu"></i>
            </mt-cell>

            <mt-cell title="关于" is-link :to="{ name: 'about' }">
                <i slot="icon" class="iconfont icon-about2"></i>
            </mt-cell>
        </div>
    </div>
</template>

<script>
    import MtCell from '../components/cell.vue'
    import { mapState } from 'vuex'
    export default {
        components: {
            MtCell
        },
        computed: mapState({
            userInfo: state => state.user.userInfo
        })
    }
</script>

<style lang="css" scoped>
.me{
    width:100%;
    height: 100%;
    /* min-height: calc(100vh); */
    background: #eee;
    position: absolute;
    top: 0;
    left: 0;
}
.auserinfo{
  margin-top:43px;
  position: relative;
  width: 100%;
  height: 150px;
  background: #444;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.auserinfo-avatar {
  display: block;
  width: 80px;
  height: 80px;
  margin: 10px;
  margin-top: 25px;
  border-radius: 50%;
}

.auserinfo-nickname {
  color: #fff;
  font-size: 14px;
}

.me-item{
}
.me-item .iconfont{
    font-size:22px;
    color:#80bd01;
    vertical-align: middle;
}
</style>