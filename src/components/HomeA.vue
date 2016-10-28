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
              },
              {
                name:'组件4',
                url:'/home/a/c'
              },
              {
                name:'组件5',
                url:'/home/a/d'
              },
              {
                name:'组件6',
                url:'/home/a/e'
              },
              {
                name:'组件7',
                url:'/home/a/f'
              },
              {
                name:'组件8',
                url:'/home/a/g'
              }
              ]
            }
  }
}
</script>