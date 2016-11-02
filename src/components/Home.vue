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
  data () {
    return {
      showlift:true,
      lists:[
        { 
          show:true,
          tig:'交易管理',
          title: [
          {
            name:'列表',
            url:'/home/a'
          },
          {
            name:'Todo',
            url:'/home/todo'
          },
          {
            name:'会员(需登录)',
            url:'/home/b'
          }
          ]
        },
        { 
          show:false,
          tig:'物料清单',
          title: [
          {
            name:'添加物料',
            url:'/home/d'
          },
          {
            name:'所有物料',
            url:'/home/e'
          },
          {
            name:'子菜单',
            url:'/home/f'
          }
          ]
        }
      ]
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