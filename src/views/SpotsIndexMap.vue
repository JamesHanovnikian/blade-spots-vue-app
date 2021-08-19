<template>
  <div class="SpotsMapIndex">
    <section id="portfolio" class="portfolio">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li v-on:click="turnToggleOff()"> All </li> 
              <li v-on:click="changeSkatepark()"> Skatepark </li> 
              <li v-on:click="changeRail()"> Rail </li> 
              <li v-on:click="changeLedge()"> Ledge </li> 
              <li v-on:click="changeBank()"> Bank </li> 
            </ul>
          </div>
        </div>
      
        <router-link to="/spotsindex"> <button> List View </button> </router-link> 
    <div class="row">
      <div class="column-12">
        <div id='map'></div>
      </div>
    </div>

      </div> 
    </section>
  </div>
</template>

<style>
#map {
  width: 800px;
  height: 600px;
  display: grid;
  align-items: center;
}
section #portfolio {
  padding-top: 200px;
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
      isToggled: false,
      isToggledRail: false,
      isToggledLedge: false,
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
              "'>  View More </a> " +
              "<br>" +
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
    changeSkatepark: function () {
      console.log("hello");
      this.isToggled = !this.isToggled;
      console.log(this.isToggled);
      if (this.isToggled == true) {
        this.searchTerm = "skatepark";
        console.log(this.searchTerm);
      } else {
        this.searchTerm = "";
      }
    },
    changeRail: function () {
      console.log("hello");
      this.isToggledRail = !this.isToggledRail;
      console.log(this.isToggledRail);
      if (this.isToggledRail == true) {
        this.searchTerm = "rail";
        console.log(this.searchTerm);
      } else {
        this.searchTerm = "";
      }
    },
    changeLedge: function () {
      console.log("hello");
      this.isToggledLedge = !this.isToggledLedge;
      console.log(this.isToggledLedge);
      if (this.isToggledLedge == true) {
        this.searchTerm = "ledge";
        console.log(this.searchTerm);
      } else {
        this.searchTerm = "";
      }
    },
    changeBank: function () {
      console.log("hello");
      this.isToggledBank = !this.isToggledBank;
      console.log(this.isToggledBank);
      if (this.isToggledBank == true) {
        this.searchTerm = "bank";
        console.log(this.searchTerm);
      } else {
        this.searchTerm = "";
      }
    },
    turnToggleOff: function () {
      this.searchTerm = "";
    },
  },
};
</script>