<template>
  <div class="SpotsNew">
    <h1> Submit Your Spot </h1>
    <form v-on:submit.prevent="spotNew()">
      <ul> 
        <li v-for="error in errors" v-bind:key="error"> {{ error }} </li>
      </ul>
     <p> Name: 
      <input type="text" v-model="newSpotsParams.name"> </p>
     <p> Address:
      <input type="text" v-model="newSpotsParams.address"> </p>
     <p> Category:
      <input type="text" v-model="newSpotsParams.category"> </p>
     <p> Description:
      <input type="text" v-model="newSpotsParams.description"> </p>
      <p> Bust:
      <input type="text" v-model="newSpotsParams.bust"> </p>
      <p> Image URL:
      <input type="text" v-model="newSpotsParams.image_url"> </p>

      <button v-on:click="spotNew()"> </button>



    </form>

  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      errors: [],
      newSpotsParams: {},
    };
  },
  created: function () {},
  methods: {
    spotNew: function () {
      axios
        .post("/spots", this.newSpotsParams)
        .then((response) => {
          console.log("spots create", response.data);
          this.$router.push("/spots");
        })
        .catch((error) => {
          console.log("Spot Create Error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
