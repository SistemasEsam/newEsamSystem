import { createRouter, createWebHashHistory } from 'vue-router'

import FormView from '../views/FormView.vue'
import MainView from '../views/MainView.vue'
import PDFView from '../views/PDFView.vue'
import LoginView from '../views/LoginView.vue'
import ProfileView from '../views/ProfileView.vue'
import ContactView from '../views/ContactView.vue'


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
  },
 {
  path: '/pdf/:id',
  name: 'pdf',
  component:PDFView



 },

{ 
  path: '/contact',
  name: 'contact',
  component: ContactView

},


 {
    path: '/login',
    name: 'login',
    component : LoginView
 },
{


  path:'/profile',
  name:'profile',
  component:ProfileView
}




]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
