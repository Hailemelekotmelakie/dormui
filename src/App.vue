<template>
  <AppHeader />
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
import AppHeader from "./AppHeader/AppHeader.vue";
import ThemeMixins from "./_mixins/ThemeMixin.vue";

export default {
  name: "App",
  components: {
    AppHeader,
  },
  mixins: [ThemeMixins],
};
</script>

<style></style>
