<template>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-yellow-600 mb-8">Data Agama</h1>
      <div class="grid grid-cols-4 gap-6">
        <Card v-for="(religion, index) in religions" :key="index" :title="religion.title" :count="religion.count" />
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
        religions: [
          { title: 'Islam', count: '999.999' },
          { title: 'Kristen', count: '999.999' },
          { title: 'Katolik', count: '999.999' },
          { title: 'Hindu', count: '999.999' },
          { title: 'Budha', count: '999.999' },
          { title: 'Konghucu', count: '999.999' },
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
  