import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: () =>import(/* webpackChunkName: "Register" */ "@/views/Register.vue")
  },
  {
    path: '/main',
    name: 'MainRoute',
    component: () => import(/* webpackChunkName: "Main" */ '@/views/Main.vue'),
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "Dashboard" */ '@/views/Dashboard.vue'),
      },
      {
        path: 'product',
        name: 'Products',
        component: () => import(/* webpackChunkName: 'Products' */ '@/views/Product.vue')
      },
      {
        path: 'user',
        name: 'Users',
        component: () => import(/* webpackChunkName: 'Users' */ '@/views/User.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
