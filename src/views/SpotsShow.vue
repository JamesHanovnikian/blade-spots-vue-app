<template>
  <div class="spots-show">
    <h2> {{ spot.name }} </h2>
    <div id='map' style='width: 400px; height: 300px;'></div>
    <img v-bind:src="spot.image_url"> 
    <p> Address: {{ spot.address }} </p>
    <p> Category: {{ spot.category }} </p>
    <p> Description: {{ spot.description }} </p>
    <p> Bust: {{ spot.bust }} </p>



    <p> Comments: </p>
    {{ comments }}
  </div>
</template>

<style>
</style>

<script>
import mapboxgl from "mapbox-gl";
import axios from "axios";
export default {
  data: function () {
    return {
      spot: {},
      comments: [],
    };
  },
  mounted: function () {
    this.spotShow();
    this.displayComments();
    this.showPageMapBox();
  },
  methods: {
    spotShow: function () {
      axios.get("/spots/" + this.$route.params.id).then((response) => {
        console.log("spots show", response);
        this.spot = response["data"]["data"];
      });
    },
    displayComments: function () {
      console.log("showing comments");
      axios.get("/comments/" + this.$route.params.id).then((response) => {
        console.log("showing comments", response.data);
        this.comments = response.data;
      });
    },
    showPageMapBox: function () {
      mapboxgl.accessToken =
        "pk.eyJ1Ijoiamhhbm92IiwiYSI6ImNrcm9hcjh0MzIxajIybm1sZGJyazdlOW4ifQ.AQSrg9-PGtHngXM9N1nb0Q";

      const map = new mapboxgl.Map({
        container: "map", // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: [-87.6298, 41.8781], // starting position [lng, lat]
        zoom: 8, // starting zoom
      });
      const marker1 = new mapboxgl.Marker()
        .setLngLat([-87.8, 42.19])
        .addTo(map);
    },
  },
};
</script>
