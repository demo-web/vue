<template>
  <div class="loginBox">
  	<p>请注册</p>
    <form @submit.prevent="login">
      <label>手机号：<input v-model="reg.mobile" placeholder="mobile" maxlength="11"></label><span v-show="reg.mobile.length==11">{{msg}}</span><br>
      <label>手机验证码：<input v-model="reg.verify" placeholder="verify"></label><button :disabled="reg.mobile.length<11 || codeNo" class="btn" @click='postCode'>获取验证码</button><br>
      <label>用户名：<input v-model="reg.username" placeholder="username"></label><br>
      <label>密码：<input v-model="reg.password" placeholder="password" type="password"></label><br>
      <label>确认密码：<input v-model="reg.password_confirmation" placeholder="password_confirmation" type="password"></label><br>
      <button :disabled="!!!reg.verify" class="btn" type="submit" @click="regs">注册</button>
    </form>
    <p>{{msg}}</p>
  </div>
</template>

<script>
/* eslint-disable */
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export default {
  data () {
    return {
      precheckUrl:'http://api.lessoald.cn/auth/register/mobile/precheck',//检测手机是否可以注册
      regUrl: 'http://api.lessoald.cn/auth/register',//新用户注册
      apiURLCode:'http://api.lessoald.cn/auth/register/code',//获取手机验证码
      reg:{
      	mobile: '',
      	verify: '',
        username:'',
        password:'123456789Sz',
        password_confirmation:'123456789Sz'
      },
      msg:'11',
      codeNo:false
    }
  },
  watch: {
    reg: {
      handler: function (val, oldVal) {
        if (this.reg.mobile.length == 11) {
          this.codeNo()
          //this.codeNo = true
        }
      },
      deep:true
    }
  },
  methods: {
    regs () {//注册
    	var vm = this
    	vm.msg = ''
      this.$http.post(this.regUrl, JSON.stringify(this.reg) , { headers:{ Accept:'application/x.lessocloud.v1+json' } })
      .then((response) => {
        vm.msg = response.body
      }, (response) => {
        console.log(JSON.stringify(response))
      });
    },
    codeNo(){
      var vm = this
      this.$http.post(this.precheckUrl, { mobile:+this.reg.mobile }, { headers:{ Accept:'application/x.lessocloud.v1+json' } }).then((response) => {
          if (response.body.message === 'error') {
            vm.msg = '必须是11位的大陆手机号'
          }else{
            response.body === 'true' ? vm.msg = '可以注册' : vm.msg = '该手机号码已注册'
          }
          

          console.log(JSON.stringify(response))
       }, (response) => {

          
       });    
    },
    postCode() {//验证码
       var vm = this
       this.$http.post(this.apiURLCode, { mobile:+this.reg.mobile }, { headers:{ Accept:'application/x.lessocloud.v1+json' } })
       .then((response) => {

         //console.log(JSON.stringify(response.body.data.code))

          vm.reg.verify = response.body.data.code
         // if (response == false) {
            
         // }else{
         //    vm.reg = "该手机号码已注册"
         // }
         
       }, (response) => {

          // console.log(JSON.stringify(response.body))
          
       });    
    }
  }
}
</script>