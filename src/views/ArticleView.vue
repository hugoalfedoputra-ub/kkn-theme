<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { FwbSpinner } from 'flowbite-vue'
import NavBar from '@/components/NavBar.vue'
import FooterComponent from '@/components/FooterComponent.vue'

const url = import.meta.env.VITE_BASE_API_URL

const route = useRoute()
const articleId = route.params.id
const article = ref([])
const articleLoaded = ref(false)
const articleIsLoading = ref(false)
const error = ref(null)

const fetchArticle = async () => {
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

// const getFirstWord = (dateString) => {
//   return dateString.split(' ')[0]
// }

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
      <div
        class="mt-14 text-4xl font-bold text-center text-yellow-primary max-md:mt-10 font-primary"
      >
        <h1 class="mb-8">{{ article.judul }}</h1>
        <div class="flex ms-[15%] gap-5">
          <p class="text-[1rem] text-black">Administrator</p>
          <div
            class="flex justify-center item-center self-end my-auto text-sm font-semibold text-yellow-primary"
          >
            {{ article.tgl_upload }}
            <!-- <div class="font-secondary">
              {{ getFirstWord(article.tgl_upload) }}
            </div> -->
          </div>
        </div>
      </div>

      <!-- Content -->
      <div
        class="flex flex-col p-5 mt-8 w-full max-w-[1196px] max-md:mt-10 max-md:max-w-full"
        v-html="article.isi"
      ></div>
    </div>

    <FooterComponent />
  </main>
</template>
