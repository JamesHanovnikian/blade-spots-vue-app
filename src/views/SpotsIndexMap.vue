<template>
  <div class="SpotsMapIndex">
    <router-link to="/spotsindex"> <button> List View </button> </router-link> 
    <h1>{{ message }}</h1>
    <p> Search by name: <input type="text" v-model="searchTerm"> </p> 
    <div id='map' style='width: 800px; height: 600px;'></div>
  
     <div v-for="spot in filterBy(spots, searchTerm ,'category')"> 
      
     </div> 


   
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
import Vue2Filters from "vue2-filters";
import axios from "axios";
import mapboxgl from "mapbox-gl";
export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      message: "Find a spot",
      spots: [],
      searchTerm: "",
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
        style: "mapbox://styles/mapbox/navigation-night-v1", // style URL
        center: [-87.6298, 41.8781], // starting position [lng, lat]
        zoom: 10, // starting zoom
      });
      map.addControl(new mapboxgl.NavigationControl());

      axios.get("/spots").then((response) => {
        console.log("spots index", response.data);
        this.spots = response.data;
        // axios

        // const el = document.createElement("div");
        // el.id = "marker";
        this.spots.forEach(function (spot) {
          const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
            "<h3>" +
              spot.name +
              "<br>" +
              spot.address +
              " <a href='/spots/" +
              spot.id +
              "'> View More </a> " +
              "</h3>"
          );

          var marker1 = new mapboxgl.Marker()
            .setLngLat({ lng: spot.longitude, lat: spot.latitude })
            .setPopup(popup)
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