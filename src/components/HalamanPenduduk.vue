<template>
  <div class="max-w-[80rem] mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold text-yellow-primary mb-8">Kependudukan</h1>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
      <Card
        v-for="(penduduk, index) in Penduduk"
        :key="index"
        :title="penduduk.title"
        :count="penduduk.count"
        class="cursor-pointer"
      />
    </div>
    <div class="mt-12">
      <UsiaPenduduk />
    </div>
    <div class="mt-12">
      <StatusKawin />
    </div>
    <div class="mt-12">
      <Pekerjaan />
    </div>
  </div>
</template>

<script>
import Card from './StatisticCard.vue'
import UsiaPenduduk from './UsiaPenduduk.vue'
import StatusKawin from './StatusKawin.vue'
import Pekerjaan from './Pekerjaan.vue'

export default {
  components: {
    Card,
    UsiaPenduduk,
    // StatusKawin,
    Pekerjaan
  },
  data() {
    return {
      Penduduk: [
        { title: 'Kepala Keluarga', count: 1818 },
        { title: 'Penduduk', count: 5296 },
        { title: 'Laki-Laki', count: 2631 },
        { title: 'Perempuan', count: 2665 }
      ]
    }
  }
}
</script>