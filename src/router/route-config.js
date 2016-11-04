/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import auth from '../auth'
//import NavConfig from './router.json';
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

function requireLogout (to, from, next) {
	    auth.logout()
	    next('/')
	  }

const routed = [
    { path: '/home', component: require('../components/Home'), redirect: '/home/d',
		children:[
				{path: '/home/a', component: require('../components/HomeList'), redirect: '/home/a/b',
						children:[
							{path:'/home/a/a',component:require('../components/HomeAa')},
							{path:'/home/a/b',component:require('../components/HomeAb')},
							{path:'/home/a/c',component:require('../components/HomeAc')}
						]
				},
				{path: '/home/todo',component:require('../components/todo')},
				{path: '/home/b', component: require('../components/HomeB'), beforeEnter: requireAuth},
				{path: '/home/d', component: require('../components/ItemList')}
		]
	},
	{ path: '/crud', component: require('../components/crud')},
	{ path: '/reg', component: Reg},
	{ path: '/login', component: Login },
	{ path: '/logout', beforeEnter: requireLogout},
	{ path: '*', redirect: '/home/a/a'}
 ]
//console.log(JSON.stringify(routed))
export default new VueRouter({
  routes: routed
})