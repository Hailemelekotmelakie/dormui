<template>
  <div v-if="!isLogin && loginPage">
    <h4 v-if="authResponse">Login {{ authResponse }}</h4>
    <input type="text" name="email" v-model="email" placeholder="email" /> <br />
    <input type="text" v-model="password" placeholder="password" /><br /><br />
    <input @click="handleLogin()" type="button" value="login" />
    <h5>Have not account <span @click="loginPage = !loginPage">Click here</span></h5>
  </div>
  <div v-if="!isLogin && !loginPage">
    <h4 v-if="authResponse">signup{{ authResponse }}</h4>
    <input type="text" name="name" v-model="Sname" placeholder="name" /> <br />
    <input type="text" name="email" v-model="Semail" placeholder="email" /> <br />
    <input type="text" v-model="Spassword" placeholder="password" /><br /><br />
    <input @click="handleSignup()" type="button" value="Signup" />
    <h5>Have an account <span @click="loginPage = !loginPage">Click here</span></h5>
  </div>
  <div v-if="isLogin"><AppHeader /></div>
</template>

<script>
import AppHeader from "./AppHeader/AppHeader.vue";
import Axios from "axios";
// import VueCookies from "vue-cookies";

import ThemeMixins from "./_mixins/ThemeMixin.vue";
import cookieMixin from "./_mixins/CookieMixin.vue";

export default {
  name: "App",
  components: {
    AppHeader,
  },
  inject: ["DORM_API"],
  mixins: [ThemeMixins, cookieMixin],
  data() {
    return {
      email: null,
      password: null,
      showPassword: false,
      authResponse: undefined,
      loginPage: true,
    };
  },
  methods: {
    handleLogin() {
      Axios.defaults.withCredentials = true;
      Axios.post(this.DORM_API + "/log", {
        email: this.email,
        password: this.password,
      })
        .then((result) => {
          if (this.email && this.password) {
            if (result.status === 200) {
              console.log("Loggd in ");
              if (result.data === "success") {
                this.$router.push({ path: "/" });
                this.isLogin = true;
                this.authResponse = undefined;
              } else {
                this.authResponse = result.data;
              }
            } else {
              this.authResponse = "Error";
            }
          } else {
            this.authResponse = "Fill below";
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
