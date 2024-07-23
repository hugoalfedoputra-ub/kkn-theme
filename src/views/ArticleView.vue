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
const comments = ref([])
const newComment = ref({ owner: '', email: '', no_hp: '', komentar: '' })
const articleLoaded = ref(false)
const articleIsLoading = ref(false)
const commentsLoaded = ref(false)
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

const fetchComments = async () => {
  try {
    const response = await axios.get(`${url}artikel/${articleId}/komentar`)
    comments.value = response.data
  } catch (err) {
    error.value = 'Komentar Gagal Dimuat'
  } finally {
    commentsLoaded.value = true
  }
}

onMounted(() => {
  console.log(`url: `, url)
  fetchArticle()
  fetchComments()
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
        <h1 class="mb-8">{{ article.judul }}</h1>
        <div class="flex ms-[15%] gap-5">
          <p class="text-[1rem] text-black">Administrator</p>
          <div
            class="flex justify-center item-center self-end my-auto text-sm font-semibold text-yellow-primary"
          >
            {{ article.tgl_upload }}
          </div>
        </div>
      </div>

      <!-- Content -->
      <div
        class="flex flex-col p-5 mt-8 w-full max-w-[1196px] max-md:mt-10 max-md:max-w-full"
        v-html="article.isi"
      ></div>

      <!-- Comments Section -->
      <div v-if="commentsLoaded" class="mt-10">
        <h2 class="text-2xl font-bold mb-5">Komentar</h2>
        <div v-for="comment in comments" :key="comment.id" class="mb-5 p-4 border rounded">
          <p class="font-bold">{{ comment.owner }}</p>
          <p class="text-sm text-gray-500">{{ comment.tgl_upload }}</p>
          <p class="mt-2">{{ comment.komentar }}</p>
        </div>
      </div>


    </div>
    <FooterComponent />
  </main>
</template>
