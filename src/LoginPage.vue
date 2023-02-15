<template>
  <input type="text" name="email" v-model="email" placeholder="email" /> <br />
  <input type="text" v-model="password" placeholder="password" /><br />
  <input @click="handleLogin()" type="button" value="login" />
</template>

<script>
// import AppHeader from "./AppHeader/AppHeader.vue";
import Axios from "axios";
import ThemeMixins from "./_mixins/ThemeMixin.vue";

export default {
  name: "App",
  components: {
    // AppHeader,
  },
  mixins: [ThemeMixins],
  data() {
    return {
      email: null,
      password: null,
      showPassword: false,
    };
  },
  methods: {
    handleLogin() {
      console.log(this.email);
      Axios.post("https://dormapi.huliesira.com/login", {
        email: this.email,
        password: this.password,
      })
        .then((result) => {
          if (result.status == 200) {
            console.log("Loggd in ");
          }
          if (result.status == 403) {
            console.log("out in ");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
