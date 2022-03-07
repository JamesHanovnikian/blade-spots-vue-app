<template>
<div class="text"> 
  <header id="header" class="fixed-top d-flex align-items-center">
      <div class="container d-flex align-items-center justify-content-between">
      <h1 class="logo">
      <!-- Uncomment below if you prefer to use an image logo -->
      <a href="/"><img src="assets/img/logonew.png"  alt="" class="img-fluid" id="logo-image"> </a></h1>
      <nav id="navbar" class="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li class="dropdown"><a href="/spots"><span> Find Spots </span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li> <router-link to="/spots"> List View </router-link> </li> 
              <li> <router-link to="/spotsmap"> Map View </router-link></li> 
            </ul>
          </li>
          <li><a href="/spots/new"> Create Spot </a></li>
          <div v-if="isLoggedIn()"> <li><a href="/login">Log In </a></li>
          </div> 
          <li><router-link v-if="" to="/logout"> Log Out </router-link> </li>
          <li><a href="/signup"> Sign Up </a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->
      </div>
  </header>
</div>
</template>



<script>
export default {
  name: "Text",
};
</script>
