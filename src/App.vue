<template>
  <AppLogin />
  <div class="OThemeCheckboxMode">
    <input
      type="checkbox"
      @click="switchTheme()"
      class="OThemeCheckbox"
      id="OThemeCheckbox"
    />
    <label for="OThemeCheckbox" class="OThemeCheckboxLabel">
      <div class="OThemeCheckboxBall"></div>
    </label>
  </div>
</template>

<script>
import AppLogin from "./LoginPage.vue";
import ThemeMixins from "./_mixins/ThemeMixin.vue";

export default {
  name: "App",
  components: {
    AppLogin,
  },
  mixins: [ThemeMixins],
};
</script>
<style scoped src="@/css/darkModeToggle.css"></style>

<style></style>
