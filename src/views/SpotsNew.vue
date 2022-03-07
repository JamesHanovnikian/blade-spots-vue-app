<template>
  <div class="SpotsNew">
    <section id="contact" class="contact">
      <div class="container">
        <div class="content">
           <div class="section-title">
            <h2>Submit your Spot</h2>
           </div>
         <form class="add-form" v-on:submit.prevent="submit()">
          <div class="form-group">
            <label for="exampleInputEmail1"> Name </label>
            <input v-model="newSpotParams.name" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1"> Address </label>
            <input v-model="newSpotParams.address" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Address">
          </div>
          <div class="form-group input-group-sm ">
            <label for="category"> Category </label> <span style="display: inline; float: none;"></span>  
            <select v-model="newSpotParams.category" id="category" name="category" class="form-control">
              <option value="AL">Rail </option>
              <option value="AK">Skatepark</option>
              <option value="AZ">Ledge</option>
            </select>
          </div>
        <div class="form-group input-group-sm ">
           <label for="bust"> Bust-Level </label> 
           <span style="display: inline; float: none;"></span>  
            <select v-model="newSpotParams.bust" id="bust" name="category" class="form-control">
              <option value="AL">Low  </option>
              <option value="AK">Medium</option>
              <option value="AZ">High</option>
            </select>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1"> Description </label>
          <input v-model="newSpotParams.description" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Description">
        </div>
        <div class="input-picture">
              Upload a picture: <input type="file" v-on:change="setFile($event)" ref="fileInput"> 
        </div>
        <div class="text-center"> <input class="btn btn-success" type="submit" value="Submit"></div>
      </form> 
      <div class="image-1">
        <div class="card">
          <img class="card-img-top" src="https://storage.googleapis.com/fsscs1/images/large/577ff9b2adc92f845c58496e500d0dbc.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title"> Handrail </h5>
            <p class="card-text"> Any handrail from downrails to flat </p>
          </div>
        </div>
      </div> 
      <div class="image-2">
         <div class="card">
          <img class="card-img-top" src="https://storage.googleapis.com/fsscs1/images/large/4c0c4361282957f7cdac8d00c669cf0d.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title"> Ledge </h5>
            <p class="card-text"> From concrete to marble, this is any spot with a flat edge</p>
          </div>
        </div>
      </div> 
      <div class="image-3">
         <div class="card">
          <img class="card-img-top" src="https://live.staticflickr.com/3297/3418059175_6fc11e8a5a_b.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title"> Park </h5>
            <p class="card-text"> Creative goodness</p>
          </div>
        </div>
      </div>
  </div>
       
    
     
      </div>
    </section>
    </div>  
</template>

<style>
.section-title {
  padding-top: 50px;
}
</style>

<script>
import axios from "axios";
import Multiselect from "vue-multiselect";

export default {
  components: { Multiselect },
  data: function () {
    return {
      errors: [],
      newSpotParams: {},
      selectedFile: null,
      value: null,
      options: ["Rail", "Skatepark", "Ledge"],
      optionsBust: ["None", "Low", "Medium", "High"],
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
          this.newSpotParams.name = "";
          this.newSpotParams.address = "";
          this.$refs.fileInput.value = "";
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
