<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useRoute } from 'vue-router'
import SearchIcon from '../components/icons/IconSearch.vue'

const route = useRoute()

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'Profile Desa', 
    href: '/profile-desa',
    subItems: [
      { name: 'Sejarah Desa', href: '/profile-desa/sejarah' },
      { name: 'Visi & Misi', href: '/profile-desa/visi-misi' },
      { name: 'Profil Desa', href: '/profile-desa/profile' },
      { name: 'Peraturan Desa', href: '/profile-desa/peraturan-desa' }
    ]
  },
  { name: 'Pemerintahan Desa', href: '/pemerintahan-desa' },
  { name: 'Berita Desa', href: '/berita-desa' },
  { name: 'Statistik', href: '/statistik' },
  { name: 'Peta', href: '/peta-desa' }
]

const mobileMenuOpen = ref(false)
const hoverIndex = ref(null)
const hideTimeout = ref(null)

const isActive = (href) => {
  return route.path === href
}

const showSubItems = (index) => {
  clearTimeout(hideTimeout.value)
  hoverIndex.value = index
}

const hideSubItems = () => {
  hideTimeout.value = setTimeout(() => {
    hoverIndex.value = null
  }, 200)
}
</script>

<template>
  <header class="inset-x-0 top-0 z-50 bg-green-primary font-primary">
    <nav
      class="flex items-center justify-between mx-3 md:mx-8 lg:mx-4 lg:justify-around p-1 lg:px-8 lg:gap-10 xl:gap-20"
      aria-label="Global"
    >
      <!-- Logo Section -->
      <div class="my-1">
        <span class="sr-only">Desa Butun</span>
        <a href="/" class="flex gap-2 lg:gap-4 justify-center items-center">
          <img
            loading="lazy"
            src="/public/images/logo_butun.png"
            class="shrink-0 aspect-square w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 mb-2 my-1 lg:mb-3"
          />
          <div class="flex flex-col mt-1">
            <div class="text-xs md:text-sm xl:text-lg font-bold text-white">Butun</div>
            <div
              class="text-[0.6rem] md:text-[0.8rem] xl:text-md font-semibold text-yellow-primary"
            >
              Kab. Blitar
            </div>
          </div>
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-8 w-8 stroke-white" aria-hidden="true" />
        </button>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex lg:gap-x-4 xl:gap-x-7 relative">
        <div
          v-for="(item, index) in navigation"
          :key="item.name"
          class="relative"
          @mouseenter="showSubItems(index)"
          @mouseleave="hideSubItems"
        >
          <a
            :href="item.href"
            :class="[
              'max-x lg:text-sm xl:text-lg font-medium leading-6',
              isActive(item.href) ? 'text-yellow-primary' : 'text-white',
              'hover:text-yellow-primary'
            ]"
          >
            {{ item.name }}
          </a>
          <div
            v-if="item.subItems && hoverIndex === index"
            class="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-99"
            @mouseenter="showSubItems(index)"
            @mouseleave="hideSubItems"
            
          >
            <div>
              <div
                v-for="subItem in item.subItems"
                :key="subItem.name"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <a :href="subItem.href">{{ subItem.name }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Search and Login Section -->
      <div
        class="hidden lg:flex lg:gap-3 xl:gap-5 lg:justify-start lg:items-center text-base font-semibold"
      >
        <SearchIcon
          loading="lazy"
          class="shrink-0 my-auto w-6 aspect-square stroke-white lg:w-5.5 lg:h-5.5"
        />
        <div
          class="flex justify-center items-center p-2 bg-yellow-primary rounded-2xl h-8 xl:h-10 cursor-pointer hover:text-white"
        >
          <a
            href="https://blitar-butun.desa.id/siteman"
            rel="noopener noreferrer"
            target="_blank"
            class="leading-6 text-xs xl:text-sm"
            >Login Admin</a
          >
        </div>
      </div>
    </nav>

    <!-- Mobile Menu Dialog -->
    <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-50" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 h-[30%] w-full overflow-y-auto bg-green-primary sm:ring-1 sm:ring-gray-900/10"
      >
        <div
          class="flex items-center justify-between sticky top-0 bg-green-primary px-6 py-4 drop-shadow-md"
        >
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Desa Butun</span>
            <img class="h-12 w-auto" src="/images/logo_butun.png" alt="" />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon
              class="h-6 w-6 stroke-white hover:animate-glow stroke-2 rounded-lg"
              aria-hidden="true"
            />
          </button>
        </div>
        <div class="mt-6 flow-root px-6">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[
                  'font-secondary -mx-3 block rounded-lg px-3 py-2 text-base leading-7',
                  isActive(item.href) ? 'bg-yellow-primary' : 'text-white',
                  'hover:bg-yellow-primary'
                ]"
                >{{ item.name }}</a
              >
            </div>
            <div class="py-6">
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-bold leading-7 text-white hover:bg-yellow-primary"
                >Login Admin</a
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>
