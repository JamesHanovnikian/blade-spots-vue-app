<template>
  <div class="SpotsMapIndex">
    <router-link to="/spotsindex"> Spot list </router-link> 
    <h1>{{ message }}</h1>

    <div id='map' style='width: 800px; height: 600px;'></div>
  

   
  </div>
</template>

<style>
img {
  width: 200px;
}

#map {
  border: black 20px;
}
</style>  

<script>
import axios from "axios";
import mapboxgl from "mapbox-gl";
export default {
  data: function () {
    return {
      message: "Find a spot",
      spots: [],
    };
  },

  mounted: function () {
    this.spotsIndex();
  },
  methods: {
    spotsIndex: function () {
      console.log("Showing all spots...");
      mapboxgl.accessToken =
        "pk.eyJ1Ijoiamhhbm92IiwiYSI6ImNrcm9hcjh0MzIxajIybm1sZGJyazdlOW4ifQ.AQSrg9-PGtHngXM9N1nb0Q";

      const map = new mapboxgl.Map({
        container: "map", // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: [-87.6298, 41.8781], // starting position [lng, lat]
        zoom: 10, // starting zoom
      });
      axios.get("/spots").then((response) => {
        console.log("spots index", response.data);
        this.spots = response.data;

        this.spots.forEach(function (spot) {
          var marker1 = new mapboxgl.Marker();
          console.log("MAAAAAAaaaaaaaAAAAAP");
          marker1
            .setLngLat({ lng: spot.longitude, lat: spot.latitude })
            .addTo(map);
        });
      });
    },

    doMapBox: function () {
      console.log("map feature");
      mapboxgl.accessToken =
        "pk.eyJ1Ijoiamhhbm92IiwiYSI6ImNrcm9hcjh0MzIxajIybm1sZGJyazdlOW4ifQ.AQSrg9-PGtHngXM9N1nb0Q";

      const map = new mapboxgl.Map({
        container: "map", // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: [-87.6298, 41.8781], // starting position [lng, lat]
        zoom: 8, // starting zoom
      });
      console.log(this.spots);
    },
  },
};
</script>