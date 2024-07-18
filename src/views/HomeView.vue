<script setup>
import NavBar from '@/components/NavBar.vue'
import InteractiveMap from '@/components/InteractiveMap.vue'
import HomePageArticleCard from '@/components/HomePageArticleCard.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import IconCalenderSchedule from '@/components/icons/IconCalenderSchedule.vue'

const articles = [
  { title: 'Kerja Bakti', date: '13 Juni 2024', href: '' },
  { title: 'Bantuan Untuk Anak-Anak di Papua', date: '13 Juni 2024', href: '' },
  { title: 'Kegiatan Susruk Wangan', date: '13 Juni 2024', href: '' },
  { title: 'Pengecoran Jalan Kabupaten di Dusun Baos', date: '13 Juni 2024', href: '' },
  {
    title: 'Penyaluran Dana Bantuan Langsung Tunai Dana Desa Bulan April-Mei 2024',
    date: '13 Juni 2024', href: ''
  }
]
</script>

<template>
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
        <div class="mt-5 text-4xl font-extrabold text-center max-md:text-4xl font-primary">
          Butun
        </div>
        <div class="text-xl md:text-2xl self-center font-secondary">
          Kec. Gandusari, Kab. Blitar
        </div>
        <div class="text-xl md:text-2xl self-center font-secondary">Provinsi Jawa Timur</div>
      </div>
    </div>
  </div>
  <div
    class="flex flex-col justify-center px-5 py-10 w-full text-4xl font-bold text-center text-yellow-primary bg-emerald-900 max-md:max-w-full"
  >
    <div class="self-center font-primary">Aparatur Desa</div>
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
          <div class="text-4xl font-bold text-start text-yellow-primary font-primary">
            Lokasi Desa
          </div>
          <div class="mt-12 text-2xl font-bold max-md:mt-10 font-primary">Desa Butun</div>
          <div class="mt-2.5 font-secondary">Kec. Gandusari, Kab. Blitar</div>
          <div class="mt-2.5 font-secondary">Provinsi Jawa Timur</div>
          <div class="flex gap-1 md:gap-2.5 p-4 mt-8 text-start bg-yellow-primary rounded-2xl">
            <div class="text-xs md:text-md lg:text-[0.8rem] my-auto font-secondary">
              Cek Selengkapnya
            </div>
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
    <div class="self-center text-4xl font-bold text-center text-yellow-primary font-primary">
      Berita Desa Terbaru
    </div>
    <div class="mt-10 max-w-full lg:mx-10 xl:mx-10">
      <div class="flex justify-around gap-5 max-md:flex-col max-md:gap-0">
        <div class="flex justify-center w-2/5 max-md:ml-0 max-md:w-full">
          <div class="flex flex-col p-5 max-md:px-5 max-md:max-w-full">
            <div class="h-auto max-w-full">
              <img loading="lazy" src="../assets/images/pembangunan_desa.jpg" class="rounded-3xl" />
            </div>
            <div
              class="flex flex-col justify-center self-center px-2.5 mt-5 max-w-full text-center"
            >
              <div class="text-xl text-start font-bold text-black max-md:max-w-full font-primary">
                Pembangunan Yang Bersumber Dana Desa 2024
              </div>
              <div
                class="flex gap-0 justify-center self-end mt-2.5 text-sm font-semibold text-yellow-primary"
              >
                <IconCalenderSchedule class="shrink-0 w-5 aspect-square mr-2" />
                <div class="font-secondary">13 Juni 2024</div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div class="flex flex-col gap-2 grow p-5 md:p-2 max-md:max-w-full">
            <HomePageArticleCard
              v-for="article in articles"
              :key="article.title"
              :title="article.title"
              :date="article.date"
              :href="article.href"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterComponent />
</template>
