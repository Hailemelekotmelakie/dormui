<template>
  <div v-if="!isLogin">
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
    };
  },
  methods: {
    handleLogin() {
      Axios.defaults.withCredentials = true;
      Axios.post(this.DORM_API + "/user", {
        email: this.email,
        password: this.password,
      })
        .then((result) => {
          if (result.status === 200) {
            console.log("Loggd in ");
            this.$router.push({ path: "/contact" });
            this.isLogin = true;
          }
          if (result.status === 403) {
            console.log("out in ");
            this.isLogin = true;
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
