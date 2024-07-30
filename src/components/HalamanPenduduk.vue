<template>
  <div class="max-w-[80rem] mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold text-yellow-primary mb-8 animate-fadeRight">Kependudukan</h1>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeUp">
      <statistic-card
        v-for="(penduduk, index) in Penduduk"
        :key="index"
        :title="penduduk.title"
        :count="penduduk.count"
        class="cursor-pointer"
      />
    </div>
    <div class="mt-12 animate-fadeLeft">
      <UsiaPenduduk />
    </div>
    <div class="mt-12 animate-fadeRight">
      <StatusKawin />
    </div>
    <div class="mt-12 animate-fadeUp">
      <PekerjaanWarga />
    </div>
  </div>
</template>

<script>
import UsiaPenduduk from './UsiaPenduduk.vue'
import StatusKawin from './StatusKawin.vue'
import PekerjaanWarga from './PekerjaanWarga.vue'
import StatisticCard from './StatisticCard.vue'

export default {
  components: {
    StatisticCard,
    UsiaPenduduk,
    StatusKawin,
    PekerjaanWarga
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
