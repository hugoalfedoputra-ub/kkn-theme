<template>
    <NavBar />
    <div id="sejarah">
      <HalamanSejarah />
    </div>
    <FooterComponent />
  </template>
  
  <script>
  import NavBar from '../components/NavBar.vue'
  import FooterComponent from '../components/FooterComponent.vue'
  import HalamanSejarah from '@/components/HalamanSejarah.vue'
  
  export default {
    name: 'App',
    components: {
      NavBar,
      HalamanSejarah,
      FooterComponent
    }
  }
  </script>