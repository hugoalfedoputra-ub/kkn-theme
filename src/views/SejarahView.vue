<template>
  <NavBar />
  <section
    class="flex justify-center w-full min-h-screen overflow-hidden md:p-10 lg:p-0 items-center max-md:px-5 p-10"
  >
    <div
      class="flex lg:justify-between xl:justify-evenly gap-20 items-center grow flex-col-reverse lg:flex-row md:mx-20"
    >
      <div class="flex lg:p-5 xl:p-10 lg:w-[50%] flex-col justify-center">
        <h1 class="text-3xl font-semibold font-primary text-yellow-primary">Sejarah Desa</h1>
        <div class="my-4 font-secondary">
          <h2 class="font-semibold">What is Lorem Ipsum?</h2>
          <p class="text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been
            the industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has survived not only
            five centuries but also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularized in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div class="my-4 font-secondary">
          <h2 class="font-semibold">Why do we use it?</h2>
          <p class="text-base">
            It is a long-established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using 'Content here, content
            here,' making it look like readable English.
          </p>
        </div>
      </div>
      <div class="p-4">
        <img
          class="max-w-full max-h-96 rounded-3xl"
          src="/images/map_butun.png"
          alt="Map of Blitar"
        />
      </div>
    </div>
  </section>
  <FooterComponent class="z-0 left-0 bottom-0" />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterComponent
  }
}
</script>
