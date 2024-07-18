<template>
    <NavBar />
    <div id="visi-misi">
      <HalamanVisiMisi />
    </div>
    <FooterComponent />
  </template>
  
  <script>
  import NavBar from '../components/NavBar.vue'
  import FooterComponent from '../components/FooterComponent.vue'
  import HalamanVisiMisi from '../components/HalamanVisiMisi.vue'
  
  export default {
    name: 'App',
    components: {
      NavBar,
      HalamanVisiMisi,
      FooterComponent
    }
  }
  </script>