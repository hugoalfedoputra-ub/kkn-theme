<template>
  <main>
    <NavBar />
    <div class="flex flex-col min-h-screen">
      <div class="flex py-8 px-10">
        <div class="font-secondary mt-16 mx-auto md:w-[90%] lg:w-[80%] xl:w-[70%]">
          <div class="flex flex-col items-center">
            <h1
              class="text-4xl text-yellow-primary text-center font-primary font-bold drop-shadow-md"
            >
              Peraturan Desa
            </h1>
            <div class="mt-2 h-1 w-16 bg-yellow-primary rounded-3xl drop-shadow-lg"></div>
          </div>
          <div class="my-8 font-secondary flex justify-center">
            <TabelPeraturan
              :peraturan-desa="peraturanDesa"
              :nomor-peraturan-desa="nomorPeraturanDesa"
            />
          </div>
        </div>
      </div>
    </div>
    <FooterComponent />
  </main>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue'
import NavBar from '@/components/NavBar.vue'
import TabelPeraturan from '@/components/TabelPeraturan.vue'

export default {
  name: 'PeraturanDesa',
  components: {
    NavBar,
    TabelPeraturan,
    FooterComponent
  },
  data() {
    return {
      peraturanDesa: [
        'Perdes APBDS Rancangan',
        'Perdes Realisasi APBDS 2019',
        'Perdes RKP 2021',
        'Perdes Penegasan Status Penggunaan Tanah Desa',
        'Perdes Pengelolaan Sampah',
        'Perdes Lingkungan Hidup',
        'Perdes Lingkungan Hidup',
        'Perdes Larangan Nyetrum dan Mengobati Ikan di Sungai',
        'Perdes RPJMDes',
        'Perdes Perubahan Pengurus SumDes Rukun Santoso',
        'Perdes Perubahan RKP I Tahun 2019',
        'Perdes APBDES',
        'Perdes Kewenangan'
      ],
      nomorPeraturanDesa: [
        '01 Tahun 2020',
        '02 Tahun 2020',
        '03 Tahun 2020',
        '04 Tahun 2020',
        '05 Tahun 2020',
        '06 Tahun 2020',
        '07 Tahun 2020',
        '08 Tahun 2020',
        '09 Tahun 2020',
        '10 Tahun 2020',
        '11 Tahun 2020',
        '12 Tahun 2020',
        '13 Tahun 2020',
        '14 Tahun 2020'
      ]
    }
  }
}
</script>
