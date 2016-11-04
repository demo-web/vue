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
import NavConfig from '../router/router.json';
export default {
  data () {
    return {
          title: NavConfig[0].home[0].title[0].title
      }
  }
}
</script>