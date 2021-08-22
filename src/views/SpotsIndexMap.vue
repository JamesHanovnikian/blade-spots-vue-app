<template>
  <div class="SpotsMapIndex">
    
    
    <div id='filters' class='ui-select'>
    <div><input type='checkbox' checked=checked class='filter'
              name='filter' id='skatepark' value='skatepark'/><label for='restaurant'>Skateparks</label></div>
    <div><input type='checkbox' checked=checked class='filter'
              name='filter' id='rail' value='rail'/><label for='bicycle'>Rails </label></div>
    <div><input type='checkbox' checked=checked class='filter'
              name='filter' id='ledge' value='ledge'/><label for='bar'> Ledges </label></div>
  </div>
    <router-link to="/spotsindex"> <button> List View </button> </router-link> 
    <div class="row">
      <div class="column-12">
        <div class id='map'></div>
        
    </div>
      </div>
    </div>

      </div> 
    </section>
  </div>
</template>

<style>
#filters {
  padding-top: 100px;
}
.filter-ctrl {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
}
.filter-ctrl input[type="text"] {
  font: 12px/20px "Helvetica Neue", Arial, Helvetica, sans-serif;
  width: 100%;
  border: 0;
  background-color: #fff;
  margin: 0;
  color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  width: 180px;
}

#links {
  padding-top: 50px;
}
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
      map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          // When active the map will receive updates to the device's location as it changes.
          trackUserLocation: true,
          // Draw an arrow next to the location dot to indicate which direction the device is heading.
          showUserHeading: true,
        })
      );

      axios.get("/spots").then((response) => {
        console.log("spots index", response.data);
        this.spots = response.data;
        // axios

        // const el = document.createElement("div");
        // el.id = "marker";
        this.spots.forEach(function (spot) {
          const popup = new mapboxgl.Popup({ offset: 10 }).setHTML(
            "<h3>" +
              spot.name +
              "</h3>" +
              "<br>" +
              spot.address +
              "<br>" +
              " <button class='btn btn-primary'> <a href='/spots/" +
              spot.id +
              "'>  View More </a> </button> " +
              "<br>" +
              "<br>" +
              "<img src=" +
              spot.image_url +
              " height='125px'>"
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