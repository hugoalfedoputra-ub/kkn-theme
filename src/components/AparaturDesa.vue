<script setup>
import { defineProps } from 'vue'
import AparaturCard from './AparaturCard.vue'

const props = defineProps({
  profiles: {
    type: Array,
    required: true
  }
})

const generateClasses = (index) => {
  const baseClasses = 'absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]'
  const focusClasses = generateFocusClasses(index + 1)
  const positionClasses = generatePositionClasses(index)
  return `${baseClasses} ${focusClasses} ${positionClasses}`
}

const generateFocusClasses = (index) => {
  return `peer-focus-visible/0${index}:[&_article]:ring peer-focus-visible/0${index}:[&_article]:ring-indigo-300`
}

const getImg = (img) => {
  return `https://blitar-butun.desa.id/desa/upload/user_pict/${img}`
}

const generatePositionClasses = (index) => {
  const totalProfiles = props.profiles.length
  let positionClasses = ''

  for (let i = 1; i <= totalProfiles; i++) {
    const prevIndex = (index - 1 + totalProfiles) % totalProfiles
    const nextIndex = (index + 1) % totalProfiles

    if (i === index + 1) {
      positionClasses += `
        peer-checked/0${i}:relative peer-checked/0${i}:z-50 peer-checked/0${i}:translate-x-0 peer-checked/0${i}:scale-100 peer-checked/0${i}:[&>label]:pointer-events-none
      `
    } else if (i === prevIndex + 1) {
      positionClasses += `
        peer-checked/0${i}:translate-x-20 peer-checked/0${i}:scale-[83.75%] peer-checked/0${i}:z-40
      `
    } else if (i === nextIndex + 1) {
      positionClasses += `
        peer-checked/0${i}:-translate-x-20 peer-checked/0${i}:scale-[83.75%] peer-checked/0${i}:z-40
      `
    }
  }
  return positionClasses
}
</script>

<template>
  <section class="px-12 overflow-hidden">



    <div class="max-w-lg mx-auto relative">
      <!-- Radio Inputs -->
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

      <!-- Aparatur Cards -->
      <div
        v-for="(aparatur, index) in profiles"
        :key="'card-' + index"
        :class="generateClasses(index)"
      >
        <label class="absolute inset-0" :for="'article-0' + (index + 1)">
          <span class="sr-only text-black">Focus on the big picture</span>
        </label>
        <article class="bg-white p-6 rounded-lg shadow-2xl">
          <AparaturCard
            :name="aparatur.pamong_nama"
            :position="aparatur.jabatan_nama"
            :image-src="getImg(aparatur.foto)"
          />
        </article>
      </div>
    </div>
  </section>
</template>