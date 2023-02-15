<template>
  <div class="menuContainer">
    <div class="menu"></div>
    <div class="menu"></div>
    <div class="menu"></div>
  </div>
  <router-link to="/"> Home </router-link>
  <router-link to="/contact"> Telegram </router-link>
  <router-view />

  <div v-for="one in data" :key="one">{{ one.id }} {{ one.post }}{{ one.userId }}</div>
</template>

<script>
import ThemeMixin from "../_mixins/ThemeMixin.vue";
import Axios from "axios";

export default {
  name: "AppHeader",
  mixins: [ThemeMixin],
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    Axios.get("https://dormapi.huliesira.com/post")
      .then((result) => {
        this.data = result.data;
      })
      .catch((e) => console.error(e));
  },
};
</script>
<style scoped src="@/css/menu.css"></style>

<style></style>
