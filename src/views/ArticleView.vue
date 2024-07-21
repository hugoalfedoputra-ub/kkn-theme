<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { FwbCarousel, FwbSpinner } from 'flowbite-vue'

import axios from 'axios'
import NavBar from '@/components/NavBar.vue'
import FooterComponent from '@/components/FooterComponent.vue'

const url = import.meta.env.VITE_BASE_API_URL

const route = useRoute()
const articleId = route.params.id
const article = ref([])
const articleLoaded = ref(false)
const articleIsLoading = ref(false)

const fetchArticle = async (page = 1) => {
  articleIsLoading.value = true
  try {
    const response = await axios.get(`${url}artikel/${articleId}`)
    console.log(`${url}artikel/${articleId}`)
    console.log(response.data)
    article.value = response.data
  } catch (err) {
    error.value = 'Artikel Gagal Dimuat'
  } finally {
    articleLoaded.value = true
    articleIsLoading.value = false
  }
}

onMounted(() => {
  console.log(`url: `, url)
  fetchArticle()
})
</script>

<template>
  <main class="flex flex-col bg-white">
    <NavBar />
    <div class="min-h-screen self-center">

      <!-- Loading -->
      <div v-if="articleIsLoading" class="min-h-screen flex justify-center items-center mt-6">
        <FwbSpinner color="yellow" class="w-48 h-48 mr-2"></FwbSpinner>
      </div>

      <!-- Title -->
      <div class="mt-14 text-4xl font-bold text-center text-yellow-primary max-md:mt-10 font-primary">
        {{ article.judul }}
      </div>

      <!-- Content -->
      <div 
        class="flex flex-col p-5 mt-8 w-full max-w-[1196px] max-md:mt-10 max-md:max-w-full"
        v-html="article.isi"
      >
      </div>
    </div>

    <FooterComponent />
  </main>
</template>
