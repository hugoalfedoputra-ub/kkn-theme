<script>
import NavBar from '../components/NavBar.vue'
import FooterComponent from '../components/FooterComponent.vue'
import InteractiveMap from '../components/InteractiveMap.vue'
import StatisticBox from '../components/StatisticBox.vue'

export default {
  name: 'ProfileDesa',
  components: {
    NavBar,
    FooterComponent,
    InteractiveMap,
    StatisticBox
  },
  data() {
    return {
      stats: [
        { value: 100, label: 'Hektare Wilayah', color: 'text-red-400' },
        { value: 70, label: 'Hektare Sawah', color: 'text-green-400' },
        { value: 20, label: 'Hektare Tegalan', color: 'text-blue-400' }
      ],
      additionalStats: [
        { value: 5, label: 'Dusun', color: 'text-red-400' },
        { value: 17, label: 'RW', color: 'text-green-400' },
        { value: 60, label: 'RT', color: 'text-blue-400' }
      ]
    }
  },
  mounted() {
    this.stats.forEach((stat, index) => {
      this.animateValue(this.$refs[`stat${index}`], 0, stat.value, 2000)
    })
    this.additionalStats.forEach((stat, index) => {
      this.animateValue(this.$refs[`addStat${index}`], 0, stat.value, 2000)
    })
  },
  methods: {
    animateValue(ref, start, end, duration) {
      let startTimestamp = null
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = Math.min((timestamp - startTimestamp) / duration, 1)
        ref.innerText = Math.floor(progress * (end - start) + start)
        if (progress < 1) {
          window.requestAnimationFrame(step)
        }
      }
      window.requestAnimationFrame(step)
    }
  }
}
</script>

<template>
  <NavBar />
  <main id="profile" class="flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
    <section class="flex flex-col items-center w-full max-w-[90%] max-md:max-w-full">
      <h1
        class="mt-5 text-4xl font-bold font-primary text-center text-yellow-primary max-md:max-w-full"
      >
        Wilayah Desa
      </h1>
      <p class="mt-10 text-base text-black max-md:mt-10 max-md:max-w-full font-secondary mx-10">
        Secara geografis, Desa Butun terletak pada posisi 8°4'19.0"S Lintang Selatan dan
        112°17'24.7"E Bujur Timur. Jarak dari desa ke kecamatan kurang lebih 1 km, dan jarak dari
        desa ke Kota Blitar kurang lebih 23 km. Desa Butun termasuk daerah dataran tinggi dengan
        ketinggian wilayah kecamatan dari permukaan 400 m diatas permukaan laut dan luas wilayah 412
        Km2. Informasi lebih detail mengenai wilayah Desa Butun dapat dilihat dibawah berikut.
      </p>
      <div class="mt-16 w-4/5 max-md:mt-10">
        <div class="flex gap-5 max-md:flex-col max-md:gap-0">
          <StatisticBox
            v-for="(stat, index) in stats"
            :key="index"
            :value="stat.value"
            :label="stat.label"
            :color="stat.color"
            :statRef="`stat${index}`"
            class="font-secondary"
          />
        </div>
      </div>
      <div class="mt-11 max-w-full w-4/5 max-md:mt-10">
        <div class="flex gap-5 max-md:flex-col max-md:gap-0">
          <StatisticBox
            v-for="(stat, index) in additionalStats"
            :key="index"
            :value="stat.value"
            :label="stat.label"
            :color="stat.color"
            :statRef="`addStat${index}`"
            class="font-secondary"
          />
        </div>
      </div>
      <h2
        class="self-stretch mt-28 text-4xl font-bold text-center text-yellow-primary max-md:mt-10 max-md:max-w-full font-primary"
      >
        Peta Desa
      </h2>
      <InteractiveMap class="mt-10 max-w-full aspect-[2.33] w-[906px]" />
    </section>
  </main>
  <FooterComponent />
</template>
