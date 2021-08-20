<template>
  <div class="home">
    <section id="hero">
    <div class="hero-container">
      <div id="heroCarousel" data-bs-interval="5000" class="carousel slide carousel-fade" data-bs-ride="carousel">

        <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

        <div class="carousel-inner" role="listbox">

          <!-- Slide 1 -->
          <div class="carousel-item active" id="cover-photo" style="background: url(/assets/img/coverphoto.jpg) no-repeat bottom center fixed">
            <div class="carousel-container">
              <div class="carousel-content">
                <h2 class="animate__animated animate__fadeInDown"> Blade Spots </h2>
                <p class="animate__animated animate__fadeInUp"> Find the best street skate spots in your area </p>
                <div>1
                  <a href="/login" class="btn-get-started animate__animated animate__fadeInUp scrollto"> Log In </a>
                </div>
              </div>
            </div>
          </div>



        </div>


      </div>
    </div>
  </section><!-- End Hero -->
    
  </div>
</template>

<style>
#cover-photo {
  background-position: center;
}
</style>

<script>
import axios from "axios";
import mapboxgl from "mapbox-gl";
export default {
  data: function () {
    return {};
  },
  mounted: function () {},
  methods: {
    startMapBox: function () {
      mapboxgl.accessToken =
        "pk.eyJ1Ijoiamhhbm92IiwiYSI6ImNrcm9hcjh0MzIxajIybm1sZGJyazdlOW4ifQ.AQSrg9-PGtHngXM9N1nb0Q";

      const map = new mapboxgl.Map({
        container: "map", // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9, // starting zoom
      });
    },
  },
};
</script>