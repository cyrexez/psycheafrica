import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import GetAccess from '../views/getaccess.vue'
import ForgotPassword from '../views/forgotpassword.vue'
import ResetPassword from '../views/resetpassword.vue'
import OTP from '../views/otp.vue'

const routes = [
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
    path: '/getaccess',
    name: 'GetAccess',
    component: GetAccess
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/resetpassword',
    name: 'ResetPassword',
    component: ResetPassword
  },
  {
    path: '/otp',
    name: 'OTP',
    component: OTP
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


 // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },