<template>
  <main>
    <NavBar />
    <div class="flex justify-center items-center">
      <div class="w-full px-2 py-16 sm:px-0">
        <TabGroup>
          <TabList class="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            <Tab
              v-for="category in Object.keys(categories)"
              as="template"
              :key="category"
              v-slot="{ selected }"
            >
              <button
                :class="[
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white/60 ring-offset-2 ring-offset-green-primary focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white text-yellow-primary shadow'
                    : 'text-yellow-400 hover:bg-white/[0.12] hover:text-white'
                ]"
              >
                {{ category }}
              </button>
            </Tab>
          </TabList>

          <TabPanels class="mt-2 w-full">
            <template v-for="(category, idx) in Object.values(categories)" :key="idx">
              <TabPanel
                :class="[
                  'rounded-xl bg-white p-3',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                ]"
              >
                <component :is="category.page" />
              </TabPanel>
            </template>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
    <FooterComponent />
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import HalamanPenduduk from '@/components/HalamanPenduduk.vue'
import HalamanDataAgama from '@/components/HalamanDataAgama.vue'
import HalamanPendidikan from '@/components/HalamanPendidikan.vue'
import NavBar from '@/components/NavBar.vue'
import FooterComponent from '@/components/FooterComponent.vue'

const categories = ref({
  Kependudukan: {
    page: HalamanPenduduk
  },
  Agama: {
    page: HalamanDataAgama
  },
  Pendidikan: {
    page: HalamanPendidikan
  }
})
</script>
