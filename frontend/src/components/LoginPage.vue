<template>
  <h1>LoginPage</h1>

  <div class="form-div">
    <form>
      <div class="padding-bottom">
        <label for="mail" class="padding-right-79">Mail</label>
        <input type="email" id="mail" name="mail" v-model="mail">
      </div>
      <div class="padding-bottom">
        <label for="password" class="padding-right-38">Password</label>
        <input type="password" id="password" name="password" v-model="password">
      </div>
      <div class="padding-top-15">
        <input type="button" value="Register" class="btn-submit" v-on:click="register">
      </div>


    </form>
  </div>




</template>


<script>
import http from "../http-common";
export default {
  name: "LoginPage",
  data(){
    return{
      mail: "",
      password: ""
    }
  },
  methods:{
    logIn(){
      const userLogIn = {
        mail: this.mail,
        password: this.password
      }

      http.get("/user/logIn",userLogIn)
          .then(response => {console.log(response.data)})
          .catch(e => {
            if (e.response.status === 401) {
              console.log(e);
              alert("Wrong email")
            } else if (e.response.status === 402) {
              console.log(e);
              alert("No access to this web app")
            } else {
              console.log(e);
              alert("Wrong password")
            }
          })
    }
  }
}
</script>

<style scoped>

</style>