<template>
  <div id="app">
     <Text />
    <router-view/>
  
    
    
     <!-- ======= Footer ======= -->
  
      <footer id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">

              <div class="col-lg-3 col-md-6">
                <div class="footer-info">
                  <h3>Blade Spots</h3>
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
    <Text /> 
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
      <Text /> 
  </div>
</template>
<script>
import Text from "./components/Text.vue";
export default {
  name: "App",
  components: {
    Text,
  },
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
 