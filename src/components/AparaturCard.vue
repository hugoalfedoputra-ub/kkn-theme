<script setup>
defineProps({
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
})
</script>

<template>
  <div
    class="flex flex-col items-center gap-5 bg-white p-5 rounded-xl h-full min-w-[160] max-w-[160px] md:min-w-[250px] md:max-w-[250px]"
  >
    <img :src="imageSrc" :alt="name" class="rounded-xl object-contain" />
    <div>
      <p class="text-lg leading-tight text-black font-bold font-primary">{{ name }}</p>
      <p class="text-xs font-secondary mt-2">{{ position }}</p>
    </div>
  </div>
</template>
