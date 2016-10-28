<template>
<div id="app">
  <nav class="navbar navbar-default navbar-static-top" role="navigation">
       <div class="nav navbar-nav">
	       <li><router-link to="/home">路由相关</router-link></li>
	       <li><router-link to="/about" append exact>表格组件</router-link></li>
       </div>
  </nav>
<div>
    <router-view></router-view>
</div>
</div>
</template>