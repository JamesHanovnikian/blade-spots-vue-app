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
                  <img v-bind:src="spot.image" alt="">
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
        <div class="row" id="map-and-trick">
            <div class="col-6">
              <div class="text-white bg-dark  mb-3">
              <div class="card-body"> 
                <h5 class="card-title"> Trick Board</h5>
                <h6 class="card-subtitle mb-2 text-muted"> If you've been to this spot, let us know what trick you completed! </h6>
                <h6 class="card-subtitle mb-2 text-muted"><a href="http://skateyeg.com/bog/index.html" target = "_blank"> <button class="btn btn-primary"> Book of Grinds </button> </a> </h6>
                <p class="card-text">   
                <input type="text" v-model="newTrickParams.content" style = "width:30rem;"/> 
                <a href="#" class="card-link"> <button class="btn btn-primary" v-on:click="createTrick();"> Add </button> </a>
                </p>
                <div v-for="trick in tricks">
                  <ul>
                    <li> <p class="card-text"> 
                  {{ trick.user.username }} completed {{ trick.content }} on {{ trick.created_at }}</p> 
                    </li> 
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div id='map' style='width: 500px; height: 400px;'></div>
          </div>
        </div>
      </div> 
    </section>
  </main>
  </div>
</div>
</template>

<style>
input[type="text"] {
  width: 600px;
}

#map-and-trick {
  padding-top: 75px;
}
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
          // location.reload();
          // this.$router.push("/spots/92");
        });
    },
  },
};
</script>
