/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import auth from './auth'
import Home from './components/Home.vue'
	import HomeA from './components/HomeA.vue'
		import HomeAa from './components/HomeAa.vue'
		import HomeAb from './components/HomeAb.vue'
	import HomeB from './components/HomeB.vue'
import About from './components/About.vue'
import Login from './components/Login.vue'
import Reg from './components/Reg.vue'
function requireAuth (to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

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
				{path: '/home/:id', component: HomeB, beforeEnter: requireAuth}
		]
	},
	{ path: '/about', component: About},
	{ path: '/reg', component: Reg},
	{ path: '/login', component: Login },
	{ path: '/logout',
	  beforeEnter (to, from, next) {
	    auth.logout()
	    next('/')
	  }
	},
	{ path: '*', redirect: '/home/a/a' }
 ]
})