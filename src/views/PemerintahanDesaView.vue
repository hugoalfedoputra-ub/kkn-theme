<template>
  <NavBar />
  <div class="flex flex-col justify-center items-center py-12 rounded-3xl">
    <div class="flex flex-col justify-center items-center rounded-xl">
      <img
        loading="lazy"
        src="/images/struktur_pemerintahan_butun.png"
        alt="Pemerintah Desa"
        class="w-4/5 pt-12 rounded-[10%]"
      />
    </div>
  </div>

  <section class="flex flex-col px-16 py-16 max-md:px-5">
    <h1 class="self-center text-4xl font-bold text-center text-yellow-primary max-md:max-w-full">
      Pemerintah Desa
    </h1>
    <div
      class="flex flex-col flex-wrap justify-center content-center py-20 mt-5 max-md:px-5 max-md:max-w-full"
    >
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <StaffDesaCard
          v-for="(profile, index) in profiles"
          :key="index"
          :name="profile.name"
          :position="profile.position"
          :image-src="profile.imageSrc"
        />
      </div>
    </div>
  </section>
  <FooterComponent />
</template>

<script>
import NavBar from '../components/NavBar.vue'
import StaffDesaCard from '../components/StaffDesaCard.vue'
import FooterComponent from '../components/FooterComponent.vue'
import profiles from '../assets/profiles.json'

export default {
  name: 'PemerintahanDesa',
  components: {
    NavBar,
    StaffDesaCard,
    FooterComponent
  },
  data() {
    return {
      profiles
    }
  }
}
</script>
