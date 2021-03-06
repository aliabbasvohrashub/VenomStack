import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Login from '@/components/Login'
import AppHome from '@/components/AppHome'
import AppLogin from '@/components/AppLogin'
import Breakfast from '@/components/Breakfast'
import Meat from '@/components/Meat'
import Sushi from '@/components/Sushi'
import About from '@/components/About'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/applogin',
      name: 'AppLogin',
      component: AppLogin
    },
    {
      path: '/apphome',
      name: 'AppHome',
      component: AppHome
    },
    {
      path: '/breakfast',
      name: 'Breakfast',
      component: Breakfast
    },
    {
      path: '/meat',
      name: 'Meat',
      component: Meat
    },
    {
      path: '/sushi',
      name: 'Sushi',
      component: Sushi
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
