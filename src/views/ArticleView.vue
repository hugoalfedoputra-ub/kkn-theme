<script>
import axios from 'axios'
// import { ref, onMounted } from 'vue'

import FooterComponent from '@/components/FooterComponent.vue'
import NavBar from '@/components/NavBar.vue'

const url = import.meta.env.VITE_BASE_API_URL

export default {
  components: {
    NavBar,
    FooterComponent
  },
  data() {
    return {
      articles: [],
      articlesLoaded: false,
      articleIsLoading: false,
      error: null,
      pageId: null
    }
  },
  methods: {
    async fetchArticles(page = 1) {
      this.articleIsLoading = true
      try {
        const response = await axios.get(`${url}artikel`, {
          params: {
            page
          }
        })
        console.log(response.data.data)
        this.articles = response.data.data
      } catch (err) {
        this.error = 'Artikel Gagal Dimuat'
      } finally {
        this.articlesLoaded = true
        this.articleIsLoading = false
      }
    },
    getFirstWord(dateString) {
      return dateString.split(' ')[0]
    },
    getImg(img) {
      return `https://blitar-butun.desa.id/desa/upload/artikel/sedang_${img}`
    },
    getUrl(id) {
      return `/artikel/${id}`
    }
  },
  mounted() {
    console.log(`url : `, url)
    this.fetchArticles()
  }
}
</script>

<template>
  <main class="flex flex-col bg-white">
    <NavBar />
    <div
      class="flex overflow-hidden relative flex-col items-center p-10 w-full text-3xl font-bold text-black min-h-[478px] max-md:px-5 max-md:max-w-full"
    >
      <img
        loading="lazy"
        src="/images/basmi_nyamuk.jpg"
        class="object-cover absolute inset-0 size-full"
      />
    </div>
    <div
      class="self-center mt-14 text-4xl font-bold text-center text-yellow-primary max-md:mt-10 font-primary"
    >
      Tes Judul Artikel
    </div>
    <div
      class="flex flex-col self-center p-5 mt-8 w-full max-w-[1196px] max-md:mt-10 max-md:max-w-full"
    >
      <!-- Loading -->
      <div v-if="articleIsLoading">Loading yah bwang</div>
      <p class="text-base font-secondary">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived not only five
        centuries but also the leap into electronic typesetting, remaining essentially unchanged. It
        was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </p>
      <br />
      <p class="text-base font-secondary">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived not only five
        centuries but also the leap into electronic typesetting, remaining essentially unchanged. It
        was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </p>
      <br />
      <p class="text-base font-secondary">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived not only five
        centuries but also the leap into electronic typesetting, remaining essentially unchanged. It
        was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </p>
    </div>
    <div class="self-center mt-16 font-primary text-xl font-bold text-yellow-primary max-md:mt-10">
      1 2 3 4 5 6 7 8 9 10
    </div>
    <FooterComponent />
  </main>
</template>
