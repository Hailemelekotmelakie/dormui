<template>
  <div class="menuContainer">
    <div class="menu"></div>
    <div class="menu"></div>
    <div class="menu"></div>
  </div>
  <router-link to="/"> Homepage </router-link>
  <router-link to="/contact"> Contact </router-link>
  <router-view />
</template>

<script>
import ThemeMixin from "../_mixins/ThemeMixin.vue";

export default {
  name: "AppHeader",
  mixins: [ThemeMixin],
};
</script>
<style scoped src="@/css/menu.css"></style>

<style></style>
