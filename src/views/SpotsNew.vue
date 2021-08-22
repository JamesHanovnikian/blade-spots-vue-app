<template>
  <div class="SpotsNew">
    
    
    
    <section id="contact" class="contact">
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
                <div>
                  <label class="typo__label"> Category: </label> <multiselect v-model="newSpotParams.category" :options ="options" :searchable="false" :close-on-select="true" :show-labels="false" placeholder="Select Category"></multiselect>
                </div>
            </div>
              <div class="form-group mt-3">
                <label class="bust-level"> Bust-Level: </label>
                <multiselect v-model="newSpotParams.bust" :options="optionsBust" :searchable="false" :close-on-select="true" :show-labels="false" placeholder="Select Bust-level"> </multiselect>
              </div>
            <div class="form-group mt-3">
              <textarea class="form-control" v-model="newSpotParams.description"  name="description" rows="5" placeholder="Description" ></textarea>
            </div>
            <div class="input-picture">
              Upload a picture: <input type="file" v-on:change="setFile($event)" ref="fileInput"> 
            </div>
            
            <div class="text-center"> <input class="btn btn-success" type="submit" value="Submit"></div>
          </form>
        </div>

      </div>
    </section>
  </form>   
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
          this.$router.push(`"/spots/${spot.id}"`);
        })
        .catch((error) => {
          console.log("Spot Create Error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
