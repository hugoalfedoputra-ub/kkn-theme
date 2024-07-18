<template>
    <div class="sejarah-desa min-h-screen flex">
      <div class="content flex-1 p-8 flex flex-col justify-center">
        <h1 class="text-3xl font-semibold text-yellow-600">Sejarah Desa</h1>
        <div class="my-4">
          <h2 class="font-semibold">What is Lorem Ipsum?</h2>
          <p class="text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div class="my-4">
          <h2 class="font-semibold">Why do we use it?</h2>
          <p class="text-base">
            It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here,' making it look like readable English.
          </p>
        </div>
      </div>
      <div class="map flex-1 flex items-center justify-center p-4">
        <img class="max-w-full max-h-96 rounded-lg" src="../assets/images/map.jpg" alt="Map of Blitar" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SejarahDesa',
  };
  </script>
  
  <style scoped>
  /* Menyesuaikan ukuran gambar maksimal */
  .map img {
    max-width: 80%; /* Lebar maksimal gambar adalah 80% dari container */
    max-height: 400px; /* Tinggi maksimal gambar */
  }
  
  /* Mengatur margin kanan untuk konten teks */
  .content {
    margin-right: 2rem; /* Adjust the right margin of the text */
  }
  
  /* Menambahkan sedikit jarak antara konten dan gambar */
  .sejarah-desa {
    gap: 2rem; /* Adjust gap between text and image */
  }
  </style>