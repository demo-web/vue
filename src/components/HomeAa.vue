<template>
  <ul class="list-group">
  <h3>v-for index</h3>
    <li class="list-group-item" v-for="(item, index) in items"><a :href="item.url">{{ index + 1 }} - {{ item.msg }}</a></li>
  </ul>
</template>

<script>
/* eslint-disable */
export default {
  data () {
      return {
        list:'循环列表',
        items:[
        {msg:'new1new1new1new1new1new1new1new1new1new1new1new1new1new1new1new1new1new1',url:'http://www.baidu.com/'},
        {msg:'new2',url:'http://www.baidu.com/'},
        {msg:'new1',url:'http://www.baidu.com/'},
        {msg:'new2',url:'http://www.baidu.com/'},
        {msg:'new1',url:'http://www.baidu.com/'},
        {msg:'new2',url:'http://www.baidu.com/'}
      ]
    }
  }
}
</script>