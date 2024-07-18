<template>
  <div class="visi-misi flex flex-col min-h-screen">

    <main class="main-content flex flex-1 p-8">
      <div class="content flex-2 pr-8 font-sans mt-16 mx-64">
        <h1 class="text-3xl text-yellow-600 text-center">Visi dan Misi</h1>
        <section class="my-8">
          <h2 class="font-bold">Visi</h2>
          <p class="text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </section>
        <section class="my-8">
          <h2 class="font-bold">Misi</h2>
          <p class="text-base">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
          </p>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'VisiMisiDesa'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');

.visi-misi {
  font-family: 'Open Sans', sans-serif;
}
</style>