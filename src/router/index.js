import { createRouter, createWebHashHistory } from 'vue-router'

import FormView from '../views/FormView.vue'
import MainView from '../views/MainView.vue'
import PDFView from '../views/PDFView.vue'
import LoginView from '../views/LoginView.vue'
import ProfileView from '../views/ProfileView.vue'
import ContactView from '../views/ContactView.vue'
import InstructorsView from '@/views/InstructorsView.vue'
import StaffMenuView from '@/views/StaffMenuView.vue'
import AcademicStaffView from '@/views/AcademicStaffView.vue'
import StaffProfile from '@/components/StaffProfile.vue'
import MarketingStaffMenu from '@/components/MarketingStaffMenu.vue'


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
},
{
  path:'/instructorFinder',
  name: 'instructorFinder',
  component: InstructorsView
},
{
  path:'/staffMenu',
  name: 'staffMenu',
  component: StaffMenuView
},
{
  path:'/academicMenu',
  name: 'academicMenu',
  component: AcademicStaffView
},
{
  path:'/staffProfile',
  name: 'staffProfile',
  component: StaffProfile
},
{
path:'/staffProfile',
name: 'staffProfile',
component: MarketingStaffMenu
},

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
