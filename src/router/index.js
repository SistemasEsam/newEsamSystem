 import { createRouter, createWebHashHistory } from 'vue-router'


 import MainView from '../views/MainView.vue'
 import FormView from '../views/FormCVViews/FormView.vue'
 import StaffMenuView from '../views/StaffViews/StaffMenuView.vue'
 import InstructorFinderView from '../views/InstructorFinderViews/InstructorsView.vue'
 import PDFView from '../views/PDFViews/PDFView.vue'


const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/form-cv-view',
    name: 'formView',
    meta: {title: 'Formulario de Registro'},
    component: FormView
  },
  {
    path: '/staff-menu-view',
    name: 'staffMenuView',
    component: StaffMenuView
  },

  {
    path: '/instructor-finder-view/:status',
    name: 'instructorFinderView',
    component: InstructorFinderView
  },
  {
    path: '/pdf-view/:id',
    name: 'PDFView',
    component: PDFView
  },

]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
