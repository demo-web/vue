<template>
<div id="app">
  <nav class="navbar navbar-default navbar-static-top" role="navigation">
       <div class="nav navbar-nav">
	       <li><router-link to="/home">路由</router-link></li>
	       <li><router-link to="/about" append exact>CRUD操作</router-link></li>
         <li id="logReg"><router-link v-if="!loggedIn" to="/reg">注册</router-link> </li>
	       <li id="logR">
         <router-link v-if="loggedIn" to="/logout">注销</router-link>
	           <router-link v-if="!loggedIn" to="/login">登录</router-link></li>
       </div>
  </nav>
<div>
    <template v-if="$route.matched.length">
          <router-view></router-view>
    </template>
    <template v-else>
          <p>已 {{ loggedIn ? '登录' : '注销' }}</p>
    </template>
</div>
</div>
</template>

<script>
/* eslint-disable */
import auth from './auth'
export default {
  data () {
    return {
      loggedIn: auth.loggedIn()
    }
  },
  created () {
    auth.onChange = loggedIn => {
      this.loggedIn = loggedIn
    }
  }
}
</script>

<style type="text/css">
	#logR{
		position: absolute;
	  right: 0;
		top: 0;
	}
  #logReg{
    position: absolute;
    right: 60px;
    top: 0;
  }
</style>