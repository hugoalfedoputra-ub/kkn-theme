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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/sejarahdesa',
      name: 'sejarahdesa',
      component: () => import('../components/HalamanSejarah.vue')
    },
    {
      path: '/visimisi',
      name: 'visimisi',
      component: () => import('../components/HalamanVisiMisi.vue')
    },
    {
      path: '/peraturandesa',
      name: 'peraturandesa',
      component: () => import('../components/HalamanPeraturanDesa.vue')
    },
    {
      path: '/dataagama',
      name: 'dataagama',
      component: () => import('../components/HalamanDataAgama.vue')
    },
    {
      path: '/pendidikan',
      name: 'pendidikan',
      component: () => import('../components/HalamanPendidikan.vue')
    },
    {
      path: '/kependudukan',
      name: 'kependudukan',
      component: () => import('../components/HalamanPenduduk.vue')
    }
  ]
})

export default router
