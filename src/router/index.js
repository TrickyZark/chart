import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Home from '../components/Home'

Vue.use(Router)
Vue.use(VueResource)
export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
