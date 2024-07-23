<script>
export default {
  props: {
    value: Number,
    label: String,
    color: String,
    statRef: String
  }
}
</script>

<template>
  <article class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <div class="flex flex-col grow justify-center py-2 font-bold text-center rounded-xl border-2 border-black border-solid shadow-sm max-md:mt-10" :class="color">
      <p :ref="ref" class="text-2xl">{{ value }}</p>
      <p class="mt-2 md:text-xl text-2xl">{{ label }}</p>
    </div>
  </article>
</template>


