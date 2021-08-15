<template>
  <div class="spots-show">
    <h2> {{ spot.name }} </h2>
    <div id='map' style='width: 400px; height: 300px;'></div>
    <img v-bind:src="spot.image_url"> 
    <p> Address: {{ spot.address }} </p>
    <p> Category: {{ spot.category }} </p>
    <p> Description: {{ spot.description }} </p>
    <p> Bust: {{ spot.bust }} </p>


    <h2> Add your trick! </h2> 
    <form> 
       <ul>
        <li v-for="error in errors" v-bind:key="error"> {{ error }} </li>
      </ul>
  <input type="text" v-model="newTrickParams.content" /> <button v-on:click="createTrick()"> Add </button>
    </form> 

    <h2> Tricks Done Here: </h2> 

    <div v-for="trick in tricks"> 
      <p>  Date Posted: {{ trick.created_at }} | User Id: {{ trick.user_id }} | Trick: {{ trick.content }} </p> 
      <hr> 
    </div> 

    <h2> New Comment </h2> 
    <form v-on:submit.prevent="createComment()"> 
       <ul>
        <li v-for="error in errors" v-bind:key="error"> {{ error }} </li>
      </ul>
      <input type="text" v-model="newCommentParams.content" /> <button v-on:click="createComment()"> Post </button>


    </form> 
    <h2> Comments: </h2>
    <div v-for="comment in comments"> 
     <p>  Date Posted: {{ comment.created_at }} | User Id: {{ comment.user_id }} | Comment: {{ comment.content }} </p> 
     <hr>

     
    </div>
    
  </div>
</template>

<style>
</style>

<script>
import mapboxgl from "mapbox-gl";
import axios from "axios";
export default {
  data: function () {
    return {
      spot: {},
      comments: [],
      tricks: [],
      newCommentParams: {},
      newTrickParams: {},
      errors: [],
    };
  },
  mounted: function () {
    this.spotShow();
    this.displayTricks();
    this.displayComments();
  },
  methods: {
    spotShow: function () {
      axios.get("/spots/" + this.$route.params.id).then((response) => {
        console.log("spots show", response);

        this.spot = response.data;
        mapboxgl.accessToken =
          "pk.eyJ1Ijoiamhhbm92IiwiYSI6ImNrcm9hcjh0MzIxajIybm1sZGJyazdlOW4ifQ.AQSrg9-PGtHngXM9N1nb0Q";

        const map = new mapboxgl.Map({
          container: "map", // container ID
          style: "mapbox://styles/mapbox/streets-v11", // style URL
          center: [this.spot.longitude, this.spot.latitude], // starting position [lng, lat]
          zoom: 11, // starting zoom
        });
        var marker1 = new mapboxgl.Marker();
        marker1
          .setLngLat({ lng: this.spot.longitude, lat: this.spot.latitude })
          .addTo(map);
      });
    },
    displayComments: function () {
      console.log("showing comments");
      axios
        .get(
          "/spots/" + this.$route.params.id + "/comments",
          this.newCommentParams
        )
        .then((response) => {
          console.log("showing comments", response.data);
          this.comments = response.data;
        });
    },
    displayTricks: function () {
      console.log("showing tricks");
      axios
        .get("/spots/" + this.$route.params.id + "/tricks")
        .then((response) => {
          console.log("showing tricks!", response.data);
          this.tricks = response.data;
        });
    },
    createComment: function () {
      axios
        .post(
          "/spots/" + this.$route.params.id + "/comments",
          this.newCommentParams
        )
        .then((response) => {
          console.log("adding a new comment", response.data);
          // this.$router.push("/spots/");
        });
    },
    createTrick: function () {
      axios
        .post(
          "/spots/" + this.$route.params.id + "/tricks",
          this.newTrickParams
        )
        .then((response) => {
          console.log("adding a new trick", response.data);
          // this.$router.push("/spots/");
        });
    },
  },
};
</script>
