<template>
  <div>
    <ul class="nav nav-tabs">
      <li><router-link class="" to="/home/a/c" replace>列表</router-link></li>
      <li><router-link class="" to="/home/a/d" replace>TODO</router-link></li>
    </ul>
    <div><br>内容<br><br></div>
    <div >
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
                name:'news',
                url:'/home/b'
              },
              {
                name:'news',
                url:'/home/c'
              },
              {
                name:'news',
                url:'/home/d'
              },
              {
                name:'news',
                url:'/home/e'
              },
              {
                name:'news',
                url:'/home/f'
              },
              {
                name:'news',
                url:'/home/g'
              }
              ]
            }
  }
}
</script>