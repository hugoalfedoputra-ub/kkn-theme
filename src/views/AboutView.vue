<template>
  <NavBar />
  <div id="profile-desa">
    <SejarahDesa />
    <ProfileDesa />
    <VisiMisi />
    <PemerintahDesa />
  </div>
  <FooterComponent />
</template>

<script>
import NavBar from '../components/NavBar.vue'
import FooterComponent from '../components/FooterComponent.vue'
import ProfileDesa from '../components/ProfileDesa.vue'
import SejarahDesa from '../components/SejarahDesa.vue'
import VisiMisi from '../components/VisiMisi.vue'
import PemerintahDesa from '../components/PemerintahDesa.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    SejarahDesa,
    ProfileDesa,
    VisiMisi,
    PemerintahDesa,
    FooterComponent
  }
}
</script>