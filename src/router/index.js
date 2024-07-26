 import { createRouter, createWebHashHistory } from 'vue-router'


 import MainView from '../views/MainView.vue'
 import FormView from '../views/FormCVViews/FormView.vue'
 import StaffMenuView from '../views/StaffViews/StaffMenuView.vue'
 import InstructorView from '../views/InstructorFinderViews/InstructorsView.vue'
 import PDFView from '../views/PDFViews/PDFView.vue'
 import AcademicProgramView from '../views/AcademicProgramViews/AcademicProgramView.vue'
 import InvitationView from '../views/InvitationViews/InvitationView.vue'
 import InvitationPDFView from '../views/InvitationViews/InvitationPDFView.vue'
import ProgramView from '../views/AcademicProgramViews/ProgramView.vue'
import MKTreportView from  '../views/MKTreportViews/MKTreportView.vue'
import PaymentCardsView from '@/views/PaymentCardViews/PaymentCardsView.vue'
import PaymentCardsPDFView from '@/views/PaymentCardViews/PaymentCardsPDFView.vue'
import PaymentCardsListView from '@/views/PaymentCardViews/PaymentCardsListView.vue'

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
    path: '/invitation-pdf-view/:id/letter/:moduleId',
    name: 'invitationPDFView',
    component: InvitationPDFView
  },
  {
    path: '/MKTreport',
    name: 'MKTreport',
    component: MKTreportView
  },
  {
    path:'/payment-cards',
    name: 'payment-cards',
    component: PaymentCardsView
  },
  {
    path:'/payment-cards-list',
    name: 'payment-cards-list',
    component: PaymentCardsListView
  },
  {
    path: '/payment-cards-pdf/:id',
    name: 'payment-cards-pdf',
    component: PaymentCardsPDFView
   },

]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
