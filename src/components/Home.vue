<template>
	<div>
    <div class="col-xs-2">
    <router-link v-for="t in title" class="list-group-item" :to="t.url">{{t.name}}</router-link>
    </div>
    <div></div>
    <div class="col-xs-10">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
              title: [
              {
                name:'AAAA',
                url:'/home/a'
              },
              {
                name:'BBBB(需登录)',
                url:'/home/b'
              }
              ]
            }
  }
}
</script>