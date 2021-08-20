<template>
  <div class="login">
    <section id="contact" class="contact">
      <div class="container-login">
        <div class="section-title">
          <h2>Log In</h2>
          <p> <a href="/signup" class="btn btn-success"> Sign Up</a></p>
        </div>
        <div id="main-form" class="form">
          <form class="form-center" v-on:submit.prevent="submit()">
            <div id="email-row" class="row">
              <ul>
                <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
               </ul>  
              <div class="col-md-12">
                <input type="email" name="name" class="form-control" id="name" placeholder="Email" data-  rule="minlen:4" data-msg="Please enter at least 4 chars" v-model="newSessionParams.email" />
              </div>
            </div>
            <div class="row">
               <div class="col-md-12">
                <input type="password" name="name" class="form-control" id="name" placeholder="password" v-model="newSessionParams.password">
                </div>
           </div>
          <div id="submit-button" class="text-center"> <input class="btn btn-success"type="submit" value="Login" /></div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
<style>
form #form-center {
  padding-top: 50px;
  padding-bottom: 50px;
}
#submit-button {
  padding-top: 40px;
}
#sidepanel img {
  max-width: 300px;
  max-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#login-form {
  display: flex;
  align-items: center;
  justify-content: center;
}

#email-row {
  align-items: center;
}

.container-login {
  padding: 0 200px;
}
</style>



<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/spotsindex");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>
