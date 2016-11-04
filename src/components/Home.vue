<template>
	<div>
    <Listnav :lists="lists"></Listnav>
  </div>
</template>

<script>
/* eslint-disable */
import Listnav from './ListNav.vue'
import NavConfig from '../router/router.json';
export default {
  components:{
    Listnav
  },
  data () {
    return {
      lists:NavConfig[0].home
  }
  }
}
</script>