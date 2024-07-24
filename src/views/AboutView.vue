<template>
  <NavBar />
  <div id="profile-desa">
    <SejarahDesa />
    <ProfileDesa />
    <VisiMisi />
    <PeraturanDesa />
  </div>
  <FooterComponent />
</template>

<script>
import NavBar from '../components/NavBar.vue'
import FooterComponent from '../components/FooterComponent.vue'
import ProfileDesa from '../components/ProfileDesa.vue'
import SejarahDesa from '../components/SejarahDesa.vue'
import VisiMisi from '../components/VisiMisi.vue'
import PeraturanDesa from '../components/PeraturanDesa.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    SejarahDesa,
    ProfileDesa,
    VisiMisi,
    PeraturanDesa,
    FooterComponent
  }
}
</script>