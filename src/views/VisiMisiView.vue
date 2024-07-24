<template>
  <main>
    <NavBar />
    <div class="flex flex-col min-h-screen">
      <div class="flex py-8 px-10">
        <div class="font-secondary mt-16 mx-auto md:w-[90%] lg:w-[80%] xl:w-[70%]">
          <h1 class="text-3xl text-yellow-primary text-center font-primary font-bold">
            Visi dan Misi
          </h1>
          <div class="my-8 font-secondary">
            <h2 class="font-bold">Visi</h2>
            <p class="text-base">
              {{ visi }}
            </p>
          </div>
          <div class="my-8 font-secondary">
            <h2 class="font-bold">Misi</h2>
            <p class="text-base">
              <span v-for="(item, index) in misi" :key="index">
                {{ index + 1 }}. {{ item }}<br>
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
      visi: "Terwujudnya Masyarakat Desa Butun yang sejahtera dan mandiri terdepan di bidang pertanian.",
      misi: [
        "Menerapkan Tata kelola Pemerintah dan Pelayanan Kepada Masyarakat secara transparan menuju Desa yang Mandiri.",
        "Meningkatkan Pembangunan Infrastruktur yang profisional berkualitas dan berkelanjutan.",
        "Pengembangan Sarana prasarana olahraga, Pelestarian Seni dan budaya.",
        "Memberdayakan Kelembagaan masyarakat.",
        "Meningkatkan Sarana dan Prasarana Umum.",
        "Membentuk dan Mengembangkan BUMDesa serta penguatan Permodalan.",
        "Mengoptimalkan sektor pertanian baik tahap produksi maupun tahap pengelolaan hasil."
      ]
    }
  }
}
</script>
