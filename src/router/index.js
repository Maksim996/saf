import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/pages/LoginLayout';
import Layout from "@/views/pages/BaseLayout";
import ImportPage from "@/views/pages/ImportPage";
import RatingPage from "@/views/pages/RatingPage";
import SettingPage from "@/views/pages/SettingPage";
import HomePage from "@/views/pages/HomePage";
import StudentsPage from "@/views/pages/StudentsPage";
import ResetPasswordPage from "@/views/pages/ResetPasswordPage";
import MultiplierPage from "@/views/pages/MultiplierPage";


Vue.use(VueRouter)

const guest = (to, from, next) => {
  if (!localStorage.getItem("authToken")) {
    return next();
  } else {
    console.log('home')
    return next("/");
  }
};
const auth = (to, from, next) => {
  if (localStorage.getItem("authToken")) {
    return next();
  } else {
    console.log('login')
    return next("/login");
  }
};

const routes = [
  {
    path: '/login',
    name: 'Login',
    beforeEnter: guest,
    component: Login
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        beforeEnter: auth,
        component: HomePage
      },
      {
        path: '/import',
        name: 'Import',
        beforeEnter: auth,
        component: ImportPage,
      },
      {
        path: '/students',
        name: 'Students',
        beforeEnter: auth,
        component: StudentsPage,
      },
      {
        path: '/reset-password',
        name: 'ResetPassword',
        beforeEnter: auth,
        component: ResetPasswordPage,
      },
      {
        path: '/rating',
        name: 'Rating',
        beforeEnter: auth,
        component: RatingPage,
      },
      {
        path: '/multiplier',
        name: 'Multiplier',
        beforeEnter: auth,
        component: MultiplierPage,
      },
      {
        path: '/setting',
        name: 'Setting',
        beforeEnter: auth,
        component: SettingPage,
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
