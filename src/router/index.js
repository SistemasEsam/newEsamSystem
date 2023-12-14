 import { createRouter, createWebHashHistory } from 'vue-router'

import FormView from '../views/FormCVViews/FormView.vue'
import MainView from '../views/MainView.vue'
import PDFView from '../views/PDFViews/PDFView.vue'
import LoginView from '../views/LoginView.vue'
import ProfileView from '../views/ProfileView.vue'
import ContactView from '../views/ContactView.vue'
import InstructorsView from '@/views/InstructorFinderViews/InstructorsView.vue'
import BlogSingleView from '@/views/BlogViews/BlogSingleView.vue'
import BlogListView from '@/views/BlogViews/BlogListView.vue'
import BlogFormView from '@/views/BlogViews/BlogFormView.vue'


const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
