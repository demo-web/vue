<template>
  <li class="news-item">
    <span class="score">{{ item.score }}</span>

    <span class="title">
      <template v-if="item.url">
        <a :href="item.url" target="_blank">{{ item.title }}</a>
        <span class="host">({{ item.url | host }})</span>
      </template>
      <template v-else>
        <router-link :to="'/item/' + item.id">{{ item.title }}</router-link>
      </template>
    </span>
    
    <br>
    <span class="meta">
      <span v-if="item.type !== 'job'" class="by">
        作者 <router-link :to="'/user/' + item.by">{{ item.by }}</router-link>
      </span>
      <span class="time">
        {{ item.time | timeAgo }} 以前
      </span>
      <span v-if="item.type !== 'job'" class="comments-link">
        | <router-link :to="'/item/' + item.id">{{ item.descendants }} 评论</router-link>
      </span>
    </span>
    <span class="label" v-if="item.type !== 'story'">{{ item.type }}</span>
  </li>
</template>

<script>
export default {
  name: 'news-item',
  props: ['item'],
  serverCacheKey: props => {
    return `${props.item.id}::${props.item.__lastUpdated}`
  }
}
</script>
<style type="text/css">
a {
  color: #34495e;
  text-decoration: none;
}
.news-item{
  background-color:#fff;
  padding:20px 30px 20px 80px;
  border-bottom:1px solid #eee;
  position:relative;
  line-height:20px;
}
.news-item .score{
    color:#ff6600;
    font-size:1.1em;
    font-weight:700;
    position:absolute;
    top:50%;
    left:0;
    width:80px;
    text-align:center;
    margin-top:-10px;
    }
.news-item .meta,.news-item .host{
    font-size:12px;
    color:#999;
	}
.news-item .meta a,.news-item .host a{
    color:#999;
    text-decoration:underline;
    }
.news-item a:hover,.news-item .score.host a:hover{
    color:#ff6600
    }
</style>