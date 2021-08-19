<template>
  <div class="spots-show">

  
  <main id="main">

    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2> Spot Details </h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li> Spot Details</li>
          </ol>
        </div>

      </div>
    </section><!-- End Breadcrumbs -->

    <!-- ======= Portfolio Details Section ======= -->
    <section id="portfolio-details" class="portfolio-details">
      <div class="container">

        <div class="row gy-4">

          <div class="col-lg-8">
            <div class="portfolio-details-slider swiper-container">
              <div class="swiper-wrapper align-items-center">

                <div class="swiper-slide">
                  <img  v-bind:src="spot.image" alt="">
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="portfolio-info">
              <h3> {{ spot.name}}</h3>
              <ul>
               
                <li><strong>Address</strong>: {{ spot.address }}</li>
                <li><strong>Category</strong>: {{ spot.category }}</li>
                <li><strong>Bust-level</strong>: {{ spot.bust }}</li>
                
                
              </ul>
            </div>
            <div class="portfolio-description">
              <h2> Description </h2>
              <p>
                {{ spot.description }}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section><!-- End Portfolio Details Section -->

  </main><!-- End #main -->


  
 
     




    <div id='map' style='width: 400px; height: 300px;'></div>



    <div class="panel panel-default">
       <div class="panel-header"> <h3> </h3> </div>
      <div v-for="trick in tricks"> 
        
           <div class="panel-body"> {{trick.user_id}}  completed {{ trick.content }} on {{ trick.created_at }}
           </div>
      </div>
    </div>


    <h2> Add your trick! </h2> 
    <form> 
       <ul>
        <li v-for="error in errors" v-bind:key="error"> {{ error }} </li>
      </ul>
  <input type="text" v-model="newTrickParams.content" /> <button v-on:click="createTrick()"> Add </button>
    </form> 

    <h2> Trick Board: </h2> 
  

  <table class="table table-dark">
    <thead>
    <tr>
      
      <th scope="col-4"> Date Completed </th>
      <th scope="col-4">Username </th>
      <th scope="col-4">Trick </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
   </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
    </tr>
  </tbody>
</table>
  
  
  

    

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
          style: "mapbox://styles/mapbox/navigation-night-v1", // style URL
          center: [this.spot.longitude, this.spot.latitude], // starting position [lng, lat]
          zoom: 11, // starting zoom
        });
        map.addControl(new mapboxgl.NavigationControl());
        const popup = new mapboxgl.Popup({ offset: 25 }).setText(
          "Construction on the Washington Monument began in 1848."
        );

        const el = document.createElement("div");
        el.id = "marker";

        new mapboxgl.Marker()
          .setLngLat({ lng: this.spot.longitude, lat: this.spot.latitude })
          .setPopup(popup)
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
