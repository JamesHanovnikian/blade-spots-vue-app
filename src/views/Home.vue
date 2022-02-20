<template>
  <div class="home">
    <section id="hero">
    <div class="hero-container">
      <div id="heroCarousel" data-bs-interval="5000" class="carousel slide carousel-fade" data-bs-ride="carousel">

        <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

        <div class="carousel-inner" role="listbox">

          
          <div class="carousel-item active" id="cover-photo">
            <div class="carousel-container">
              <div class="carousel-content">
                <h2 class="animate__animated animate__fadeInDown"> Welcome to BladeSpots </h2>
                <p class="animate__animated animate__fadeInUp"> A tool to find the best skate spots in your area and share with others </p>
                
                <div>
                  <a href="/login" class="btn-get-started animate__animated animate__fadeInUp scrollto"> Log In </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
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