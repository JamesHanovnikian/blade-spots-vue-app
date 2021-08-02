<template>
  <div class="spotsindex">
    <h1>{{ message }}</h1>
    <p> {{ }} </p>

    <div v-for="spot in spots"> 
     <p> Id: {{ spot.id }}</p>
     <p> User: {{ spot.user_id }}</p>
     <p> Spot: {{ spot.name}} </p>
     <p> Address: {{ spot.address }}</p>
     <p> Category: {{ spot.category }} </p> 
      <p> Bust: {{ spot.bust }}</p>
     <p> Image: {{ spot.image_url }}</p>
     <hr> 

    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Find a spot",
      spots: [],
    };
  },
  created: function () {
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
  },
};
</script>