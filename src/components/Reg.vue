<template>
  <div class="loginBox">
  	<p>请注册</p>
    <form @submit.prevent="login">
      <label>手机号：<input v-model="reg.mobile" placeholder="mobile"></label>{{msg}}<br>
      <label>手机验证码：<input v-model="reg.verify" placeholder="verify"></label><button :disabled="codeNo" class="btn" @click='postCode'>获取验证码</button><br>
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
      regUrl: 'http://api.lessoald.cn/auth/register',
      apiURLCode:'http://api.lessoald.cn/auth/register/code',
      reg:{
      	mobile: '',
      	verify: '',
        username:'',
        password:'123456789Sz',
        password_confirmation:'123456789Sz'
      },
      msg:'',
      codeNo:true
    }
  },
  computed: {
    filteredUsers: function () {
      doStuff: _.debounce(function () {
          this.codeNo = false;
      }, 500)
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
    postCode: function() {//验证码
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