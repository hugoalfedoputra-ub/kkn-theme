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
    class="flex gap-5 flex-col justify-center items-between bg-white p-5 rounded-xl h-[28rem] md:h-[34rem] min-w-[250px] max-w-[250px] md:min-w-[300px] md:max-w-[430px]"
  >
    <img :src="imageSrc" :alt="name" class="rounded-xl object-contain" />
    <div class="flex flex-col flex-grow">
      <p class="mt-2 text-md leading-tight text-black font-bold font-primary">{{ name }}</p>
      <p class="text-sm font-secondary mt-2">{{ position }}</p>
    </div>
  </div>
</template>
