<script>
import axios from 'axios'
// import { ref, onMounted } from 'vue'

import ArticleCard from '@/components/ArticleCard.vue'
import FooterComponent from '@/components/FooterComponent.vue'
// import IconChevronLeft from '@/components/icons/IconChevronLeft.vue'
// import IconChevronRight from '@/components/icons/IconChevronRight.vue'
// import ArticleCarousel from '@/components/ArticleCarousel.vue'
import { FwbCarousel, FwbSpinner } from 'flowbite-vue'
import NavBar from '@/components/NavBar.vue'

const url = import.meta.env.VITE_BASE_API_URL

export default {
  components: {
    NavBar,
    FooterComponent,
    // IconChevronLeft,
    // IconChevronRight,
    ArticleCard,
    FwbCarousel,
    FwbSpinner
  },
  data() {
    return {
      articles: [],
      articlesLoaded: false,
      articleIsLoading: false,
      error: null,
      pageId: null,
      pictures: [
        { src: '/public/images/basmi_nyamuk.jpg' },
        { src: '/public/images/dummy_structure.jpg' },
        { src: '/public/images/map_butun.png' }
      ]
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
    <FwbCarousel :pictures slide :slide-interval="2000" />
    <!-- <div
      class="flex overflow-hidden relative flex-col items-center p-10 w-full text-3xl font-bold text-black min-h-[478px] max-md:px-5 max-md:max-w-full"
    >
      <img
        loading="lazy"
        src="/images/basmi_nyamuk.jpg"
        class="object-cover absolute inset-0 size-full opacity-10"
      /> -->
    <!-- <div class="relative flex items-center justify-between w-full my-auto">
        <IconChevronLeft :size="48" />
        <div class="my-auto font-primary">
          <div class="text-4xl font-extrabold text-center">Butun</div>
          <div class="text-lg mt-5">Kec. Gandusari, Kab. Blitar</div>
          <div class="text-lg text-center">Provinsi Jawa Timur</div>
        </div>
        <IconChevronRight :size="48" />
      </div> -->
    <!-- </div> -->
    <div class="self-center mt-14 text-4xl font-bold text-center text-yellow-primary max-md:mt-10">
      Berita Desa
    </div>
    <!-- Loading -->
    <div v-if="articleIsLoading" class="flex justify-center items-center mt-24">
      <FwbSpinner color="yellow" class="w-48 h-48 mr-2"></FwbSpinner>
    </div>
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
        class="mt-3"
      />
    </div>
    <div class="self-center mt-16 font-primary text-xl font-bold text-yellow-primary max-md:mt-10">
      1 2 3 4 5 6 7 8 9 10
    </div>
    <FooterComponent />
  </main>
</template>
