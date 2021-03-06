import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import SpotsIndex from '../views/SpotsIndex.vue'
import SpotsMap from '../views/SpotsIndexMap.vue'
import SpotsNew from '../views/SpotsNew.vue'
import SpotsShow from '../views/SpotsShow.vue'





Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },

  {
    path: '/spots',
    name: 'SpotsIndex',
    component: SpotsIndex
  },
  {
    path: '/spots/new',
    name: 'SpotsNew',
    component: SpotsNew
  },
  {
    path: '/spotsMap',
    name: 'SpotsMap',
    component: SpotsMap
  },
  {
    path: '/spots/:id',
    name: 'SpotsShow',
    component: SpotsShow
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
