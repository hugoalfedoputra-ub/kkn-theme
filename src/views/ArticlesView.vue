<template>
  <main class="flex flex-col bg-white">
    <NavBar />
    <FwbCarousel :pictures slide :slide-interval="2000" />

    <div class="self-center mt-14 text-4xl font-bold text-center text-yellow-primary max-md:mt-10">
      Berita Desa
    </div>

    <!-- Search  -->
    <div class="pt-8 flex flex-col md:flex-row justify-center items-center">
      <SearchInput
        v-model="searchQuery"
        class="mt-4 md:mt-0"
        @dblclick="resetFilters"
      ></SearchInput>
    </div>

    <!-- Loading -->
    <div v-if="articleIsLoading" class="min-h-screen flex justify-center items-center mt-6">
      <FwbSpinner color="yellow" class="w-48 h-48 mr-2"></FwbSpinner>
    </div>

    <!-- Empty Section -->
    <div
      v-if="articlesLoaded && articles.length === 0"
      class="min-h-screen flex justify-center items-center"
    >
      <div class="flex items-center bg-white p-6 gap-x-4 rounded-lg">
        <ArticleNotFound />
      </div>
    </div>

    <!-- Articles -->
    <div
      class="flex flex-col self-center p-5 mt-14 w-full max-w-[1196px] max-md:mt-10 max-md:max-w-full"
    >
      <ArticleCard
        v-for="article in articles"
        :key="article.judul"
        :title="article.judul"
        :date="getFirstWord(article.tgl_upload)"
        :href="getUrl(article.id)"
        :src="getImg(article.gambar)"
        class="mt-3 duration-300 hover:scale-105"
      />
    </div>

    <!-- Pagination -->
    <div class="self-center my-8 font-primary text-xl font-bold text-yellow-primary max-md:mt-10">
      <button @click="prevPage" :disabled="currentPage === 1" class="mr-2">Previous</button>

      <button
        v-for="page in paginationRange"
        :key="page"
        @click="changePage(page)"
        :disabled="page === '...' || page === currentPage"
        class="mx-1"
        :class="{ 'font-bold': page === currentPage, 'cursor-not-allowed': page === '...' }"
      >
        {{ page }}
      </button>

      <button @click="nextPage" :disabled="currentPage === totalPages" class="ml-2">Next</button>
    </div>

    <FooterComponent />
  </main>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import axios from 'axios'
import NavBar from '@/components/NavBar.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import ArticleCard from '@/components/ArticleCard.vue'
import SearchInput from '@/components/SearchInput.vue'
import { FwbCarousel, FwbSpinner } from 'flowbite-vue'
import debounce from 'lodash/debounce'
import ArticleNotFound from '@/components/ArticleNotfound.vue'

const url = import.meta.env.VITE_BASE_API_URL

const articles = ref([])
const articlesLoaded = ref(false)
const articleIsLoading = ref(false)
const error = ref('')
const currentPage = ref(1)
const totalPages = ref(1)
const searchQuery = ref('')

const pictures = ref([
  { src: '/public/images/basmi_nyamuk.jpg' },
  { src: '/public/images/dummy_structure.jpg' },
  { src: '/public/images/map_butun.png' }
])

const fetchArticles = async (page = 1) => {
  articleIsLoading.value = true
  try {
    const response = await axios.get(`${url}artikel`, {
      params: {
        page,
        search: searchQuery.value
      }
    })
    console.log(response.data.data)
    articles.value = response.data.data
    totalPages.value = response.data.last_page
    currentPage.value = response.data.current_page
  } catch (err) {
    error.value = 'Artikel Gagal Dimuat'
  } finally {
    articlesLoaded.value = true
    articleIsLoading.value = false
  }
}

const debouncedfetchArticles = debounce(fetchArticles, 300)

const getFirstWord = (dateString) => {
  return dateString.split(' ')[0]
}

const getImg = (img) => {
  return `https://blitar-butun.desa.id/desa/upload/artikel/sedang_${img}`
}

const getUrl = (id) => {
  return `/berita-desa/artikel/${id}`
}

const changePage = (page) => {
  if (page !== currentPage.value && page !== '...') {
    fetchArticles(page)
  }
}

// Function to fetch the next page of jobs
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    fetchArticles(currentPage.value + 1)
  }
}

// Function to fetch the previous page of jobs
const prevPage = () => {
  if (currentPage.value > 1) {
    fetchArticles(currentPage.value - 1)
  }
}

// Create a computed property for pagination range
const paginationRange = computed(() => {
  const range = []
  const total = totalPages.value
  const current = currentPage.value
  const delta = 2
  let left = current - delta
  let right = current + delta + 1

  if (totalPages.value <= 1) {
    return []
  }

  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= left && i < right)) {
      range.push(i)
    } else if (i === left - 1 || i === right) {
      range.push('...')
    }
  }
  return range
})

watch(searchQuery, () => {
  debouncedfetchArticles()
})

onMounted(() => {
  console.log(`url: `, url)
  fetchArticles()
})
</script>
