<script setup>
import { defineProps, ref } from 'vue'
import AparaturCard from './AparaturCard.vue'

const props = defineProps({
  profiles: {
    type: Array,
    required: true
  },
  profilesLen: {
    type: Array,
    required: true
  }
})

// const bases = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']

// const generateClasses = (index) => {
//   const baseClasses =
//     'absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]'
//   const focusClasses = generateFocusClasses(index)
//   const positionClasses = generatePositionClasses(index)
//   const combinedClasses = `${baseClasses} ${focusClasses} ${positionClasses}`

//   return combinedClasses
// }

// const generateFocusClasses = (index) => {
//   return `peer-focus-visible/${bases[index]}:[&_article]:ring peer-focus-visible/${bases[index]}:[&_article]:ring-indigo-300`
// }

const getImg = (img) => {
  return `https://blitar-butun.desa.id/desa/upload/user_pict/${img}`
}

// const generatePositionClasses = (index) => {
//   const totalProfiles = props.profiles.length
//   let positionClasses = ''

//   for (let i = 1; i <= totalProfiles; i++) {
//     const prevIndex = (index - 1 + totalProfiles) % totalProfiles
//     const nextIndex = (index + 1) % totalProfiles

//     if (i === index + 1) {
//       positionClasses += `
//         peer-checked/${bases[i - 1]}:relative peer-checked/${bases[i - 1]}:z-50 peer-checked/${bases[i - 1]}:translate-x-0 peer-checked/${bases[i - 1]}:scale-100 peer-checked/${bases[i - 1]}:[&>label]:pointer-events-none
//       `
//     } else if (i === prevIndex + 1) {
//       positionClasses += `
//         peer-checked/${bases[i - 1]}:translate-x-20 peer-checked/${bases[i - 1]}:scale-[83.75%] peer-checked/${bases[i - 1]}:z-40
//       `
//     } else if (i === nextIndex + 1) {
//       positionClasses += `
//         peer-checked/${bases[i - 1]}:-translate-x-20 peer-checked/${bases[i - 1]}:scale-[83.75%] peer-checked/${bases[i - 1]}:z-40
//       `
//     }
//   }
//   return positionClasses
// }

const items = ref(props.profilesLen)
const activeIndex = ref(0)

const setActive = (index) => {
  activeIndex.value = index
}

const getActive = () => {
  return activeIndex.value
}

const getClasses = (index) => {
  const baseClasses =
    'absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]'

  if (index === activeIndex.value) {
    // Card that is in focus right now
    return `${baseClasses} scale-100 z-50`
  } else if ((index + 1) % items.value.length === activeIndex.value) {
    // Previous card
    return `${baseClasses} brightness-[.7] translate-y-[10px] -translate-x-[100px] md:-translate-x-[150px] scale-75 z-40`
  } else if ((index - 1 + items.value.length) % items.value.length === activeIndex.value) {
    // Next card
    return `${baseClasses} brightness-[.7] translate-y-[10px] translate-x-[100px] md:translate-x-[150px] scale-75 z-40`
  } else {
    // Other cards (technically it is behind the focus card)
    return `${baseClasses} scale-50 z-30`
  }
}

const autoplay = () => {
  setInterval(() => {
    setActive((getActive() + 1) % props.profilesLen.length)
  }, 3000)
}
autoplay()
</script>

<template>
  <section class="absolute min-h-fit">
    <div class="flex items-center justify-center">
      <div
        v-for="(aparatur, index) in profiles"
        :key="index"
        :class="getClasses(index)"
        @click="setActive(index)"
      >
        <div
          class="flex w-full min-h-full items-center justify-center rounded-lg shadow-lg text-2xl"
        >
          <AparaturCard
            :name="aparatur.pamong_nama"
            :position="aparatur.jabatan_nama"
            :image-src="getImg(aparatur.foto)"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Old code (kept for comparison sakes) -->
  <!-- <div class="w-fit mx-auto relative">
      <input
        v-for="(aparatur, index) in profiles"
        :key="'radio-' + index"
        :id="'article-' + bases[index]"
        type="radio"
        name="slider"
        class="sr-only"
        :class="'peer/' + bases[index]"
        :checked="index === 0"
      />

      <div
        v-for="(aparatur, index) in profiles"
        :key="'card-' + index"
        :class="generateClasses(index)"
      >
        <label class="absolute inset-0" :for="'article-' + bases[index]">
          <span class="sr-only text-black">Focus on the big picture</span>
        </label>
        <article class="bg-white p-6 rounded-lg shadow-2xl">
          tot{{ index }}
          <AparaturCard
            :name="aparatur.pamong_nama"
            :position="aparatur.jabatan_nama"
            :image-src="getImg(aparatur.foto)"
          />
        </article>
      </div>
    </div> -->
</template>
