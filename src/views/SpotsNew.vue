<template>
  <div class="SpotsNew">
    <!-- <section id="contact" class="contact">
      <div class="container">
        <div class="section-title">
          <h2>Submit your Spot</h2>
        </div>
        <div class="form">
          <form v-on:submit.prevent="submit()">
            <div class="row">
              <div class="col-md-6 form-group">
                <input type="text" v-model="newSpotParams.name" class="form-control" id="name" placeholder="Spot Name">
              </div>
              <div class="col-md-6 form-group mt-3 mt-md-0">
                <input type="text" v-model="newSpotParams.address" class="form-control" name="address" id="address" placeholder="Address">
              </div>
            </div>
             <div class="col-mdform-group mt-3">
              <input type="text" v-model="newSpotParams.category"  class="form-control" name="subject" id="subject" placeholder="Category" >
            </div>
            <div class="form-group mt-3">
              <input type="text"  v-model="newSpotParams.bust" class="form-control" name="subject" id="subject" placeholder="Bust-level (none, low, med, high)">
            </div>
            <div class="form-group mt-3">
              <textarea class="form-control" v-model="newSpotParams.description"  name="description" rows="5" placeholder="Description" ></textarea>
            </div>
            <div class="input-picture">
              Upload a picture: <input type="file" v-on:change="setFile($event)" ref="fileInput"> 
            </div>
            
            <div class="text-center"> <input type="submit" value="Submit"></div>
          </form>
        </div>

      </div>
    </section> -->
    End Contact Section



   
    <<h1> Submit Your Spot </h1>
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
      <p> Bust-Level:
      <input type="text" v-model="newSpotParams.bust"> </p>
      <p> Image URL:
      <input type="text" v-model="newSpotParams.image_url"> </p>
      <div> 
        Upload an Image: <input type="file" v-on:change="setFile($event)" ref="fileInput">
      </div>


      <input type="submit" value="Submit"> 
  </form>  
    

  
  <button v-on:click="submit()"> Add a spot </button>

Hello 

  </div>
</template>

<style>
.input-picture {
  text-align: center;
}
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
  created: function () {
    console.log("in created");
  },
  methods: {
    spotNew: function () {},
    setFile: function (event) {
      if (event.target.files.length > 0) {
        this.newSpotParams.image = event.target.files[0];
      }
    },
    submit: function () {
      console.log("in submit");
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
