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
    component: Login,
    meta: { requiresAuth:true }
  },
  {
    path: '/register',
    name: 'Register',
    component: () =>import(/* webpackChunkName: "Register" */ "@/views/Register.vue"),
    meta: { requiresAuth:true }
  },
  {
    path: '/main',
    name: 'MainRoute',
    redirect: {name: 'Dashboards'},
    component: () => import(/* webpackChunkName: "Main" */ '@/views/Main.vue'),
    children: [
      {
        path: '',
        name: 'Dashboards',
        component:() => import(/* webpackChunkName: "Dashboards" */ '@/views/Dashboard.vue')
      },
      {
        path: 'product',
        name: 'Products',
        component: () => import(/* webpackChunkName: 'Products' */ '@/views/Product.vue')
      },
      {
        path: 'in',
        name: 'Ins',
        component: () => import(/* webpackChunkName: 'Ins' */ '@/views/In.vue')
      },
      {
        path: 'out',
        name: 'Outs',
        component: () => import(/* webpackChunkName: 'Outs' */ '@/views/Out.vue')
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

router.beforeEach((to, from, next) => {
  console.log(to,from)
  if (to.matched.some(record => !record.meta.requiresAuth)) {
    if (!localStorage.getItem("token")) {
      next({
        path: '/login',
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
