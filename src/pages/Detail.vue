<template>
  <div class="detail">
    <div class="top-box">
      <header class="head-logo clearfix">
        <i class="head-logo-menu iconfont icon-fenlei1"></i>
        <i class="head-logo-icon iconfont icon-logo"></i>
      </header>
    </div>
    <div class="loading-dox" v-show="loading">
      <loading :size="50"></loading>
    </div>
    <div class="detail-post" v-show="!loading">
      <div class="detail-post-meta">
        <div class="detail-post-avatar">
          <router-link :to="{name:'user',params:{loginname:detail.author.loginname}}" v-if="detail.author">
            <img class="detail-post-avatar-img" v-if="detail.author" :src="detail.author.avatar_url" />
          </router-link>
        </div>
        <div class="detail-post-info">
          <div class="detail-post-author-name">
            <router-link :to="{name:'user',params:{loginname:detail.author.loginname}}" v-if="detail.author">
              <p>{{ detail.author.loginname }}</p>
            </router-link>
            <p class="detail-type-item">
              <span class="detail-type-item-font" v-if="detail.tab === 'good'">#精华#</span>
              <span class="detail-type-item-font" v-else-if="detail.tab === 'share'">#分享#</span>
              <span class="detail-type-item-font" v-else-if="detail.tab === 'ask'">#问答#</span>
              <span class="detail-type-item-font" v-else-if="detail.tab === 'job'">#招聘#</span>
            </p>
          </div>
          <div class="detail-post-time">楼主 发表于{{detail.last_reply_at | formatDate}}</div>
        </div>
        <div class="detail-collect-item" id="">收藏</div>
      </div>

      <div class="detail-post-header">
        <div class="detail-post-title">
          <span class="detail-posts-tag hot" v-if="detail.top === true">置顶</span>
          <span class="detail-posts-tag " v-else-if="detail.good === true">置顶</span> {{ detail.title }}
        </div>
      </div>

      <div class="detail-post-content">
        <div class="content-info" v-html="detail.content"></div>
      </div>

      <div class="detail-post-comment">
        <h2 class="detail-post-comment-title">评论</h2>
        <div class="detail-post-comment-list">
          <div class="detail-post-comment-item" v-if="detail.replies" v-for="(item,index) in detail.replies">
            <div class="detail-post-comment-avatar">
              <img class="detail-post-comment-avatar-img" :src="item.author.avatar_url" />
            </div>
            <div class="detail-post-comment-cell">
              <div class="detail-post-comment-info">
                <div class="detail-post-comment-info-cell">
                  <p class="detail-post-comment-author-name">{{item.author.loginname}}</p>
                  <p class="detail-post-comment-time">{{index + 1}}楼 &bull; 发表于{{item.create_at | formatDate}}</p>
                </div>
                <div class="detail-post-comment-info-cell" style="text-align:right" >
                    <img class="detail-post-zan" mode="scaleToFill" src="../assets/icon/zan.png" />
                    <span class="detail-post-zan-num" v-if="item.zanNum > 0">{{item.zanNum}}</span>
                </div>
                </div>
                <div class="detail-comment-content">
                  <p class="detail-comment-text" v-html="item.content "></p>
                </div>
              </div>
            </div>
            <div class="detail-post-comment-null" v-if="detail.replies == ''">
              <img class="imgnull" mode="scaleToFill" src="../assets/icon/null.png">
              <p class="textnull">暂无收录评论 </p>
            </div>

        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import Loading from '../components/Loading.vue'
  import { mapGetters } from 'vuex'
  export default {
    components: {
      Loading
    },
    beforeRouteEnter(to, from, next) {
      next((vm) => {
        vm.detail = {}
        vm.getDetailData(vm)
      })
    },
    mounted() {
      //  this.getDetailData(this) 
    },
    computed: mapGetters({
      detail: 'getDetail',
      loading: 'loading'
    }),
    methods: {
      getDetailData(el) {
        window.scroll(0, 0)
        let id = el.$route.params.id
        el.$store.dispatch('getDetail', id)
      }
    }
  }

</script>

<style lang="css" scoped>
.loading-dox{
  margin:50px auto;
  text-align:center;
}
.loading-dox div{
  margin:auto;
}
.detail-post-meta{
  margin-top:23px;
  padding: 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.detail-post-avatar{
  margin-right: 10px;
}

.detail-post-time{
  color: #888;
  font-size: 12px;
}

.detail-post-avatar-img{
  width: 44px;
  height: 44px;
  border-radius: 50%;
}
.detail-post-info{
  flex: 1;
}

.detail-collect-item{
  width: 50px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  color: #fff;
  background: #80bd01;
  border-radius: 3px;
  margin-left: 10px;
  cursor: pointer;
}
.detail-type-item{
  display: inline-block;
}

.detail-type-item-icon{
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
}
.detail-type-item-font{
  display: inline-block;
  vertical-align: middle;
  margin-left: 5px;
  color: #80bd01;
  font-size: 14px;
}
.hot{
  border: 1px solid red !important;
  color: red !important;
}

.detail-post-header{
  display: flex;
  padding: 14px;
}
.detail-posts-tag{
  display: inline-block;
  width: 40px;
  height: 21px;
  text-align: center;
  line-height: 21px;
  margin-right: 5px;
  font-size: 12px;
  color: #80bd01;
  border: 1px solid #80bd01;
}
.detail-post-title{
  flex: 1;
  font-size: 15px;
}

.detail-post-content{
  overflow-x: hidden;
  padding: 15px;
}
.detail-post-content img{
  width:100%;
}
.content-info {
  color: #6c6c6c;
  word-wrap: break-word;
}


.detail-post-comment{
  overflow: hidden;
  border-top: 10px solid #eee;
}

.detail-post-comment-item{
  display: flex;
}
.detail-post-comment-title{
  position: relative;
  line-height: 40px;
  padding: 0 15px;
  font-size: 15px;
  border-bottom: 1px #eee solid;
}

.detail-post-comment-avatar-img{
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.detail-post-comment-cell{
  overflow: hidden;
  flex: 1;
  margin-left: 10px;
}
.detail-post-comment {
  background-color: #fff;
}
.detail-post-comment-item {
  padding: 15px 0;
  margin: 0 15px;
  background: #fff;
  border-bottom: 1px #eee solid;
}
.detail-post-comment-item:last-child{
  border-bottom: none;
}

.detail-post-comment-info{
  display: flex;
}
.detail-post-comment-info-cell{
  flex: 1;
}
.detail-post-zan{
  width: 16px;
  height: 16px;
  display: inline-block;
}
.detail-post-zan-num{
  display: inline-block;
  margin-left: 5px;
  color: #888;
}

.detail-post-comment-time{
  font-size: 12px;
  color: #666;
}
.detail-comment-content{
}
.detail-comment-text {
  overflow: hidden;
  display: block;
  margin: 10px 0;
  font-size: 14px;
  word-wrap: break-word;
}
.detail-comment-text img{
  max-width:100%;
  width:100%;
  
}

.detail-post-comment-null{
  margin: 25px auto;
  text-align: center;
}
.detail-post-comment-null .imgnull{
  margin: 2px auto;
  width: 100px;
  height: 100px;
}
.detail-post-comment-null .textnull{
  display: block;
  color: #80bd01;
}

</style>