<template>
  <div class="topics">


    <nav class="nav-box clearfix">
      <ul class="nav-bar">
        <li v-for="(item, index) in itemTab" class="nav-bar-item" :class="{'nav-bar-active':initIndex === index}" v-on:click="changeTab(index)">{{item.title}}</li>
      </ul>
    </nav>

    <section class="scroll-posts-list" v-if="topicsList">
      <div class="posts-list" v-for="(item,index) in topicsList">
        <router-link :to="{name:'detail',params:{id:item.id}}">
          <div class="posts-list-info clearfix">
            <img class="userimg" :src="item.author.avatar_url" />
            <div class="item-box">
              <div class="userinfo">
                <span class="username">{{item.author.loginname}}</span>
                <span class="time">{{item.last_reply_at | formatDate}}</span>
              </div>
              <div class="posts-title">
                <div class="posts-tag hot" v-if="item.top === true">置顶</div>
                <div class="posts-tag" v-else-if="item.good === true">精华</div>
                <span>{{item.title}}</span>
              </div>
            </div>
          </div>
          <div class="bar-info clearfix">
            <div class="bar-info-item">
              <i class="bar-info-item-icon iconfont icon-tubiao"></i>
              <p class="bar-info-item-number">{{item.reply_count}}</p>
            </div>
            <div class="bar-info-item">
              <i class="bar-info-item-icon iconfont icon-yuedu2"></i>
              <p class="bar-info-item-number">{{item.visit_count}}</p>
            </div>
            <div class="bar-info-item2">
              <i class="bar-info-item-icon iconfont icon-biaoqian"></i>
              <p class="bar-info-item-number" v-if="item.tab === 'good'">精华</p>
              <p class="bar-info-item-number" v-else-if="item.tab === 'share'">分享</p>
              <p class="bar-info-item-number" v-else-if="item.tab === 'ask'">问答</p>
              <p class="bar-info-item-number" v-else-if="item.tab === 'job'">招聘</p>
            </div>
          </div>
        </router-link>
      </div>
    </section>
    <div class="loading-box" v-show="loading">
      <loading></loading>
    </div>
  </div>
</template>

<script>
  import Loading from '../components/Loading.vue'
  import Cheader from '../components/Cheader.vue'
  import { mapGetters, mapState } from 'vuex'
  export default {
    components: {
      Cheader,
      Loading
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        window.addEventListener('scroll', vm.scrollArtlist, false)
      })
    },
    beforeRouteLeave(to, from, next) {
      window.removeEventListener("scroll", this.scrollArtlist, false)
      next()
    },
    created() {
      if (this.topicsList.length == 0) {
        this.$store.dispatch('getTopicsList')
      }
    },
    // mounted () {
    //   window.addEventListener('scroll', this.scrollArtlist, false)
    // },
    computed: {
      ...mapGetters({
        topicsList: 'getTopicsList',
        loading: 'loading'
      }),
      ...mapState({
        initIndex: state => state.com.initIndex,
        itemTab: state => state.com.itemTab,
      })
    },
    methods: {
      // 标签tab切换方法
      changeTab(index) {
        window.scroll(0, 0)
        this.topicsList = []
        this.$store.commit('COM_INIT_INDEX', index)
        this.$store.commit('GET_SEARCH_KEY', { page: 0, tab: this.itemTab[index].type })
        this.$store.dispatch('getTopicsList')
      },
      // 超过滚动获取数据方法
      scrollArtlist() {
        let totalheight = parseFloat(window.innerHeight) + parseFloat(window.scrollY);
        if (document.body.clientHeight <= totalheight + 200) {
          this.$store.dispatch('getTopicsList')
        }
      }
    }
  }
</script>


<style lang="css" scoped>
.loading-box{
  margin:15px auto;
  text-align:center;
}
.loading-box div{
  margin:auto;
}
.topics{
  background:#fff;
}

/*导航 nav*/
.nav-bar {
  position: fixed;
  top:43px;
  z-index:1;
}
.nav-bar {
  width:100%;
  height: 32px;
  background: #444;
}
.nav-bar-item {
  float:left;
  display:inline-block;
  width: 20%;
  color: #80bd01;
  text-align: center;
  line-height: 28px;  
}
.nav-bar-active{
  color: #fff;
  font-size: 16px;
}


/*列表 list*/
.scroll-posts-list{
  overflow: hidden;
  margin-top:75px;
}
.posts-list{
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid #80bd01;
}
.posts-list a{
  display: block;
  padding: 0 15px;
}
.posts-list-info{
  overflow: hidden;
  display: flex;
  margin-top: 15px;
  // padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}
.posts-list-info .userimg{
  overflow: hidden;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.posts-list-info .item-box{
  flex: 1;
  margin-left: 15px;
}
.posts-list-info .item-box .userinfo{
  display: flex;
}
.posts-list-info .item-box .userinfo .username,
.posts-list-info .item-box .userinfo .time{
  flex: 1;
  font-size:15px;
}
.posts-list-info .item-box .userinfo .time{
  text-align: right;
  color: #555;
}
.posts-list-info .item-box .posts-title{
  height: 40px;
  margin: 10px 0;
  font-size: 14px;
  color: #35495e;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.posts-list-info .item-box  .posts-tag{
  display: inline-block;
  width: 36px;
  height:18px;
  text-align: center;
  // line-height:18px;
  margin-right: 5px;
  font-size: 12px;
  color: #80bd01;
  border: 1px solid #80bd01;
}
.posts-list-info .item-box .hot{
  color: red;
  border: 1px solid red;
}
.posts-list .bar-info .bar-info-item{
  display: inline-block;
  margin-right: 25px;
  line-height: 30px;
  color:#333;
}
.posts-list .bar-info .bar-info-item-icon{
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  font-size:18px;
}
.posts-list .bar-info .bar-info-item .iconfont{
  color: #d81e06;
}
.posts-list .bar-info .bar-info-item-number{
  display: inline-block;
  vertical-align: middle;
}

.posts-list .bar-info .bar-info-item2{
  display: inline-block;
  float: right;
  line-height: 33px;
}
.posts-list .bar-info .bar-info-item2 .iconfont{
  color: #80bd01;
}
.posts-list .bar-info .bar-info-item2 .bar-info-item-number{
}
</style>