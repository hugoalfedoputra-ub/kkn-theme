<template>
    <article class="flex flex-col justify-center py-0.5">
      <div class="flex justify-center items-center py-px rounded-2xl shadow-sm bg-stone-300">
        <img 
        :src="imageSrc" 
        :alt="name" 
        class="aspect-[0.7] w-[200px] rounded-xl"
        loading="lazy" />
      </div>
      <p class="mt-4 text-xl font-semibold text-center ">{{ name }}</p>
      <p class=" text-sm font-bold text-center text-yellow-primary">{{ position }}</p>
    </article>
  </template>
  
  <script>
  export default {
    name: 'StaffDesaCard',
    props: {
      name: {
        type: String,
        required: true,
      },
      position: {
        type: String,
        required: true,
      },
      imageSrc: {
        type: String,
        required: true,
      },
    },
    position: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
  };
</script>