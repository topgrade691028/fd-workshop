<template>
  <LMap
    style="height: 500px; width: 100%"
    :zoom="zoom"
    :center="center"
    @update:zoom="zoomUpdated"
    @update:center="centerUpdated"
    @update:bounds="boundsUpdated"
  >
    <LTileLayer :url="url"></LTileLayer>
  </LMap>
</template>

<script>
import { LMap, LTileLayer } from "vue2-leaflet";

export default {
  components: {
    LMap,
    LTileLayer
  },
  data: () => ({
    url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
    zoom: 7,
    center: [43.28182930655963, -3.3207893371582036],
    bounds: null
  }),
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    }
  }
};
</script>
