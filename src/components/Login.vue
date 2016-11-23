<template>
  <div class="loginBox">
    <p v-if="$route.query.redirect">
      你需要先登录。
    </p>
    <form  v-if="!msg">
      <label>手机号:<input v-model="mobile" placeholder="请输入手机号" maxlength="11"></label>{{tip}}<br>
      <label>手机验证码:<input v-model="verify" placeholder=""></label><button :disabled="mobile.length<11" class="btn" @click='code'>获取验证码</button><br>
      <button :disabled="!verify || !mobile" @click='login' class="btn" type="submit">登录</button>
    </form>
    <p v-if="msg" class="error">{{msg}}</p>
  </div>
</template>

<script>
/* eslint-disable */
//import auth from '../auth'
export default {
  data () {
    return {
      loginUrl: 'http://api.lessoald.cn/auth/login/mobile',
      loginCode: 'http://api.lessoald.cn/auth/login/code',
      mobile: '',
      verify: '',
      msg:'',
      tip:'',
      codeNo:true
    }
  },
  created: function () {
    if (!!localStorage.token) {
      this.msg = "已登录，手机号为"+ localStorage.mobile
    }
  },
  methods: {
    login () {
      var vm = this
      this.$http.post(this.loginUrl, { mobile:+this.mobile, verify:+this.verify }, { headers:{ Accept:'application/x.lessocloud.v1+json' } })
      .then((response) => {
        console.log(JSON.stringify(response.body.data.code))
        localStorage.token = response.body.data.token
        localStorage.mobile = vm.mobile
        if (!!localStorage.token) {
          vm.msg = "已登录，手机号为"+ localStorage.mobile
        }
        
      }, (response) => {
        console.log(JSON.stringify(response))
      }); 
    },
    code () {
      var vm = this
      this.$http.post(this.loginCode, { mobile:+this.mobile }, { headers:{ Accept:'application/x.lessocloud.v1+json' } })
      .then((response) => {
        console.log(JSON.stringify(response.body.data.code))
        vm.verify = response.body.data.code
        vm.tip = ''
      }, (response) => {
        vm.tip = "用户不存在或帐户被冻结"
        //console.log(JSON.stringify(response))
      }); 
    }
  }
}
</script>
<style>
.loginBox{
  margin: 100px;
}
.error {
  color: red;
}
</style>
