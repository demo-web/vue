<template>
  <div class="loginBox">
    <p v-if="$route.query.redirect">
      你需要先登录。
    </p>
    <form @submit.prevent="login">
      <label><input v-model="email" placeholder="email"></label><br>
      <label><input v-model="pass" placeholder="密码为 1" type="password"></label><br>
      <button class="btn" type="submit">登录</button>
      <p v-if="error" class="error">用户名或密码不正确！</p>
    </form>
  </div>
</template>

<script>
import auth from '../auth'

export default {
  data () {
    return {
      email: '1@qq.com',
      pass: '',
      error: false
    }
  },
  methods: {
    login () {
      auth.login(this.email, this.pass, loggedIn => {
        if (!loggedIn) {
          this.error = true
        } else {
          this.$router.replace(this.$route.query.redirect || '/')
        }
      })
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
