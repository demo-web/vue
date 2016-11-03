/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import auth from '../auth'
import Login from '../components/Login.vue'
import Reg from '../components/Reg.vue'
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
    { path: '/home', component: require('../components/Home.vue'), redirect: '/home/d',
		children:[
				{path: '/home/a', component: require('../components/HomeA.vue'), redirect: '/home/a/b',
						children:[
							{path:'/home/a/a',component:require('../components/HomeAa.vue')},
							{path:'/home/a/b',component:require('../components/HomeAb.vue')}
						]
				},
				{path: '/home/todo',component:require('../components/todo.vue')},
				{path: '/home/b', component: require('../components/HomeB.vue'), beforeEnter: requireAuth},
				{path: '/home/d', component: require('../components/ItemList.vue')}
		]
	},
	{ path: '/about', component: require('../components/About.vue')},
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