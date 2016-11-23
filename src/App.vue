<template>
	<div id="app">
	    <nav class="navbar navbar-default navbar-static-top" role="navigation">
	        <div class="nav nav-s">
	       		<li class="logoH">fdhsdf</li>
		        <li v-for="item in config"><router-link :to="item.url">{{item.name}}</router-link></li>
		        <!-- <li><router-link to="/crud" append exact>CRUD操作</router-link></li> -->
	            <li id="logReg"><router-link v-if="!loggedIn" to="/reg">注册</router-link></li>
		        <li id="logR">
	                <router-link v-if="loggedIn" to="/logout">注销</router-link>
		            <router-link v-if="!loggedIn" to="/login">登录</router-link>
		        </li>
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
import NavConfig from './router/router.json';
export default {
	data () {
	    return {
	        loggedIn: auth.loggedIn(),
	        config:NavConfig
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

	.logoH{
		margin:0 20px;
		line-height:50px;
		font-size: 18px;
	}
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
  .nav-s{
  	float: left;
 	margin: 0;

 	 }
  .nav-s li {
 	 float: left;
}

.nav-s li a {
	padding-top: 15px;
	padding-bottom: 15px;
	color:#333;
}
  .router-link-active {
    background-color: #eaeaea;
  }
</style>