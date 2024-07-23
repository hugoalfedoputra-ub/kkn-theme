<script>
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet'

export default {
  components: {
    LMap,
    LTileLayer
  },
  data() {
    return {
      zoom: 14
    }
  }
}
</script>

<template>
  <div class="mymap z-0">
    <l-map ref="map" v-model:zoom="zoom" :center="[-8.045467372064147, 112.32297477291522]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
    </l-map>
  </div>
</template>
