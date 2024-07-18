<template>
  <div class="border rounded-lg p-4 shadow-lg flex justify-between items-center">
    <div class="text-left">
      <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
      <p class="text-2xl font-bold">{{ count }}</p>
    </div>
    <div class="ml-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8a6 6 0 11-12 0 6 6 0 0112 0zm6 12v-1a6 6 0 00-6-6H6a6 6 0 00-6 6v1" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    count: String,
  },
};
</script>

<style scoped>
.border {
  border-color: #000000;
}
</style>
