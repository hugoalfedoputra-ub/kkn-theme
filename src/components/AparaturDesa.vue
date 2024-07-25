<script>
import AparaturCard from './AparaturCard.vue'
import profiles from '../assets/profiles.json'

export default {
  methods: {
    generateClasses(index) {
      const baseClasses = 'absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]'
      const classes = [
        'peer-focus-visible/01:[&_article]:ring peer-focus-visible/01:[&_article]:ring-indigo-300 peer-checked/01:relative peer-checked/01:z-50 peer-checked/01:translate-x-0 peer-checked/01:scale-100 peer-checked/01:[&>label]:pointer-events-none peer-checked/02:-translate-x-20 peer-checked/02:scale-[83.75%] peer-checked/02:z-40 peer-checked/03:-translate-x-40 peer-checked/03:z-30 peer-checked/04:-translate-x-40 peer-checked/04:opacity-0 peer-checked/05:-translate-x-40',
        'peer-focus-visible/02:[&_article]:ring peer-focus-visible/02:[&_article]:ring-indigo-300 peer-checked/01:translate-x-20 peer-checked/01:scale-[83.75%] peer-checked/01:z-40 peer-checked/02:relative peer-checked/02:z-50 peer-checked/02:translate-x-0 peer-checked/02:scale-100 peer-checked/02:[&>label]:pointer-events-none peer-checked/03:-translate-x-20 peer-checked/03:scale-[83.75%] peer-checked/03:z-40 peer-checked/04:-translate-x-40 peer-checked/04:z-30 peer-checked/05:-translate-x-40  peer-checked/05:opacity-0 ',
        'peer-focus-visible/03:[&_article]:ring peer-focus-visible/03:[&_article]:ring-indigo-300 peer-checked/01:translate-x-40 peer-checked/01:z-30 peer-checked/02:translate-x-20 peer-checked/02:scale-[83.75%] peer-checked/02:z-40 peer-checked/03:relative peer-checked/03:z-50 peer-checked/03:translate-x-0 peer-checked/03:scale-100 peer-checked/03:[&>label]:pointer-events-none peer-checked/04:-translate-x-20 peer-checked/04:scale-[83.75%] peer-checked/04:z-40 peer-checked/05:-translate-x-40 peer-checked/05:z-30',
        'peer-focus-visible/04:[&_article]:ring peer-focus-visible/04:[&_article]:ring-indigo-300 peer-checked/01:translate-x-40 peer-checked/01:opacity-0 peer-checked/02:translate-x-40 peer-checked/02:z-30 peer-checked/03:translate-x-20 peer-checked/03:scale-[83.75%] peer-checked/03:z-40 peer-checked/04:relative peer-checked/04:z-50 peer-checked/04:translate-x-0 peer-checked/04:scale-100 peer-checked/04:[&>label]:pointer-events-none peer-checked/05:-translate-x-20 peer-checked/05:scale-[83.75%] peer-checked/05:z-40',
        'peer-focus-visible/05:[&_article]:ring peer-focus-visible/05:[&_article]:ring-indigo-300 peer-checked/01:translate-x-40 peer-checked/02:translate-x-40 peer-checked/02:opacity-0 peer-checked/03:translate-x-40 peer-checked/03:z-30 peer-checked/04:translate-x-20 peer-checked/04:scale-[83.75%] peer-checked/04:z-40 peer-checked/05:relative peer-checked/05:z-50 peer-checked/05:translate-x-0 peer-checked/05:scale-100 peer-checked/05:[&>label]:pointer-events-none peer-checked/06:-translate-x-20 peer-checked/06:scale-[83.75%] peer-checked/06:z-40 peer-checked/07:translate-x-40 peer-checked/07:z-30 peer-checked/08:translate-x-40 peer-checked/08:opacity-0',
        'peer-focus-visible/06:[&_article]:ring peer-focus-visible/06:[&_article]:ring-indigo-300 peer-checked/03:translate-x-40 peer-checked/03:opacity-0 peer-checked/04:translate-x-40 peer-checked/04:z-30 peer-checked/05:translate-x-20 peer-checked/05:scale-[83.75%] peer-checked/05:z-40 peer-checked/06:relative peer-checked/06:z-50 peer-checked/06:translate-x-0 peer-checked/06:scale-100 peer-checked/06:[&>label]:pointer-events-none peer-checked/07:-translate-x-20 peer-checked/07:scale-[83.75%] peer-checked/07:z-40 peer-checked/08:translate-x-40 peer-checked/08:z-30 peer-checked/09:translate-x40 peer-checked/09:opacity-0',
        // 'peer-focus-visible/07:[&_article]:ring peer-focus-visible/07:[&_article]:ring-indigo-300 peer-checked/03:translate-x-40 peer-checked/04:translate-x-40 peer-checked/04:opacity-0 peer-checked/05:translate-x-40 peer-checked/05:z-30 peer-checked/06:translate-x-20 peer-checked/06:scale-[83.75%] peer-checked/06:z-40 peer-checked/07:relative peer-checked/07:z-50 peer-checked/07:translate-x-0 peer-checked/07:scale-100 peer-checked/07:[&>label]:pointer-events-none peer-checked/08:-translate-x-20 peer-checked/08:scale-[83.75%] peer-checked/08:z-40 peer-checked/09:translate-x-40 peer-checked/09:z-30 peer-checked/10:translate-x-40 peer-checked/10:opacity-0',
        // 'peer-focus-visible/08:[&_article]:ring peer-focus-visible/08:[&_article]:ring-indigo-300 peer-checked/04:translate-x-40 peer-checked/05:translate-x-40 peer-checked/05:opacity-0 peer-checked/06:translate-x-40 peer-checked/06:z-30 peer-checked/07:translate-x-20 peer-checked/07:scale-[83.75%] peer-checked/07:z-40 peer-checked/08:relative peer-checked/08:z-50 peer-checked/08:translate-x-0 peer-checked/08:scale-100 peer-checked/08:[&>label]:pointer-events-none peer-checked/09:-translate-x-20 peer-checked/09:scale-[83.75%] peer-checked/09:z-40 peer-checked/10:translate-x-40 peer-checked/10:z-30 peer-checked/11:translate-x-40 peer-checked/11:opacity-0',
        // 'peer-focus-visible/09:[&_article]:ring peer-focus-visible/09:[&_article]:ring-indigo-300 peer-checked/06:translate-x-40 peer-checked/06:translate-x-40 peer-checked/06:opacity-0 peer-checked/07:translate-x-40 peer-checked/07:z-30 peer-checked/08:translate-x-20 peer-checked/08:scale-[83.75%] peer-checked/08:z-40 peer-checked/09:relative peer-checked/09:z-50 peer-checked/09:translate-x-0 peer-checked/09:scale-100 peer-checked/09:[&>label]:pointer-events-none peer-checked/10:-translate-x-20 peer-checked/10:scale-[83.75%] peer-checked/10:z-40 peer-checked/11:translate-x-40 peer-checked/11:z-30 peer-checked/12:translate-x-40 peer-checked/12:opacity-0',
        // 'peer-focus-visible/10:[&_article]:ring peer-focus-visible/10:[&_article]:ring-indigo-300 peer-checked/05:translate-x-40 peer-checked/06:translate-x-40 peer-checked/06:opacity-0 peer-checked/07:translate-x-40 peer-checked/07:z-30 peer-checked/08:translate-x-20 peer-checked/08:scale-[83.75%] peer-checked/08:z-40 peer-checked/10:relative peer-checked/10:z-50 peer-checked/10:translate-x-0 peer-checked/10:scale-100 peer-checked/10:[&>label]:pointer-events-none peer-checked/11:-translate-x-20 peer-checked/11:scale-[83.75%] peer-checked/11:z-40 peer-checked/11:translate-x-40 peer-checked/11:z-30 peer-checked/12:translate-x-40 peer-checked/12:opacity-0',
        // 'peer-focus-visible/11:[&_article]:ring peer-focus-visible/11:[&_article]:ring-indigo-300 peer-checked/08:translate-x-40 peer-checked/08:opacity-0 peer-checked/09:translate-x-40 peer-checked/09:z-30 peer-checked/10:translate-x-20 peer-checked/10:scale-[83.75%] peer-checked/10:z-40 peer-checked/11:relative peer-checked/11:z-50 peer-checked/11:translate-x-0 peer-checked/11:scale-100 peer-checked/11:[&>label]:pointer-events-none peer-checked/12:-translate-x-20 peer-checked/12:scale-[83.75%] peer-checked/12:z-40',
        // 'peer-focus-visible/12:[&_article]:ring peer-focus-visible/12:[&_article]:ring-indigo-300 peer-checked/08:translate-x-40 peer-checked/09:translate-x-40 peer-checked/09:opacity-0peer-checked/10:translate-x-40peer-checked/10:z-30peer-checked/11:translate-x-20peer-checked/11:scale-[83.75%]peer-checked/11:z-40peer-checked/12:relativepeer-checked/12:z-50peer-checked/12:translate-x-0peer-checked/12:scale-100peer-checked/12:[&>label]:pointer-events-none'
        ]

      return `${baseClasses} ${classes[index]}`
    }
  },
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
        :class="generateClasses(index)"
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
