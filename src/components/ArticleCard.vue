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
  },
  src: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div
    class="bg-white-secondary rounded-2xl border-b-2 border-l-2 border-black border-solid shadow-sm max-md:max-w-full p-3"
  >
    <a :href>
      <div class="flex gap-5 md:gap-10">
        <div class="w-[50%] md:w-[25%] max-md:ml-0">
          <div class="grow w-full rounded-xl border border-black border-solid shadow-sm">
            <img
              loading="lazy"
              :src
              class="w-full aspect-[1.5] md:aspect-[2.5/1.2] object-cover rounded-xl"
              alt="cover artikel"
            />
          </div>
        </div>
        <div class="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
          <div class="flex flex-col my-auto justify-center items-start text-start">
            <div class="text-md md:text-xl font-primary font-bold text-black">{{ title }}</div>
            <div
              class="flex gap-0 items-center mt-2.5 font-secondary text-xs font-semibold text-yellow-primary"
            >
              <IconCalenderSchedule class="shrink-0 w-5 aspect-square mr-2" />

              <div class="font-secondary">{{ date }}</div>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>
