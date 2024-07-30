import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
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
    },
    {
      path: '/profile-desa/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/profile-desa/sejarah',
      name: 'sejarah',
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
    {
      path: '/profile-desa/peraturan-desa',
      name: 'peraturan-desa',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PeraturanDesaView.vue')
    },
    {
      path: '/pemerintahan-desa',
      name: 'pemerintahan-desa',
      component: () => import('../views/PemerintahanDesaView.vue')
    },
    {
      path: '/berita-desa',
      name: 'berita-desa',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ArticlesView.vue')
    },
    {
      path: '/berita-desa/artikel/:id',
      name: 'artikel',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ArticleView.vue')
    },
    {
      path: '/peta-desa',
      name: 'peta-desa',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PetaView.vue')
    },
    {
      path: '/statistik',
      name: 'statistik-desa',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/StatistikView.vue')
    },
    {
      path: '/statistik/kependudukan',
      name: 'statistik-kependudukan',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/HalamanPenduduk.vue')
    },
    {
      path: '/statistik/agama',
      name: 'statistik-agama',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/HalamanDataAgama.vue')
    },
    {
      path: '/statistik/pendidikan',
      name: 'statistik-penduduk',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/HalamanPendidikan.vue')
    }
  ]
})

export default router
