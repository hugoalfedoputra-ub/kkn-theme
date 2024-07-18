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
      path: '/profile-desa',
      name: 'profile-desa',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
<<<<<<< HEAD
    },  
    {
      path: '/profile-desa/profile',
      name: 'profile',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/profile-desa/sejarah',
      name: 'sejarah',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SejarahView.vue')
    },
    {
      path: '/profile-desa/visi-misi',
      name: 'visi-misi',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/VisiMisiView.vue')
    },
=======
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
>>>>>>> 58d173dfddb41928d0394061bd582bf7df8f2975
  ]
})

export default router
