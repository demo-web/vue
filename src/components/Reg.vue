<template>
  <div class="loginBox">
  	<p>请注册</p>
    <form @submit.prevent="login">
      <label><input v-model="reg.email" placeholder="email"></label><br>
      <label><input v-model="reg.pass" placeholder="password" type="password"></label><br>
      <button class="btn" type="submit" @click="regs">注册</button>
    </form>
    <p>{{msg}}</p>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
      regUrl: 'http://localhost:8888/api/reg',
      reg:{
      	email: '1@qq.com',
      	pass: ''
      },
      msg:''
    }
  },
  methods: {
    regs () {
    	var vm = this
    	vm.msg = ''
    	$.ajax({
                url: vm.regUrl,
                type: 'POST',
                dataType: 'json',
                data: vm.reg,
                success: function() {
                    vm.msg = '注册成功！'
                },
                error: vm.msg
        })

    }
  }
}
</script>