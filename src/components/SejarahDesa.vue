<template>
  <section class="flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
    <div class="w-full max-w-[70rem] max-md:max-w-full">
      <div class="flex gap-10 max-md:flex-col-reverse max-md:gap-0">
        <div class="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
          <div class="flex flex-col self-stretch mt-10 text-black max-md:mt-10 max-md:max-w-full">
            <h2 class="text-4xl font-bold text-yellow-primary max-md:max-w-full">Sejarah Desa</h2>
            <p class="mt-7 text-lg max-md:max-w-full font-medium">
              Perjalanan panjang desa ini dari masa lalu hingga kini. Ketahuilah kisah-kisah
              menarik, peristiwa penting, dan perubahan yang telah membentuk identitas desa Butun.
            </p>
            <a
              href="/profile-desa/sejarah"
              class="flex gap-3 self-start px-3.5 py-3.5 mt-10 text-base text-center bg-yellow-primary rounded-3xl max-md:mt-10 duration-300 hover:scale-105"
            >
              <span class="my-auto">Cek Selengkapnya</span>
              <IconArrowRight class="shrink-0 w-6 aspect-square" />
            </a>
          </div>
        </div>
        <div class="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="/images/map_butun.png"
            alt="Sejarah Desa Butun"
            class="object-contain grow w-full aspect-[1.2] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import IconArrowRight from './icons/IconArrowRight.vue'
export default {
  name: 'SejarahDesa',
  components: {
    IconArrowRight
  }
}
</script>
