<template>
  <div class="SpotsNew">
    <h1> Submit Your Spot </h1>
    {{selectedFile}}
    <form v-on:submit.prevent="submit()">
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
      <div> 
        Upload an Image: <input type="file" v-on:change="setFile($event)" ref="fileInput">
      </div>


      <input type="submit" value="Submit"> 

    

    

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
    spotNew: function () {},
    setFile: function (event) {
      if (event.target.files.length > 0) {
        this.newSpotParams.image = event.target.files[0];
      }
    },
    submit: function () {
      var formData = new FormData();
      formData.append("name", this.newSpotParams.name);
      formData.append("address", this.newSpotParams.address);
      formData.append("category", this.newSpotParams.category);
      formData.append("description", this.newSpotParams.description);
      formData.append("bust", this.newSpotParams.bust);
      formData.append("image", this.newSpotParams.image);
      axios
        .post("/spots", formData)
        .then((response) => {
          console.log("spots create", response.data);
          this.$router.push("/spotsindex");
        })
        .catch((error) => {
          console.log("Spot Create Error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
