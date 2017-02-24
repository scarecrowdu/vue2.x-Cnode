<template>
  <div class="about">
    <div class="auserinfo">
      <img class="auserinfo-avatar" src="~assets/vincentSea.jpg">
      <p class="auserinfo-nickname">vincentSea</p>
    </div>

    <div class="about-box">
      <div class="about-item">
        <p class="about-item-title">关于项目</p>
        <p class="about-item-content">vue2.x Cnode社区是基于vue、vue-router、vuex、axios、es6开发，使用webpack构建工具编译打包项目（如果此开源项目对大家学习vue的全家桶有帮助，请给我一个star,因为你的star让我觉得这个开源有了价值！）</p>
      </div>
      <div class="about-item">
        <p class="about-item-title">源码地址</p>
        <p class="about-item-content link">https://github.com/vincentSea/vue2.x-Cnode</p>
      </div>
      <div class="about-item">
        <p class="about-item-title">博客地址</p>
        <p class="about-item-content link">http://dudodo.cc/</p>
      </div>
      <div class="about-item">
        <p class="about-item-title">技术感谢</p>
        <p class="about-item-content">初心想开发基于vue的cnode社区，也是借此学习和熟悉vue2.x，也可以随意设计社区界面。感谢<a href="https://cnodejs.org/">cnodejs</a>社区提供的api接口，在此也感谢之前已经基于vue开过cnode社区的开发人员，因为也有借鉴他们的代码实现.以下人员特别感谢开源代码，</p>
        <p class="about-item-content"><a href="https://github.com/shinygang/Vue-cnodejs">@shinygang</a></p>
        <p class="about-item-content"><a href="https://github.com/lzxb/vue-cnode">@lzxb</a></p>
        <p class="about-item-content"><a href="https://github.com/cwsjoker/Cnode-vue-spa">@cwsjoker</a></p>
      </div>
      <div class="about-item">
        <p class="about-item-title">当前版本</p>
        <p class="about-item-content ">V1.0.0 Beta</p>
      </div>
    </div>
  </div>
</template>

<script>
   export default {
     
   }
</script>

<style lang="css" scoped>

.about{
  height: 100%;
  margin-top:43px;
}
.top-box{
  position:static;
}
.auserinfo{
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

.ausermotto{
  margin-top: 5px;
}

.about-item{
  padding:5px 15px;
}
.about-item-title{
  display: block;
  font-size: 14px;
  line-height: 30px;
}
.about-item-content{
  margin-top: 5px;
  display: block;
  text-indent: 20px;
  color: #333;
  font-size: 13px;
}

.about-item-content a{
    text-decoration: underline;
    color: #80bd01;
}

.link{
  color: #80bd01;
  text-decoration: underline;
}

</style>