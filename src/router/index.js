import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Main from '@/views/Main.vue'
// import Dashboard from '@/views/Dashboard.vue'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css';

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
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: () =>import(/* webpackChunkName: "Register" */ "@/views/Register.vue"),
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/main',
    name: 'MainRoute',
    redirect: {name: 'Dashboards'},
    component: Main,
    // meta: {
    //   requiresAuth: true
    // },
    children: [
      {
        path: '',
        name: 'Dashboards',
        component: () =>import(/* webpackChunkName: "Dashboards" */ "@/views/Dashboard.vue"),
        // meta: {
        //   requiresAuth: true
        // }
      },
      {
        path: 'product',
        name: 'Products',
        component: () => import(/* webpackChunkName: 'Products' */ '@/views/Product.vue'),
        // children: [
        //   {
        //     path: ':id',
        //     name: 'DetProduct',
        //     component: () => import(/* webpackChunkName: "DetailProduct" */ '@/components/Update/UpProduct.vue')
        //   }
        // ]
      },
      {
        path:'product/:id',
        name: "DetProduct",
        component: () => import(/* webpackChunkName: "DetailProduct" */ '@/components/Update/UpProduct.vue')
      },
      {
        path: 'in',
        name: 'Ins',
        component: () => import(/* webpackChunkName: 'Ins' */ '@/views/In.vue'),
        // meta: {
        //   requiresAuth: true
        // }
      },
      {
        path: 'out',
        name: 'Outs',
        component: () => import(/* webpackChunkName: 'Outs' */ '@/views/Out.vue'),
        // meta: {
        //   requiresAuth: true
        // }
      },
      {
        path: 'user',
        name: 'Users',
        component: () => import(/* webpackChunkName: 'Users' */ '@/views/User.vue'),
        // meta: {
        //   requiresAuth: true
        // }
      },
      {
        path:'user/:id',
        name: "DetUser",
        component: () => import(/* webpackChunkName: "DetailUser" */ '@/components/Update/UpUser.vue')
      },
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

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
  console.log(to);
  console.log(from);
})

export default router
