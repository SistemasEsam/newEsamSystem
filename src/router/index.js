 import { createRouter, createWebHashHistory } from 'vue-router'


 import MainView from '../views/MainView.vue'
 import FormView from '../views/FormCVViews/FormView.vue'
 import StaffMenuView from '../views/StaffViews/StaffMenuView.vue'
 import InstructorFinderView from '../views/InstructorFinderViews/InstructorsView.vue'


const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/form-cv-view',
    name: 'formView',
    component: FormView
  },
  {
    path: '/staff-menu-view',
    name: 'staffMenuView',
    component: StaffMenuView
  },

  {
    path: '/instructor-finder-view',
    name: 'instructorFinderView',
    component: InstructorFinderView
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
