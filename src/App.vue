<template>
  <div id="app">
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
              <li><router-link to="/spotsmap"> Map View </router-link></li> 
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
    <router-view/>
    
        
    
    
     <!-- ======= Footer ======= -->
      <footer id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">

              <div class="col-lg-3 col-md-6">
                <div class="footer-info">
                  <h3>BladeSpots</h3>
                  <p>
                     <br> <i class="fas fa-home"></i> Chicago, IL <br> 
                  </p>
                  
                </div>
              </div>

              <div class="col-lg-2 col-md-6 footer-links">
                <h4></h4>
                <ul>
                  <li><i class="bx bx-chevron-right"></i> <a href="/">Home</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="/login"> Login </a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="/signup"> Signup</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="/spotsindex"> View Spots </a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="/newspots"> Add a spot </a></li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links </h4>
                <ul>
                  <li><i class="bx bx-chevron-right"></i> <a href="http://www.oneblademag.com/"> ONEblademagazine</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="https://rollerwarehouse.com/"> Roller Warehouse </a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="https://www.facebook.com/groups/chicagobladescene"> Rollerblading Facebook Group </a></li>
                  
                </ul> 
              </div>

              <div class="col-lg-4 col-md-6 footer-newsletter">
                <h4>Our Newsletter</h4>
                <form action="" method="post">
                  <input type="email" name="email"><input type="submit" value="Subscribe">
                </form>

              </div>

            </div>
          </div>
        </div>

        <div class="container">
          <div class="copyright">
           Created by <strong><span>James Hanovnikian</span></strong>
          </div>
          <div class="credits">
            <!-- All the links in the footer should remain intact. -->
            <!-- You can delete the links only if you purchased the pro version. -->
            <!-- Licensing information: https://bootstrapmade.com/license/ -->
            <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/groovin-free-bootstrap-theme/ -->
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer><!-- End Footer -->
  </div>
</template>
<script>
export default {
  data: function () {
    return {};
  },
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style>
header {
  background-color: #cfeb34;
}
</style>
 