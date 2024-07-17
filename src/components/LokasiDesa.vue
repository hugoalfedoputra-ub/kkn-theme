<script setup>
import InteractiveMap from '../components/InteractiveMap.vue'
</script>

<template>
  <div
    class="justify-end md:px-10 lg:px-20 py-16 w-full bg-white-secondary max-md:px-5 max-md:max-w-full"
  >
    <div class="flex gap-5 max-md:flex-col max-md:gap-0">
      <div class="flex flex-col px-10 md:items-center w-6/12 md:px-0 max-md:ml-0 max-md:w-full">
        <div
          class="flex flex-col justify-start items-start md:px-10 lg:px-20 py-20 mt-1.5 text-base font-semibold text-black max-md:px-5 max-md:mt-10"
        >
          <div class="text-4xl font-bold text-start text-yellow-primary">Lokasi Desa</div>
          <div class="mt-12 text-2xl font-bold max-md:mt-10">Desa Butun</div>
          <div class="mt-2.5">Kec. Gandusari, Kab. Blitar</div>
          <div class="mt-2.5">Provinsi Jawa Timur</div>
          <div class="flex gap-1 md:gap-2.5 p-4 mt-8 text-start bg-yellow-primary rounded-2xl">
            <div class="text-xs md:text-md lg:text-[0.8rem] my-auto">Cek Selengkapnya</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b60966f464887acb57afbe0e3ee24c56de8400c4a2a5e1a822049a5817248edf?"
              class="shrink-0 w-5 aspect-square"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <div
          class="flex grow justify-center items-center px-6 py-10 max-md:px-5 max-md:mt-10 max-md:max-w-full"
        >
          <InteractiveMap loading="lazy" />
        </div>
      </div>
    </div>
  </div>
</template>
