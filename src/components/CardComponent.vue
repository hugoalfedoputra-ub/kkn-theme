<template>
  <div class="rounded-lg p-4 shadow-lg flex justify-between items-center border-black">
    <div class="text-left">
      <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
      <p class="text-2xl font-bold">{{ count }}</p>
    </div>
    <div class="ml-4">
      <IconUser />
    </div>
  </div>
</template>

<script>
import IconUser from './icons/IconUser.vue'

export default {
  props: {
    title: String,
    count: String
  },
  components: {
    IconUser
  }
}
</script>
