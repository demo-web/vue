<template>
  <div>
    <p v-for="item in list" v-text="item"></p>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
            distance: 100,
            list: [1,1,23,312]
           }
  },
  ready () {
      this.list.push('551');
  }
}
</script>