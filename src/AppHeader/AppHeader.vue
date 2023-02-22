<template>
    <div class="menuContainer">
        <div class="menu"></div>
        <div class="menu"></div>
        <div class="menu"></div>
    </div>
    <router-link to="/"> Home </router-link>
    <router-link to="/contact"> contact </router-link>
    <div class="OThemeCheckboxMode">
        <input type="checkbox" @click="switchTheme()" class="OThemeCheckbox" id="OThemeCheckbox" />aa
        <label for="OThemeCheckbox" class="OThemeCheckboxLabel">
            <div class="OThemeCheckboxBall"></div>
        </label>
    </div>
    <button @click="this.$emit('loggout')">Logout</button>
    <router-view />
</template>

<script>
import ThemeCheckbox from "../_mixins/ThemeMixin.vue";
import CookieMixin from "../_mixins/CookieMixin.vue";

export default {
    name: "AppHeader",
    emits: ["loggout"],
    mixins: [ThemeCheckbox, CookieMixin]
};
</script>

<style scoped src="@/css/menu.css"></style>
<style scoped src="@/css/darkModeToggle.css"></style>

<style></style>
