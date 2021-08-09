<template>
  <div class="spots-show">
    <h2> {{ spot.name }} </h2>
    <img v-bind:src="spot.image_url"> 
    <p> Address: {{ spot.address }} </p>
    <p> Category: {{ spot.category }} </p>
    <p> Description: {{ spot.description }} </p>
    <p> Bust: {{ spot.bust }} </p>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      spot: {},
    };
  },
  created: function () {
    this.spotShow();
  },
  methods: {
    spotShow: function () {
      axios.get("/spots/" + this.$route.params.id).then((response) => {
        console.log("spots show", response.data);
        this.spot = response.data;
      });
    },
    displayComments: function () {
      console.log("showing comments");
      axios.get();
    },
  },
};
</script>
