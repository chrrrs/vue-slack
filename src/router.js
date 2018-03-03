import Vue from 'vue'
import Router from 'vue-router'
import Login from './pages/Login'
import Register from './pages/Register'
import Chat from './pages/Chat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/',
      component: Chat,
      beforeEnter: (to, from, next) => {
        if(!firebase.auth().currentUser) {
          next('/login')
        } else {
          next()
        }
      }
    }
  ]
})
