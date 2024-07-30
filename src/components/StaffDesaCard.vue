<template>
  <article class="flex flex-col justify-between py-0.5 h-full">
    <div
      class="flex justify-center items-start py-px rounded-2xl drop-shadow-lg shadow-sm bg-white"
    >
      <img :src="imageSrc" :alt="name" class="aspect-[0.7] w-[13rem] rounded-xl" loading="lazy" />
    </div>
    <p class="mt-4 text-md font-semibold text-center">{{ name }}</p>
    <p class="text-xs font-bold text-center text-yellow-primary">{{ position }}</p>
  </article>
</template>

<script>
export default {
  name: 'StaffDesaCard',
  props: {
    name: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    }
  },
  position: {
    type: String,
    required: true
  },
  imageSrc: {
    type: String,
    required: true
  }
}
</script>
