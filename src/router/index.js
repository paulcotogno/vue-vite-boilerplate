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
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/offres',
      name: 'offers',
      alias: ['/offers'],
      component: () => import('../views/OffersView.vue')
    },
    {
      path: '/candidat',
      name: 'applicant',
      alias: ['/applicant'],
      component: () => import('../views/ApplicantView.vue')
    },
    {
      path: '/espace-candidat',
      name: 'applicant-page',
      alias: ['/applicant-page'],
      component: () => import('../views/ApplicantPageView.vue')
    },
    {
      path: '/recruteur',
      name: 'recruiter',
      alias: ['/recruiter'],
      component: () => import('../views/RecruiterView.vue')
    },
    {
      path: '/recuperation-mot-de-passe',
      name: 'retrieve-password',
      alias: ['/retrieve-password'],
      component: () => import('../views/RetrievePasswordView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    }
  ]
})

export default router
