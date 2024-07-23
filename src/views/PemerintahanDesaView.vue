<template>
  <NavBar />
  <div class="flex flex-col justify-center items-center py-12 rounded-3xl">
    <div class="flex flex-col justify-center items-center rounded-xl">
      <img
        loading="lazy"
        src="/images/struktur_pemerintahan_butun.png"
        alt="Pemerintah Desa"
        class="w-4/5 py-12 rounded-[10%]"
      />
    </div>
  </div>

  <section class="flex flex-col px-16 py-16 max-md:px-5">
    <h1 class="self-center text-4xl font-bold text-center text-orange-400 max-md:max-w-full">
      Pemerintah Desa
    </h1>
    <div class="flex flex-col flex-wrap justify-center content-center py-20 mt-5 max-md:px-5 max-md:max-w-full">
      <div class="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
        <StaffDesaCard
          v-for="(profile, index) in profiles.slice(0, 4)"
          :key="index"
          :name="profile.name"
          :position="profile.position"
          :image-src="profile.imageSrc"
        />
      </div>
      <div class="flex gap-10 justify-between max-md:flex-wrap max-md:max-w-full mt-12">
        <StaffDesaCard
          v-for="(profile, index) in profiles.slice(4, 8)"
          :key="index + 4"
          :name="profile.name"
          :position="profile.position"
          :image-src="profile.imageSrc"
        />
      </div>
      <div class="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full mt-12">
          <StaffDesaCard
            v-for="(profile, index) in profiles.slice(8, 12)"
            :key="index + 8"
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
import NavBar from '../components/NavBar.vue';
import StaffDesaCard from '../components/StaffDesaCard.vue';
import FooterComponent from '../components/FooterComponent.vue';
import profiles from '../assets/profiles.json';

export default {
  name: 'PemerintahanDesa',
  components: {
    NavBar,
    StaffDesaCard,
    FooterComponent,
  },
  data() {
    return {
      profiles,
    };
  },
};
</script>
