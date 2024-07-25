<template>
  <Carousel :itemsToShow="5" :wrapAround="true" :transition="500">
    <Slide v-for="(image, index) in images" :key="index">
      <div class="flex justify-center items-center h-full">
        <img :src="image" :alt="'Slide ' + (index + 1)" class="w-full h-auto object-cover">
      </div>
    </Slide>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
import 'tailwindcss/tailwind.css'

export default defineComponent({
  name: 'SimpleCarousel',
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      images: [
        '/images/pak_bagong.jpg',
        '/images/ArikWijiLestari.jpg',
        '/images/LestariUtami.jpg',
        '/images/IkaPuspitasari.jpg',
        '/images/EndriWidoWahyudi.jpg',
      ],
    }
  },
})
</script>
