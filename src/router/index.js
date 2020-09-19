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
  // if route if requiresAuth
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // if don't have token
    if (localStorage.getItem("token") == null) {
      next({
        path: "/login",
        params: { nextUrl: to.fullPath },
      });
    } else {
      // check by role
      let user = JSON.parse(localStorage.getItem("user"));
      if (to.matched.some((record) => record.meta.is_admin)) {
        if (user.role == "admin") {
          next();
        } else {
          alert("anda bukan super admin");
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          next("/login");
        }
      } else {
        next();
      }
      next();
    }
  } else {
    next();
  }
});

export default router
