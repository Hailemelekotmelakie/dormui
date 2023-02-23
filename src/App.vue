<template>
    <AppLogin @loggout="outLogger()" />
    <div style="display: none;" class="OThemeCheckboxMode">
        <input type="checkbox" @click="switchTheme()" class="OThemeCheckbox" id="OThemeCheckbox" />
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
    provide: {
        DORM_API: process.env.VUE_APP_DORM_API,
    },
    components: {
        AppLogin,
    },
    mixins: [ThemeMixins],
};
</script>

<style scoped src="@/css/darkModeToggle.css"></style>

<style></style>
