import { createRouter, createWebHashHistory } from 'vue-router'

import FormView from '../views/FormView.vue'
import MainView from '../views/MainView.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/form-view',
    name:'form-view',
    component : FormView
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
