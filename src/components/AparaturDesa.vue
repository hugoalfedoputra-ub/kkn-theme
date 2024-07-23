<script>
import AparaturCard from './AparaturCard.vue'
import profiles from '../assets/profiles.json'

export default {
  components: {
    AparaturCard
  },
  data() {
    return {
      profiles
    }
  }
}
</script>

<template>
  <section class="px-12">
    <div class="max-w-lg mx-auto relative">
      <input
        v-for="(aparatur, index) in profiles"
        :key="'radio-' + index"
        :id="'article-0' + (index + 1)"
        type="radio"
        name="slider"
        class="sr-only"
        :class="'peer/0' + (index + 1)"
        :checked="index === 0"
      />

      <div
        v-for="(aparatur, index) in profiles"
        :key="'card-' + index"
        class="absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
        :class="{
          'peer-focus-visible/01:[&_article]:ring peer-focus-visible/01:[&_article]:ring-indigo-300 peer-checked/01:relative peer-checked/01:z-50 peer-checked/01:translate-x-0 peer-checked/01:scale-100 peer-checked/01:[&>label]:pointer-events-none peer-checked/02:-translate-x-20 peer-checked/02:scale-[83.75%] peer-checked/02:z-40 peer-checked/03:-translate-x-40 peer-checked/03:z-30 peer-checked/04:-translate-x-40 peer-checked/04:opacity-0 peer-checked/05:-translate-x-40':
            index === 0,
          'peer-focus-visible/02:[&_article]:ring peer-focus-visible/02:[&_article]:ring-indigo-300 peer-checked/01:translate-x-20 peer-checked/01:scale-[83.75%] peer-checked/01:z-40 peer-checked/02:relative peer-checked/02:z-50 peer-checked/02:translate-x-0 peer-checked/02:scale-100 peer-checked/02:[&>label]:pointer-events-none peer-checked/03:-translate-x-20 peer-checked/03:scale-[83.75%] peer-checked/03:z-40 peer-checked/04:-translate-x-40 peer-checked/04:z-30 peer-checked/05:-translate-x-40 peer-checked/05:opacity-0':
            index === 1,
          'peer-focus-visible/03:[&_article]:ring peer-focus-visible/03:[&_article]:ring-indigo-300 peer-checked/01:translate-x-40 peer-checked/01:z-30 peer-checked/02:translate-x-20 peer-checked/02:scale-[83.75%] peer-checked/02:z-40 peer-checked/03:relative peer-checked/03:z-50 peer-checked/03:translate-x-0 peer-checked/03:scale-100 peer-checked/03:[&>label]:pointer-events-none peer-checked/04:-translate-x-20 peer-checked/04:scale-[83.75%] peer-checked/04:z-40 peer-checked/05:-translate-x-40 peer-checked/05:z-30':
            index === 2,
          'peer-focus-visible/04:[&_article]:ring peer-focus-visible/04:[&_article]:ring-indigo-300 peer-checked/01:translate-x-40 peer-checked/01:opacity-0 peer-checked/02:translate-x-40 peer-checked/02:z-30 peer-checked/03:translate-x-20 peer-checked/03:scale-[83.75%] peer-checked/03:z-40 peer-checked/04:relative peer-checked/04:z-50 peer-checked/04:translate-x-0 peer-checked/04:scale-100 peer-checked/04:[&>label]:pointer-events-none peer-checked/05:-translate-x-20 peer-checked/05:scale-[83.75%] peer-checked/05:z-40':
            index === 3,
          'peer-focus-visible/05:[&_article]:ring peer-focus-visible/05:[&_article]:ring-indigo-300 peer-checked/01:translate-x-40 peer-checked/02:translate-x-40 peer-checked/02:opacity-0 peer-checked/03:translate-x-40 peer-checked/03:z-30 peer-checked/04:translate-x-20 peer-checked/04:scale-[83.75%] peer-checked/04:z-40 peer-checked/05:relative peer-checked/05:z-50 peer-checked/05:translate-x-0 peer-checked/05:scale-100 peer-checked/05:[&>label]:pointer-events-none':
            index === 4
        }"
      >
        <label class="absolute inset-0" :for="'article-0' + (index + 1)"
          ><span class="sr-only text-black">Focus on the big picture</span></label
        >
        <article class="bg-white p-6 rounded-lg shadow-2xl">
          <AparaturCard
            :name="aparatur.name"
            :position="aparatur.position"
            :image-src="aparatur.imageSrc"
          />
        </article>
      </div>
    </div>
  </section>
</template>

<!-- Backup Code -->
<!-- <input id="article-01" type="radio" name="slider" class="sr-only peer/01" checked />
      <input id="article-02" type="radio" name="slider" class="sr-only peer/02" />
      <input id="article-03" type="radio" name="slider" class="sr-only peer/03" />
      <input id="article-04" type="radio" name="slider" class="sr-only peer/04" />
      <input id="article-05" type="radio" name="slider" class="sr-only peer/05" /> -->

<!-- <div
        class="absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] peer-focus-visible/01:[&_article]:ring peer-focus-visible/01:[&_article]:ring-indigo-300 peer-checked/01:relative peer-checked/01:z-50 peer-checked/01:translate-x-0 peer-checked/01:scale-100 peer-checked/01:[&>label]:pointer-events-none peer-checked/02:-translate-x-20 peer-checked/02:scale-[83.75%] peer-checked/02:z-40 peer-checked/03:-translate-x-40 peer-checked/03:z-30 peer-checked/04:-translate-x-40 peer-checked/04:opacity-0 peer-checked/05:-translate-x-40"
      >
        <label class="absolute inset-0" for="article-01"
          ><span class="sr-only">Focus on the big picture</span></label
        >
        <article class="bg-white p-6 rounded-lg shadow-2xl">
          <div class="flex flex-col items-center gap-5 mt-10">
            <img
              src="/public/images/ArikWijiLestari.png"
              alt="name"
              class="aspect-[0.7] w-[15rem] rounded-2xl object-contain"
            />
            <div>
              <p class="text-lg text-yellow-primary font-bold">Arik Wiji Lestari</p>
              <p class="text-xs">Ketua Desa</p>
            </div>
          </div>
        </article>
      </div> -->
