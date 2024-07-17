<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="font-primary">
    <a href="">
      <div
        class="flex flex-col justify-center items-start p-5 text-start bg-gray-200 rounded-3xl border-b-2 border-l-2 border-black border-solid shadow-md max-md:max-w-full"
      >
        <div class="text-lg md:text-sm lg:text-lg font-semibold text-black">
          {{ title }}
        </div>
        <div class="flex gap-0 justify-center mt-2.5 text-sm font-semibold text-yellow-primary">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d49c240900e1d801da8ad3d4a47d42236a91bbaa83a3c6c64180c74d1304612?"
            class="shrink-0 w-5 aspect-square mr-2"
          />
          <div class="font-secondary">{{ date }}</div>
        </div>
      </div>
    </a>
  </div>
</template>
