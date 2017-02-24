<template>
  <div class="page login">
    <div class="login-item">
      <img class="login-item-img" src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg">
      <div class="login-item-section">
        <input placeholder="请输入Token" class="login-item-input" type="text" v-model="accesstoken" />
      </div>
      <div class="login-item-button">
        <button class="login-button" @click="isLogin"> 登录 </button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import api from '../fetch/api'
  import tool from '../util/tool'
  export default {
    data() {
      return {
        accesstoken: ''
      }
    },
    methods: {
      ...mapActions({ setUserInfo: 'setUserInfo' }),
      // 用户登录  
      isLogin() {
        if (!this.accesstoken) {
          return tool.toast('Token不能为空')
        }
        api.Login(this.accesstoken)
          .then(res => {
            if (res.success) {
              let userInfo = Object.assign({ accesstoken: this.accesstoken }, res)
              this.setUserInfo(userInfo)
              this.$router.go(-1)
            }
          })
          .catch(error => {
            console.log(error)
          })

      }
    }
  }

</script>

<style lang="css" scoped>
.login{
    overflow: hidden;
    width: 100%;
    height: 100%;
    min-height: calc(100vh);
    /* position: absolute; */
    /* top:0; */
    /* let:0; */
    background: #444;
}

.login-item{
  text-align: center;
}

.login-item-img{
  width:  250px;
  margin-top: 60px;
  margin-bottom:15px;
}
.login-item-section{
  width:  250px;
  margin: 20px auto;
  padding: 5px 10px;
  border-bottom: 1px solid rgba(136, 136, 136, 0.6);
  background: rgba(136, 136, 136, 0.6);
}
.login-item-section .login-item-input{
  width:100%;
  color: #fff;
  height: 25px;
  line-height: 25px;
  font-size: 14px;
  background: rgba(255, 255, 255, 0);
}

.login-item-button{
  display:block;
  width:250px;
  margin: 25px auto 10px auto;
}
.login-button{
  width:100%;
  padding:8px;
  font-size: 14px;
  border:1px solid #80bd01;
  background: #80bd01;
  border-radius:3px;
  color:#fff;
}

.error-msg{
  color: red;
}

</style>