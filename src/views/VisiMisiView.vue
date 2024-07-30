<template>
  <main>
    <NavBar />
    <div class="flex flex-col min-h-screen">
      <div class="flex py-8 px-10">
        <div class="font-secondary mt-16 mx-auto md:w-[90%] lg:w-[80%] xl:w-[70%]">
          <div class="flex flex-col items-center animate-fadeDown">
            <h1
              class="text-4xl text-yellow-primary text-center font-primary font-bold drop-shadow-md"
            >
              Visi dan Misi
            </h1>
            <div class="mt-2 h-1 w-16 bg-yellow-primary rounded-3xl drop-shadow-lg"></div>
          </div>
          <div class="my-8 font-secondary animate-fadeRight">
            <h2 class="font-bold text-xl md:text-2xl">Visi</h2>
            <p class="text-base md:text-lg">
              {{ visi }}
            </p>
          </div>
          <div class="my-8 font-secondary animate-fadeRight">
            <h2 class="font-bold text-xl md:text-2xl">Misi</h2>
            <p class="text-base md:text-lg">
              <span v-for="(item, index) in misi" :key="index">
                {{ index + 1 }}. {{ item }}<br />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <FooterComponent />
  </main>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterComponent
  },
  data() {
    return {
      visi: 'Mewujudkan Desa Butun yang sejahtera dan mandiri, unggul di bidang pertanian.',
      misi: [
        'Menerapkan tata kelola pemerintahan dan pelayanan kepada masyarakat secara transparan untuk menuju desa yang mandiri.',
        'Meningkatkan pembangunan infrastruktur yang profesional, berkualitas, dan berkelanjutan.',
        'Mengembangkan sarana dan prasarana olahraga serta melestarikan seni dan budaya.',
        'Memberdayakan kelembagaan masyarakat.',
        'Meningkatkan sarana dan prasarana umum.',
        'Membentuk dan mengembangkan Badan Usaha Milik Desa (BUMDes) serta memperkuat permodalan.',
        'Mengoptimalkan sektor pertanian baik pada tahap produksi maupun pengelolaan hasil.'
      ]
    }
  }
}
</script>
