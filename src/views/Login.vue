<template>
  <div class="login">
    <div class="container row">
      <div id="login-form"class="col-6"> 
        <form v-on:submit.prevent="submit()">
          <h1>Login</h1>
          <ul>
            <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
          </ul>
          <div>
            <label>Email:</label>
            <input type="email" v-model="newSessionParams.email" />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" v-model="newSessionParams.password" />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div> 
       <div id="sidepanel" class="col-6">
        <img src="/assets/img/topacid_bilbao.jpeg" alt="">
    </div>
    </div> 
   
    
  </div>
</template>
<style>
.login {
  padding-top: 150px;
  padding-bottom: 200px;
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
          this.$router.push("/");
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
