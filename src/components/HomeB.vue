<template>
  <div>
    <p v-for="item in list" v-text="item"></p>
    <div class="infinite-loading-container" v-show="isLoading">
      <slot name="spinner">
        <i :class="spinnerType"></i>
      </slot>
      <div class="infinite-status-prompt" v-show="!isLoading && isComplete && isFirstLoad">
        <slot name="no-results">No results :(</slot>
      </div>
      <div class="infinite-status-prompt" v-show="!isLoading && isComplete && !isFirstLoad">
        <slot name="no-more">No more data :)</slot>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
      scrollParent: null,
      scrollHandler: null,
      isLoading: true,
      isComplete: false,
      isFirstLoad: true,
      distance: 100,
      list: []
      }
  },
  computed: {
      spinnerType() {
        return 
      }
  },
  mounted: function () {
    this.$nextTick(function () {
       for (var i = 0; i < 50; i++) {
          this.list.push(i + 1 +". "+"-------- 列表很长很长--------");
       }
    })
    
  }
}
</script>
<style type="text/css">
  .infinite-loading-container{
    clear: both;
    text-align: center;
    display: inline-block;
    margin: 15px 0;
    width: 28px;
    height: 28px;
    font-size:28px;
    line-height: 28px;
    border-radius: 50%;
  }
  .infinite-status-prompt{
    color: #666;
    font-size: 14px;
    text-align: center;
    padding: 10px 0;
  }
</style>