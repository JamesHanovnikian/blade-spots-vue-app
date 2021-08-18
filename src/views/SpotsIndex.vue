<template>
  <div class="spotsindex">
    <router-link to="/spotsmap"> <button> Map View </button>  </router-link> 
 <!-- ======= Hero Section ======= -->
  

<!-- 
    <section id="portfolio" class="portfolio">
      <div class="container">

        <div class="section-title">
          <h2>Find a Spot </h2>
       
        </div>

        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container">


          <div class="col-lg-4 col-md-12  portfolio-item filter-web" v-for="spot in spots">
            <div class="portfolio-wrap">
              <img src v-bind:src="spot.image_url" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4> {{ spot.name }}</h4>
                <p>{{ spot.address }}</p>
                
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section> -->


    
    <h1>{{ message }}</h1>

   <p> Filter By: <button v-on:click="changeSkatepark()"> Skatepark </button> 
    
    <button  v-on:click="changeRail()"> Rail </button> <button  v-on:click="changeLedge()"> Ledge </button> <button  v-on:click="changeBank()"> Bank </button> </p>
    <div v-for="spot in filterBy(spots, searchTerm ,'category')"> 
     <p> Id: {{ spot.id }}</p>
     <p> User: {{ spot.user_id }}</p>
     <p> Spot: {{ spot.name}} </p>
     <p> Address: {{ spot.address }}</p>  
     <p> Category: {{ spot.category }} </p> 
     <p> Bust: {{ spot.bust }}</p>
       <router-link v-bind:to="`/spots/${spot.id}`"> 
       <button> Select </button> 
       </router-link>
     <p><img v-bind:src="spot.image_url"></p>
     Image: {{ spot.image }} 
     <p> <img v-bind:src="spot.image">  </p>
     <hr> 

    </div>
  </div>
</template>

<style>
img {
  width: 200px;
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
    };
  },
  mounted: function () {
    this.spotsIndex();
  },
  methods: {
    spotsIndex: function () {
      console.log("Showing all spots...");
      axios.get("/spots").then((response) => {
        console.log("spots index", response.data);
        this.spots = response.data;
      });
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
    showUserId: function () {},
  },
};
</script>