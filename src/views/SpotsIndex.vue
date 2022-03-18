<template>
  <div class="spotsindex">
   <section id="portfolio" class="portfolio">
      <div class="container">
        <div class="section-title">
          <h2>Find a Spot </h2>
       </div>
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
        <div>
          <label for=""> Hello. What is your current location? </label>
          <input v-model="currentAddress" type="text" placeholder= "Type your address in"> 
          <button v-on:click="spotsIndex()"> Submit  </button> 
        </div> 
             
        <div class="row portfolio-container">
          <div class="col-lg-4 col-md-12  portfolio-item filter-web" v-for="spot in filterBy(spots, searchTerm ,'category')"> 
            <div class="portfolio-wrap">
              <img id="portfolio-imgs" src v-bind:src="spot.image" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4> {{ spot.name }}</h4>
                <p>{{ spot.address }} </p>
                
                <div class="portfolio-links">
                
                  <router-link v-bind:to="`/spots/${spot.id}`">
                  <button class="btn btn-primary">  Details </button> </i>
                  </router-link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  </div>
</template>

<style>
#portfolio-imgs {
  height: 300px;
}
</style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
import mapboxgl from "mapbox-gl";
import Dropdown from "vue-simple-search-dropdown";

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
      currentAddress: "",
    };
  },
  mounted: function () {
    this.spotsIndex();
  },
  methods: {
    spotsIndex: function () {
      console.log("Showing all spots...");
      axios
        .get("/spots", { params: { address: this.currentAddress } })
        .then((response) => {
          console.log("spots index", response.data);
          this.spots = response.data;
        });
    },
    currentLocation: function () {
      console.log("Current location is .... ");
      console.log(this.currentAddress);
    },
    changeSkatepark: function () {
      console.log("hello");
      this.isToggled = !this.isToggled;
      if (this.isToggled == true) {
        this.searchTerm = "skatepark";
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
      } else {
        this.searchTerm = "";
      }
    },
    changeLedge: function () {
      this.isToggledLedge = !this.isToggledLedge;
      if (this.isToggledLedge == true) {
        this.searchTerm = "ledge";
      } else {
        this.searchTerm = "";
      }
    },
    changeBank: function () {
      console.log("hello");
      this.isToggledBank = !this.isToggledBank;
      if (this.isToggledBank == true) {
        this.searchTerm = "bank";
      } else {
        this.searchTerm = "";
      }
    },

    turnToggleOff: function () {
      this.searchTerm = "";
    },

    showUserId: function () {},
  },
};
</script>