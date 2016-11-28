<template>
  <div>
    <upload 
      v-bind:class="['pure-button','pure-button-primary','js-btn-crop']" 
      v-bind:crop="false" url="http://localhost:3000/users" 
      extensions="png,gif,jpeg,jpg" 
      v-on:imageUploaded="imageUploaded">
    </upload>
  </div>
</template>

<script>
/* eslint-disable */
import Vue from 'vue'
// import Element from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
// Vue.use(Element)

import Upload  from './upload.vue';

export default {
      components: {
        Upload
      },
      data() {
        return {
          src: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png'
        }
      },
      methods: {
        imageUploaded(res) {
          if (res.errcode == 0) {
            this.src = 'http://img1.vued.vanthink.cn/vued751d13a9cb5376b89cb6719e86f591f3.png';
          }
        }
      }
  }
</script>