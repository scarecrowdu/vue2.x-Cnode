<template>
    <div class="about">
        <cheader></cheader>

        <div class="auserinfo">
            <img class="auserinfo-avatar" src="~assets/vincentSea.jpg">
            <p class="auserinfo-nickname">vincentSea</p>
        </div>
        
        <div class="about-box">
            <div class="about-item">
                <p class="about-item-title">关于项目</p>
                <p class="about-item-content">使用cnode社区api做微信小应用（实现了数据的读取、展示，滑到底部加载下一页，loading加载）</p>
            </div>
            <div class="about-item">
                <p class="about-item-title">源码地址</p>
                <p class="about-item-content link">https://github.com/vincentSea</p>
            </div>
            <div class="about-item">
                <p class="about-item-title">My GitHub</p>
                <p class="about-item-content link">https://github.com/vincentSea</p>
            </div>
            <div class="about-item">
                <p class="about-item-title">参考资料</p>
                <p class="about-item-content link">https://github.com/coolfishstudio/wechat-webapp-cnode</p>
            </div>
            <div class="about-item">
                <p class="about-item-title">当前版本</p>
                <p class="about-item-content ">V1.0.0 Beta</p>
            </div>
        </div>
    </div>
</template>

<script>

   import Cheader from '../components/Cheader.vue'
   export default {
     components:{
       Cheader
     }
   }
   

</script>

<style lang="css" scoped>

.about{
  height: 100%;
  height:100vh;
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
  font-size: 15px;
  line-height: 30px;
}
.about-item-content{
  margin-top: 5px;
  display: block;
  text-indent: 20px;
}

.link{
  color: #80bd01;
  text-decoration: underline;
}

</style>