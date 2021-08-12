<template>
  <div class="spotsindex">
    <router-link to="/spotsmap"> Map of spots </router-link> 
    
    <h1>{{ message }}</h1>
    <p> {{ }} </p>

    <div v-for="spot in spots"> 
     <p> Id: {{ spot.id }}</p>
     <p> User: {{ spot.user_id }}</p>
     <p> Spot: {{ spot.name}} </p>
     <p> Address: {{ spot.address }}</p>
     <p> Category: {{ spot.category }} </p> 
     <p> Bust: {{ spot.bust }}</p>
       <router-link v-bind:to="`/spots/${spot.id}`"> 
       <button> More Details </button> 
       </router-link>
     <p><img v-bind:src="spot.image_url"></p>
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
      axios.get("/spots").then((response) => {
        console.log("spots index", response.data);
        this.spots = response.data;
      });
    },
    showUserId: function () {},
  },
};
</script>