<template>
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
import ThemeCheckbox from "../_mixins/ThemeMixin.vue";
export default {
  mixins: [ThemeCheckbox],
};
</script>
