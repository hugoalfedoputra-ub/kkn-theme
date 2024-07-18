<template>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-yellow-600 mb-8">Pendidikan</h1>
      <div class="grid grid-cols-4 gap-6">
        <Card v-for="(pendidikan, index) in Pendidikan" :key="index" :title="pendidikan.title" :count="pendidikan.count" />
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
        Pendidikan: [
          { title: 'Tidak/Belum Sekolah', count: '999.999' },
          { title: 'Belum Tamat SD/Sederajat', count: '999.999' },
          { title: 'SD/Sederajat', count: '999.999' },
          { title: 'SLTP/Sederajat', count: '999.999' },
          { title: 'SLTA/Sederajat', count: '999.999' },
          { title: 'DI/DII', count: '999.999' },
          { title: 'DIII/Akademik', count: '999.999' },
          { title: 'S1 (Sarjana)', count: '999.999' },
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
  