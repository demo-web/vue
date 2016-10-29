<template>
  <div class="loginBox">
    <form @submit.prevent="login">
      <label><input v-model="email" placeholder="email"></label><br>
      <label><input v-model="pass" placeholder="password" type="password"></label><br>
      <button class="btn" type="submit">注册</button>
    </form>
  </div>
</template>

<script>
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
    }
  }
}
</script>