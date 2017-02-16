<template>
    <div class="me">
        <cheader></cheader>
        <div class="me-header">
            <img class="me-avatar" v-if="userInfo.avatar_url" :src="userInfo.avatar_url">
            <img class="me-avatar" v-else src="~assets/timg.jpg">
            <p class="me-nickname">{{userInfo.loginname}}</p>
        </div>
        <div class="me-item">
             <mt-cell title="我的消息">
                <i slot="icon" class="iconfont icon-xiaoxi1"></i>
             </mt-cell>
        </div>
    </div>
</template>

<script>
   import Cheader from '../components/Cheader.vue'
   import MtCell from '../components/cell.vue'
   import { mapState } from 'vuex'
   export default {
       components: {
           Cheader,
           MtCell
       },
       computed: mapState({
          userInfo:state => state.user.userInfo 
       })
   }
</script>

<style scoped>
   .me{
       width:100%;
       height:100vh;
       background:url(../assets/mbg.png);
       background-size: cover;
   }
   .me-header{
       margin-top:15%;
       text-align:center;
       color:#fff;
   }
   .me-header .me-avatar{
       width:25%;
       border-radius:50%;
   }
   .me-item{
       margin-top:40%;
   }
   .me-item .iconfont{
       font-size:22px;
       color:#80bd01;
       vertical-align: middle;
   }
</style>