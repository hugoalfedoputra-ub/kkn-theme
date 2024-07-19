<template>
  <NavBar />
  <main id="profile" class="flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
    <section class="flex flex-col items-center w-full max-w-[90%] max-md:max-w-full">
      <h1 class="mt-5 text-4xl font-bold text-center text-orange-400 max-md:max-w-full">
        Wilayah Desa
      </h1>
      <p class="mt-16 text-base text-black max-md:mt-10 max-md:max-w-full">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <div class="mt-16 w-4/5 max-md:mt-10">
        <div class="flex gap-5 max-md:flex-col max-md:gap-0">
          <StatisticBox
            :value="hWilayah"
            label="Hektare Wilayah"
            color="text-red-500"
            statRef="hektareWilayah"
          />
          <StatisticBox
            :value="hSawah"
            label="Hektare Sawah"
            color="text-green-400"
            statRef="hektareSawah"
          />
          <StatisticBox
            :value="hTegalan"
            label="Hektare Tegalan"
            color="text-blue-400"
            statRef="hektareTegalan"
          />
        </div>
      </div>
      <div class="mt-11 max-w-full w-4/5 max-md:mt-10">
        <div class="flex gap-5 max-md:flex-col max-md:gap-0">
          <StatisticBox
            :value="dusun"
            label="Dusun"
            color="text-red-500"
            statRef="dusun"
          />
          <StatisticBox
            :value="rw"
            label="RW"
            color="text-green-400"
            statRef="rw"
          />
          <StatisticBox
            :value="rt"
            label="RT"
            color="text-blue-400"
            statRef="rt"
          />
        </div>
      </div>
      <h2 class="self-stretch mt-28 text-4xl font-bold text-center text-orange-400 max-md:mt-10 max-md:max-w-full">
        Peta Desa
      </h2>
      <InteractiveMap
        loading="lazy"
        class="w-1/2 h-1/2 lg:w-[25rem] lg:h-[20rem] xl:w-[40rem] xl:h-[30rem] rounded-2xl"
      />
    </section>
  </main>
  <FooterComponent />
</template>

<script>
import NavBar from '../components/NavBar.vue'
import FooterComponent from '../components/FooterComponent.vue'
import InteractiveMap from '../components/InteractiveMap.vue'
import StatisticBox from '../components/StatisticBox.vue'

export default {
  name: 'ProfileDesa',
  components: {
    NavBar,
    InteractiveMap,
    FooterComponent,
    StatisticBox
  },
  data() {
    return {
      hWilayah: 41283,
      hSawah: 18290,
      hTegalan: 7022,
      dusun: 4,
      rw: 8,
      rt: 28
    }
  }
}
</script>
