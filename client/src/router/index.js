import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Login from '@/components/Login'
import About from '@/components/About'
import LoginNew from '@/components/LoginNew'
import AppHome from '@/components/AppHome'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/loginnew',
      name: 'LoginNew',
      component: LoginNew
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/apphome',
      name: 'AppHome',
      component: AppHome
    }
  ]
})
