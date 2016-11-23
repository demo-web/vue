<template>
	<div>

	  

	  <template v-for="branch in branches">
	    <input type="radio"
	      :id="branch"
	      :value="branch"
	      name="branch"
	      v-model="currentBranch">
	    <label :for="branch">{{ branch }}</label>
	  </template>
	  <p>vuejs/vue@{{ currentBranch }}</p>

	  

	  <ul>
	    <li v-for="record in commits">
	      <a :href="record.html_url" target="_blank" class="commit">{{ record.sha.slice(0, 7) }}</a>
	      - <span class="message">{{ record.commit.message | truncate }}</span><br>
	      by <span class="author"><a :href="record.author.html_url" target="_blank">{{ record.commit.author.name }}</a></span>
	      at <span class="date">{{ record.commit.author.date | formatDate }}</span>
	    </li>
	  </ul>

	  <div v-for="navs in nav">{{navs.name}}</div>
	  <div>{{msg}}</div>
	</div>
</template>

<script>
/* eslint-disable */
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
//Vue.http.options.root = '/root';
//Vue.http.headers.common['Accept'] = 'application/x.lessocloud.v1+json';
//Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';
	export default{
		data(){
		  	return{
		  		apiURLCode:'http://api.lessoald.cn/auth/register/code',
		  		apiURLnav:'http://store.lessoald.cn/nav',
		  		apiURL: 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha=',
		  		branches: ['master', 'dev'],
		  		currentBranch: 'master',
		  		commits: null,
		  		nav:null,
		  		mobile:{mobile:'13615963574'},
		  		msg:null
		  	}
		  },

		  created: function () {
		    this.fetchData()
		    this.getCustomers()
		    this.postCode()
		  },

		  watch: {
		    currentBranch: 'fetchData',
		    currentBranch: 'getCustomers',
		    currentBranch: 'postCode'
		  },

		  filters: {
		    truncate: function (v) {
		      var newline = v.indexOf('\n')
		      return newline > 0 ? v.slice(0, newline) : v
		    },
		    formatDate: function (v) {
		      return v.replace(/T|Z/g, ' ')
		    }
		  },

		  methods: {
		    fetchData: function () {
		      var xhr = new XMLHttpRequest()
		      var self = this

		      // xhr.open('GET', self.apiURL + self.currentBranch)
		      // xhr.onload = function () {
		      //   self.commits = JSON.parse(xhr.responseText)
		      //   //console.log(JSON.stringify(self.commits))
		      // }
		      // xhr.send()
		      this.$http.get(self.apiURL + self.currentBranch).then((response) => {
		      	  self.commits = response.body
		          //console.log(JSON.stringify(self.commits))
		        }, (response) => {
		          //console.log(JSON.stringify(self.commits))
		        });
		    },
		    getCustomers: function() {
		    	var self = this

		    	this.$http.get(this.apiURLnav).then((response) => {
		    		self.nav = response.body
		    	    //console.log(JSON.stringify(self.nav))
		    	  }, (response) => {
		    	    console.log(JSON.stringify(response))
		    	});
		    },
		    postCode: function() {
		    	var self = this

		    	// xhr.open('POST', this.apiURLCode)
		    	// xhr.setRequestHeader('Accept', 'application/x.lessocloud.v1+json');
		    	// xhr.onload = function () {
		    	//   self.msg = JSON.parse(xhr.responseText)
		    	//   //console.log(JSON.stringify(self.msg))
		    	// }
		    	// xhr.send(this.mobile)

		    	this.$http.post(this.apiURLCode, this.mobile, { headers:{ Accept:'application/x.lessocloud.v1+json' } })
		    	.then((response) => {
		    		self.msg = response.body
		    	    //console.log(JSON.stringify(self.msg))
		    	}, (response) => {
		    	    console.log(JSON.stringify(response))
		    	});
		    }
		  }
	}
</script>

<style type="text/css">
	.author, .date {
	  font-weight: bold;
	}
</style>