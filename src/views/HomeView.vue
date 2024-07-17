<script setup>
import NavBar from '../components/NavBar.vue'
import InteractiveMap from '../components/InteractiveMap.vue'
import HomePageArticleCard from '../components/HomePageArticleCard.vue'
import Footer from '../components/Footer.vue'

const articles = [
  { title: 'Kerja Bakti', date: '13 Juni 2024' },
  { title: 'Bantuan Untuk Anak-Anak di Papua', date: '13 Juni 2024' },
  { title: 'Kegiatan Susruk Wangan', date: '13 Juni 2024' },
  { title: 'Pengecoran Jalan Kabupaten di Dusun Baos', date: '13 Juni 2024' },
  {
    title: 'Penyaluran Dana Bantuan Langsung Tunai Dana Desa Bulan April-Mei 2024',
    date: '13 Juni 2024'
  }
]
</script>

<template>
  <div class="flex flex-col bg-gray-200">
    <NavBar />
    <div
      class="flex flex-col justify-center w-full text-3xl font-bold text-black bg-white max-md:max-w-full"
    >
      <div
        class="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 w-full min-h-[650px] max-md:px-5 max-md:max-w-full"
      >
        <img
          loading="lazy"
          src="../assets/images/cover_landing_page.jpg"
          class="object-cover absolute inset-0 size-full opacity-50"
        />
        <div
          class="flex relative flex-col justify-center px-5 py-2 mt-28 mb-11 max-w-full w-[569px] max-md:px-5 max-md:my-10"
        >
          <img
            loading="lazy"
            src="../assets/images/Blitar__sid__irtNbnZ.png"
            class="self-center max-w-full aspect-square w-[100px] md:w-[120px] lg:w-[140px]"
          />
          <div class="mt-5 text-4xl font-extrabold text-center max-md:text-4xl">Butun</div>
          <div class="text-xl md:text-2xl self-center">Kec. Gandusari, Kab. Blitar</div>
          <div class="text-xl md:text-2xl self-center">Provinsi Jawa Timur</div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col justify-center px-5 py-10 w-full text-4xl font-bold text-center text-yellow-primary bg-emerald-900 max-md:max-w-full"
    >
      <div class="self-center">APARATUR DESA</div>
      <img loading="lazy" srcSet="..." class="mt-10 w-full aspect-[2.78] max-md:max-w-full" />
    </div>
    <div
      class="justify-end md:px-10 lg:px-20 py-0 md:py-10 w-full bg-white-secondary max-md:px-5 max-md:max-w-full"
    >
      <div class="flex gap-5 max-md:flex-col max-md:gap-0">
        <div class="flex flex-col px-10 md:items-center w-6/12 md:px-0 max-md:ml-0 max-md:w-full">
          <div
            class="flex flex-col justify-center items-start md:px-10 lg:px-20 py-20 mt-1.5 text-base font-semibold text-black max-md:px-5 max-md:mt-10"
          >
            <div class="text-4xl font-bold text-start text-yellow-primary">Lokasi Desa</div>
            <div class="mt-12 text-2xl font-bold max-md:mt-10">Desa Butun</div>
            <div class="mt-2.5">Kec. Gandusari, Kab. Blitar</div>
            <div class="mt-2.5">Provinsi Jawa Timur</div>
            <div class="flex gap-1 md:gap-2.5 p-4 mt-8 text-start bg-yellow-primary rounded-2xl">
              <div class="text-xs md:text-md lg:text-[0.8rem] my-auto">Cek Selengkapnya</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b60966f464887acb57afbe0e3ee24c56de8400c4a2a5e1a822049a5817248edf?"
                class="shrink-0 w-5 aspect-square"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div
            class="flex grow justify-center items-center px-6 py-10 max-md:px-5 max-md:mt-10 max-md:max-w-full"
          >
            <InteractiveMap
              loading="lazy"
              class="w-[40rem] h-[30rem] md:w-[25rem] md:h-[20rem] lg:w-[25rem] lg:h-[20rem] xl:w-[40rem] xl:h-[30rem]"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col text-start px-2.5 py-10 w-full bg-white max-md:max-w-full">
      <div class="self-center text-4xl font-bold text-center text-yellow-primary">
        Berita Desa Terbaru
      </div>
      <div class="mt-10 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col max-md:gap-0">
          <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div class="flex flex-col px-8 py-5 max-md:px-5 max-md:max-w-full">
              <div class="flex flex-col justify-center bg-black rounded-3xl max-md:max-w-full">
                <img
                  loading="lazy"
                  src="../assets/images/pembangunan_desa.jpg"
                  class="w-full aspect-[1.85] max-md:max-w-full"
                />
              </div>
              <div
                class="flex flex-col justify-center self-center px-2.5 mt-5 max-w-full text-center w-[572px]"
              >
                <div class="text-2xl text-start font-bold text-black max-md:max-w-full">
                  Pembangunan Yang Bersumber Dana Desa 2024
                </div>
                <div
                  class="flex gap-0 justify-center self-end mt-2.5 text-sm font-semibold text-yellow-primary"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b71cf9e5bb2d8659573ea80bbded8c77f1b09b6c12103d0d268dd02ed0045210?"
                    class="shrink-0 w-5 aspect-square mr-2"
                  />
                  <div>13 Juni 2024</div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col ml-0 w-6/12 max-md:ml-0 max-md:w-full">
            <div class="flex flex-col gap-2 grow p-5 md:p-2 max-md:max-w-full">
              <HomePageArticleCard
                v-for="article in articles"
                :key="article.title"
                :imageCover="true"
                :title="article.title"
                :date="article.date"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
