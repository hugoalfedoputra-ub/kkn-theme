<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import SearchIcon from '../components/icons/IconSearch.vue'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Profile Desa', href: '/profile-desa' },
  { name: 'Pemerintahan Desa', href: '/pemerintahan-desa' },
  { name: 'Berita Desa', href: '/berita-desa' },
  { name: 'Statistik', href: '/statistik' },
  { name: 'Peta', href: '/peta' },
  { name: 'Kontak', href: '/kontak' }
]

const mobileMenuOpen = ref(false)
</script>

<template>
  <div class="bg-green-primary font-primary">
    <header class="inset-x-0 top-0 z-50">
      <nav
        class="flex items-center justify-between mx-3 md:mx-8 lg:mx-4 lg:justify-arounds p-1 lg:px-8 lg:gap-10 xl:gap-20"
        aria-label="Global"
      >
        <div class="my-1">
          <span class="sr-only">Desa Butun</span>
          <a href="" class="flex gap-2 lg:gap-4 justify-center items-center">
            <img
              loading="lazy"
              src="../assets/images/Blitar__sid__irtNbnZ.png"
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
        <div class="hidden lg:flex lg:gap-x-4 xl:gap-x-7">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="max-x lg:text-sm xl:text-lg font-medium leading-6 text-white"
            >{{ item.name }}</a
          >
        </div>
        <div
          class="hidden lg:flex lg:gap-3 xl:gap-5 lg:justify-start lg:items-center text-base font-semibold"
        >
          <SearchIcon
            loading="lazy"
            class="shrink-0 my-auto w-6 aspect-square stroke-white lg:w-5.5 lg:h-5.5"
          />
          <div
            class="flex justify-center items-center p-2 bg-yellow-primary rounded-2xl h-8 xl:h-10"
          >
            <a
              href="https://blitar-butun.desa.id/siteman"
              rel="noopener noreferrer"
              target="_blank"
              class="leading-6 lg:text-sm"
              >Login Admin</a
            >
          </div>
        </div>
      </nav>
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-green-primary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="../assets/images/Blitar__sid__irtNbnZ.png" alt="" />
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6 stroke-white" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-yellow-primary"
                  >{{ item.name }}</a
                >
              </div>
              <div class="py-6">
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-yellow-primary"
                  >Login Admin</a
                >
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </div>
</template>