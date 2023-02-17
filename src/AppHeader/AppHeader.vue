<template>
  <div class="menuContainer">
    <div class="menu"></div>
    <div class="menu"></div>
    <div class="menu"></div>
  </div>
  <router-link to="/"> Home </router-link>
  <router-link to="/contact"> contact </router-link>
  <router-view />
</template>

<script>
export default {
  name: "AppHeader",
};
</script>
<style scoped src="@/css/menu.css"></style>

<style></style>
