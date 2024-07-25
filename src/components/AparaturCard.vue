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
  <div class="flex flex-col items-center gap-5 mt-10">
    <img :src="imageSrc" :alt="name" class="aspect-[0.7] w-[15rem] rounded-2xl object-contain" />
    <div>
      <p class="text-lg text-black font-bold font-primary">{{ name }}</p>
      <p class="text-xs font-secondary">{{ position }}</p>
    </div>
  </div>
</template>
