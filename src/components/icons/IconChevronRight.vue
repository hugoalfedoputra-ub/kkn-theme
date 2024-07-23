<script setup>
defineProps({
  size: {
    type: Number,
    default: 24
  }
})
</script>

<template>
  <svg
    class="feather feather-chevron-right"
    fill="none"
    :width="size"
    :height="size"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
</template>
