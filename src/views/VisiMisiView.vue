<template>
  <main>
    <NavBar />
    <div class="flex flex-col min-h-screen">
      <div class="flex py-8 px-10">
        <div class="font-secondary mt-16 mx-auto md:w-[90%] lg:w-[80%] xl:w-[70%]">
          <h1 class="text-3xl text-yellow-primary text-center font-primary font-bold">
            Visi dan Misi
          </h1>
          <div class="my-8 font-secondary">
            <h2 class="font-bold">Visi</h2>
            <p class="text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div class="my-8 font-secondary">
            <h2 class="font-bold">Misi</h2>
            <p class="text-base">
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
        </div>
      </div>
    </div>
    <FooterComponent />
  </main>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterComponent
  }
}
</script>
