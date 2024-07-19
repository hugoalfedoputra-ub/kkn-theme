<script>
export default {
  props: {
    value: Number,
    label: String,
    color: String,
    statRef: String
  },
  mounted() {
    this.animateValue(this.$refs.valueRef, 0, this.value, 2000);
  },
  methods: {
    animateValue(ref, start, end, duration) {
      const formatter = new Intl.NumberFormat();
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        ref.innerText = formatter.format(value);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }
}
</script>

<template>
  <article class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <div ref="statRef" class="flex flex-col grow justify-center py-2 font-bold text-center rounded-xl border-2 border-black border-solid shadow-sm max-md:mt-10" :class="color">
      <p ref="valueRef" class="text-2xl">{{ value }}</p>
      <p class="mt-2 md:text-xl text-2xl">{{ label }}</p>
    </div>
  </article>
</template>
