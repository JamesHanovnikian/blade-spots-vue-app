<template>
  <div class="signup">
    <section id="contact" class="contact">
      <div class="container-signup">
        <div class="section-title">
          <h2> Sign Up </h2>
        </div>
        <div class="form">
          <form v-on:submit.prevent="submit()" class="php-email-form">
            <div class="row">
              <div class="col-md-12 form-group">
                <input type="text" v-model="newUserParams.username"  name="name" class="form-control" id="name" placeholder="Username">
              </div>
              <div class="col-md-12 form-group">
                <input type="email" v-model="newUserParams.email" name="name" class="form-control" id="name" placeholder="Email">
              </div>
              
              <div class="col-md-12 form-group">
                <input type="password" v-model="newUserParams.password"  name="name" class="form-control" id="name" placeholder="Password">
              </div>
              <div class="col-md-12 form-group">
                <input type="password" v-model="newUserParams.password_confirmation" class="form-control" name="email" id="email" placeholder="Confirm Password">
              </div>
            </div>
           <div class="text-center"> <input type="submit" value="Submit" /></div>
          </form>
        </div>

      </div>
    </section>
  </div>
</template>
<style>
form {
  padding-top: 100px;
  padding-bottom: 200px;
}
</style>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
