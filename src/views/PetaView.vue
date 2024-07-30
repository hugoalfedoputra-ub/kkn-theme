<script>
import FooterComponent from '@/components/FooterComponent.vue'
import InteractiveMap from '@/components/InteractiveMap.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  components: { NavBar, InteractiveMap, FooterComponent }
}
</script>

<template>
  <main class="h-[100vh]">
    <NavBar />
    <div
      class="text-4xl font-bold text-center text-yellow-primary font-primary mt-10 animate-fadeDown"
    >
      Peta Desa
    </div>
    <div
      class="flex grow justify-center items-center px-6 py-10 max-md:px-5 max-md:mt-10 max-md:max-w-ful"
    >
      <InteractiveMap loading="lazy" class="z-0 flex grow w-[80rem] h-[44rem] animate-fadeUp" />
    </div>
    <FooterComponent class="bottom-0" />
  </main>
</template>
