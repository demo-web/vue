/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './components/Home.vue'
	import HomeA from './components/HomeA.vue'
		import HomeAa from './components/HomeAa.vue'
		import HomeAb from './components/HomeAb.vue'
	import HomeB from './components/HomeB.vue'
import About from './components/About.vue'

export default new VueRouter({
  routes: [
    { path: '/home', component: Home ,
		children:[
				{path: '/home/a', component: HomeA,
						children:[
							{path:'/home/a/a',component:HomeAa},
							{path:'/home/a/b',component:HomeAb}
						]
				},
				{path: '/home/:id', component: HomeB},
				{path: '/home/:id', component: HomeB},
				{path: '/home/:id', component: HomeB}			  	 
		]
	},
	{ path: '/:id', component: About },
	{ path: '*', redirect: '/home/a/a' }
 ]
})