<template>
  <div class="SpotsNew">
    <h1> Submit Your Spot </h1>
    {{selectedFile}}
    <form v-on:submit.prevent="spotNew()">
      <ul> 
        <li v-for="error in errors" v-bind:key="error"> {{ error }} </li>
      </ul>
     <p> Name: 
      <input type="text" v-model="newSpotParams.name"> </p>
     <p> Address: 
      <input type="text" v-model="newSpotParams.address"> </p>
     <p> Category:
      <input type="text" v-model="newSpotParams.category"> </p>
     <p> Description:
      <input type="text" v-model="newSpotParams.description"> </p>
      <p> Bust:
      <input type="text" v-model="newSpotParams.bust"> </p>
      <p> Image URL:
      <input type="text" v-model="newSpotParams.image_url"> </p>
      
      <p> <input type="file" @change="onFileSelected"> 
      <button @click="onUpload"> Upload! </button></p>

      <button v-on:click="spotNew()"> Submit </button>

    

    </form>

  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      errors: [],
      newSpotParams: {},
      selectedFile: null,
    };
  },
  created: function () {},
  methods: {
    spotNew: function () {
      axios
        .post("/spots", this.newSpotParams)
        .then((response) => {
          console.log("spots create", response.data);
          this.$router.push("/spotsindex");
        })
        .catch((error) => {
          console.log("Spot Create Error", error.response);
          this.errors = error.response.data.errors;
        });
    },
    onFileSelected(event) {
      console.log(event);
      this.selectedFile = event.target.files[0];
    },
    onUpload() {},
  },
};
</script>
