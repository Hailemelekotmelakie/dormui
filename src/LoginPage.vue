<template>
  <div v-if="!isLogin">
    <h4 v-if="authResponse">{{ authResponse }}</h4>
    <input type="text" name="email" v-model="email" placeholder="email" /> <br />
    <input type="text" v-model="password" placeholder="password" /><br /><br />
    <input @click="handleLogin()" type="button" value="login" />
  </div>
  <div v-if="isLogin"><AppHeader /></div>
</template>

<script>
import AppHeader from "./AppHeader/AppHeader.vue";
import Axios from "axios";
// import VueCookies from "vue-cookies";

import ThemeMixins from "./_mixins/ThemeMixin.vue";

export default {
  name: "App",
  components: {
    AppHeader,
  },
  inject: ["DORM_API"],
  mixins: [ThemeMixins],
  data() {
    return {
      email: null,
      password: null,
      showPassword: false,
      isLogin: false,
      authResponse: undefined,
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
                // this.$router.push({ path: "/contact" });
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
  mounted() {
    if (this.isLogin) {
      console.log("No redirect");
      this.$router.push("contact");
    } else {
      console.log("No redirect");
    }
  },
};
</script>
