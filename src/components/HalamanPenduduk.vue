<template>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-yellow-600 mb-8">Kependudukan</h1>
      <div class="grid grid-cols-4 gap-6">
        <Card v-for="(penduduk, index) in Penduduk" :key="index" :title="penduduk.title" :count="penduduk.count" />
      </div>
      <!--
      <div class="mt-12">
        <h2 class="text-2xl font-semibold text-center mb-4">Statistik Pendidikan</h2>
        <p class="text-center mb-8">Total Data: 7740</p>
        <img src="@/assets/education-chart.png" alt="Statistik Pendidikan" class="mx-auto" />
      </div>-->
    </div>
  </template>
  
  <script>
  import Card from './Card.vue';
  
  export default {
    components: {
      Card,
    },
    data() {
      return {
        Penduduk: [
          { title: 'Kepala Keluarga', count: '999.999' },
          { title: 'Penduduk', count: '999.999' },
          { title: 'Laki-Laki', count: '999.999' },
          { title: 'Perempuan', count: '999.999' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  </style>
  