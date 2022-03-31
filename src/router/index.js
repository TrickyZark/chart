import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import ImgPage from '../components/ImgPage'
import Home from '../components/Home'
import Manager from '../components/Manager'

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
    },
    {
      path: '/ImgPage/:ImgId?',
      name: 'ImgPage',
      component: ImgPage
    },
    {
      path: '/Manager',
      name: 'Manager',
      component: Manager
    }
  ]
})
