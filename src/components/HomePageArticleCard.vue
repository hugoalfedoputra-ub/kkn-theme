<script setup>
import IconCalenderSchedule from './icons/IconCalenderSchedule.vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  href: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="font-primary hover:darken">
    <a :href>
      <div
        class="flex flex-col justify-center items-start p-5 text-start bg-white-secondary rounded-3xl border-b-2 border-l-2 border-black border-solid shadow-md max-md:max-w-full"
      >
        <div class="text-lg md:text-sm lg:text-lg font-semibold text-black">
          {{ title }}
        </div>
        <div class="flex gap-0 items-center mt-2.5 text-sm font-semibold text-yellow-primary">
          <IconCalenderSchedule class="shrink-0 w-5 aspect-square mr-2" />
          <div class="font-secondary">{{ date }}</div>
        </div>
      </div>
    </a>
  </div>
</template>
