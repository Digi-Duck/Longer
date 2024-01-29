import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutUs.vue'),
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: () => import('../views/TeacherIntroduction.vue')
    },
    {
      path: '/courseInformation',
      name: 'courseInformation',
      component: () => import('../views/CourseInformation.vue')
    },
    {
      path: '/studentWork',
      name: 'studentWork',
      component: () => import('../views/StudentWork.vue')
    },
    {
      path: '/admissionList',
      name: 'admissionList',
      component: () => import('../views/AdmissionList.vue')
    },
    {
      path: '/connection',
      name: 'connection',
      component: () => import('../views/ConnectionUs.vue')
    },
  ]
})

export default router
