/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import auth from '../auth'
//import NavConfig from './router.json';
//import Login from '../components/Login.vue'
//import Reg from '../components/Reg.vue'

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

const crud = r => { require.ensure(['../components/crud.vue'], () => { r(require('../components/crud.vue')) })}
const ItemList = r => { require.ensure(['../components/ItemList'], () => { r(require('../components/ItemList')) })}
const HomeB = r => { require.ensure(['../components/HomeB'], () => { r(require('../components/HomeB')) })}

const HomeList = r => require.ensure([], () => r(require('../components/HomeList')), 'abc')
const HomeAa = r => require.ensure([], () => r(require('../components/HomeAa')), 'abc')
const HomeAb = r => require.ensure([], () => r(require('../components/HomeAb')), 'abc')
const HomeAc = r => require.ensure([], () => r(require('../components/HomeAc')), 'abc')

const Login = r => require.ensure([], () => r(require('../components/Login')), 'login')
const Reg = r => require.ensure([], () => r(require('../components/Reg')), 'login')

const routed = [
    { path: '/home', component: require('../components/Home'), redirect: '/home/todo',
		children:[
				{path: '/home/a', component: HomeList,redirect: '/home/a/b',
						children:[
							{ path: '/home/a/a', component: HomeAa },
							{ path: '/home/a/b', component: HomeAb },
							{ path: '/home/a/c', component: HomeAc }
						]
				},
				{path: '/home/todo',component:require('../components/todo')},
				{path: '/home/b', component: HomeB, beforeEnter: requireAuth},
				{path: '/home/d', component: ItemList}
		]
	},
	{ path: '/crud', component: crud},
	{ path: '/reg', component: Reg},
	{ path: '/login', component: Login },
	{ path: '/logout', beforeEnter: requireLogout},
	{ path: '*', redirect: '/home/a/a'}
]
//console.log(JSON.stringify(routed))
export default new VueRouter({
  routes: routed
})