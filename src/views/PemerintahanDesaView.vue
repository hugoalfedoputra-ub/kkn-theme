<template>
  <NavBar />
  <!-- <div class="flex flex-col justify-center items-center py-12 rounded-3xl">
    <div class="flex flex-col justify-center items-center rounded-xl">
      <img
        loading="lazy"
        src="/images/struktur_pemerintahan_butun.png"
        alt="Pemerintah Desa"
        class="w-4/5 pt-12 rounded-[10%]"
      />
    </div>
  </div> -->

  <section class="flex flex-col px-16 py-16 max-md:px-5">
    <h1 class="self-center text-4xl font-bold text-center text-yellow-primary max-md:max-w-full">
      Pemerintah Desa
    </h1>
    <div
      class="flex flex-col flex-wrap justify-center content-center py-20 mt-5 max-md:px-5 max-md:max-w-full"
    >

      <!-- Loading -->
      <div v-if="pamongIsLoading" class="flex justify-center items-center mt-24">
        <FwbSpinner color="yellow" class="w-48 h-48 mr-2"></FwbSpinner>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <StaffDesaCard
          v-for="(profile, index) in pamong"
          :key="index"
          :name="profile.pamong_nama"
          :position="profile.jabatan_nama"
          :image-src="getImg(profile.foto)"
        />
      </div>
    </div>
  </section>
  <FooterComponent />
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import StaffDesaCard from '../components/StaffDesaCard.vue'
import FooterComponent from '../components/FooterComponent.vue'

import axios from 'axios'
import { ref, onMounted } from 'vue'
import { FwbSpinner } from 'flowbite-vue'

const url = import.meta.env.VITE_BASE_API_URL

const pamong = ref([])
const pamongLoaded = ref(false)
const pamongIsLoading = ref(false)

const error = ref(null)

const getImg = (img) => {
  return `https://blitar-butun.desa.id/desa/upload/user_pict/${img}`
}

const fetchPamong = async () => {
  pamongIsLoading.value = true
  try {
    const response = await axios.get(url + 'twebdesapamong')
    console.log(response.data)
    pamong.value = response.data
  } catch (err) {
    error.value = 'Pamong Gagal Dimuat'
  } finally {
    pamongLoaded.value = true
    pamongIsLoading.value = false
  }
}

onMounted(() => {
  console.log(pamong.value)
  fetchPamong()
})

</script>