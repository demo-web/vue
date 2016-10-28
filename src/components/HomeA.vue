<template>
  <div>
    <ul class="nav nav-tabs">
      <li v-for="list in title"><router-link :to="list.url" replace>{{list.name}}</router-link></li>
    </ul>
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
                name:'组件1',
                url:'/home/a/a'
              },
              {
                name:'组件3',
                url:'/home/a/b'
              }
              ]
            }
  }
}
</script>