<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="flex flex-col items-center gap-5 mt-10">
    <img src="/public/images/pak_bagong.jpg" alt="" class="w-fit h-96 rounded-3xl object-contain" />
    <div>
      <h3 class="text-xl text-white">Imam Darmawan Bagong Kusuma</h3>
      <p class="text-sm">Kepala Desa</p>
    </div>
  </div>
</template>
