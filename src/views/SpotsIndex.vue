<template>
  <div class="home">
    <h1>{{ message }}</h1>

    <p> {{ spots }}</p>
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