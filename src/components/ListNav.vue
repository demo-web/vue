<template>
	<div>
    <div class="col-xs-2" v-show="showlift">
    <div v-for="list in lists">
      <li class="list-group-item bg" @click="list.show = !list.show">{{list.tig}}</li>
      <div v-show="list.show">
          <router-link v-for="t in list.title"  class="list-group-item" :to="t.url">{{t.name}}</router-link>
      </div>
      <br>
    </div>
    </div>
    <div class="col-xs-10">
      <div class="btnlets" @click="showlift = !showlift">《</div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: ['lists'],
  data () {
    return {
      showlift:true
      }
  }
}
</script>
<style type="text/css">
  .bg{
    color: #999;
    font-weight: bold;
    border-bottom: 1px #999 solid;
    z-index: 12;
  }
  .btnlets{
    width:32px;
    height: 42px;
    line-height:42px;
    border: #ccc solid 1px;
    text-align: right;
    position: absolute;
    left: -20px;
    top: 0;
    border-radius: 6px;
    color: #ccc;
  }
</style>