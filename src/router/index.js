 import { createRouter, createWebHashHistory } from 'vue-router'


 import MainView from '../views/MainView.vue'
 import FormView from '../views/FormCVViews/FormView.vue'
 import StaffMenuView from '../views/StaffViews/StaffMenuView.vue'
 import InstructorView from '../views/InstructorFinderViews/InstructorsView.vue'
 import PDFView from '../views/PDFViews/PDFView.vue'
 import AcademicProgramView from '../views/AcademicProgramViews/AcademicProgramView.vue'
 import InvitationView from '../views/InvitationViews/InvitationView.vue'
import ProgramView from '../views/AcademicProgramViews/ProgramView.vue'
import ExampleView from '../components/MKTreports/Example.vue'

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
    path: '/instructor-view/:status',
    name: 'instructorView',
    component: InstructorView
  },
  {
    path: '/pdf-view/:id',
    name: 'PDFView',
    component: PDFView
  },
  {
    path: '/academic-program-view',
    name: 'academicProgramView',
    component: AcademicProgramView
  },
  {
    path: '/program-view',
    name: 'programView',
    component: ProgramView
  },
  {
    path: '/invitation-view/:id',
    name: 'invitationView',
    component: InvitationView
  },
  {
    path: '/example',
    name: 'example',
    component: ExampleView
  },

]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
