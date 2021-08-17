<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div id='map' style='width: 400px; height: 300px;'></div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import mapboxgl from "mapbox-gl";
export default {
  data: function () {
    return {
      message: "Welcome to Blade Spots App",
    };
  },
  mounted: function () {},
  methods: {
    startMapBox: function () {
      mapboxgl.accessToken =
        "pk.eyJ1Ijoiamhhbm92IiwiYSI6ImNrcm9hcjh0MzIxajIybm1sZGJyazdlOW4ifQ.AQSrg9-PGtHngXM9N1nb0Q";

      const map = new mapboxgl.Map({
        container: "map", // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9, // starting zoom
      });
    },
  },
};
</script>