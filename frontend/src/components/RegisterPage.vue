<template>
  <h1>RegisterPage</h1>

  <div class="form-div">
    <form>
      <div class="padding-bottom">
        <label for="fname" class="padding-right-30">First Name</label>
        <input type="text" id="fname" name="fname" v-model="firstName">
      </div>
      <div class="padding-bottom">
        <label for="lname" class="padding-right-30">Last Name</label>
        <input type="text" id="lname" name="lname" v-model="lastName">
      </div>
      <div class="padding-bottom">
        <label for="mail" class="padding-right-79">Mail</label>
        <input type="email" id="mail" name="mail" v-model="mail">
      </div>
      <div class="padding-bottom">
        <label for="password" class="padding-right-38">Password</label>
        <input type="password" id="password" name="password" v-model="password">
      </div>
      <div class="padding-bottom">
        <label for="dateOfBirth" class="padding-right-72">Date Of Birth</label>
        <input type="date" id="dateOfBirth" name="dateOfBirth" v-model="dateOfBirth">
      </div>
      <div class="padding-bottom">
        <label for="local" class="padding-right-70">Local</label>
        <input type="text" id="local" name="local" v-model="local">
      </div>
      <div class="padding-bottom">
        <label for="url" class="padding-right-88">Url</label>
        <input type="text" id="url" name="url" v-model="urlImage">
      </div>
      <div class="padding-bottom">
        <label for="subscription" class="padding-right-20">Subscription</label>
        <input type="text" id="subscription" name="subscription" v-model="subscription">
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
  name: "RegisterPage",
  data(){
    return {
      firstName : "",
      lastName : "",
      mail : "",
      password : "",
      dateOfBirth : Date,
      local : [],
      urlImage : "",
      subscription : 'none'
    }
  },
  methods:{
    register(){
      const newUser = {
        firstName: this.firstName,
        lastName: this.lastName,
        mail: this.mail,
        password: this.password,
        dateOfBirth: this.dateOfBirth,
        local: this.local,
        urlImage: this.urlImage,
        subscription: this.subscription
      }

      http.post("/user/register",newUser)
          .then(response => {console.log(response.data)})
          .catch(e => {
            if (e.response.status === 500){
              alert("One or many values are already used")
            }
            console.log(e);
          })
    }
  }
}
</script>

<style scoped>

form{
  display: flex;
  flex-direction: column;

}
.padding-bottom{
  padding-bottom: 10px;
}

.padding-top-15{
  padding-top:25px;
}

.padding-right-20{
  padding-right: 20px;
}

.padding-right-30{
  padding-right: 30px;
}

.padding-right-70{
  padding-right:70px;
}

.padding-right-72{
  padding-right: 72px;
}

.padding-right-38{
  padding-right: 38px;
}

.padding-right-79{
  padding-right: 79px;
}

.padding-right-88{
  padding-right:88px;
}

.btn-submit{
  background-color: white;
  padding-top:10px;
  padding-bottom: 10px;
  padding-right:20px;
  padding-left:20px;
  border-radius: 5px;

}

.btn-submit:hover{
  background-color: black;
  color:white;
  transition-duration: 1s;
}





</style>