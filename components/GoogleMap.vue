<template>
  <div class="google-map" :id="mapName"></div>
</template>

<script>
export default {
  name: "GoogleMap",
  props: ['name'],
  data() {
    return {
      mapName: this.name + "-map",
      coords: {
        latitude: 38.751496,
        longitude: -77.471869
      }
    }
  },
  mounted() {
    const element = document.getElementById(this.mapName)
    const options = {
      zoom: 16,
      center: new google.maps.LatLng(38.751496, -77.471869)
    }
    const map = new google.maps.Map(element, options);
    const position = new google.maps.LatLng(38.751496, -77.471869);
    const marker = new google.maps.Marker({position, map})
  }
}
</script>

<style lang="scss" scoped>
.google-map {
  width: 100%;
  height: 400px;
  margin: 0 auto;
  background: gray;
  border: 1px solid black;
}
</style>
