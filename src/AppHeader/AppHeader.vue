<template >
    <div>
        <div @click="menuModalSwitcher()" class="menuContainer">
            <div class="menu menu1"></div>
            <div class="menu menu2"></div>
            <div class="menu menu3"></div>
        </div>
        <MenuContainerSlot v-if="menuModalToggle">
            <router-link @click="menuModalSwitcher()" to="/">
                <EachLinksSlot> Home</EachLinksSlot>
            </router-link>
            <router-link @click="menuModalSwitcher()" to="/chats">
                <EachLinksSlot>Chats</EachLinksSlot>
            </router-link>
            <router-link @click="menuModalSwitcher()" to="/channels">
                <EachLinksSlot>Channels</EachLinksSlot>
            </router-link>
            <router-link @click="menuModalSwitcher()" to="/groups">
                <EachLinksSlot>Groups</EachLinksSlot>
            </router-link>
            <EachLinksSlot @click="menuModalSwitcher()">
                <div>Settings</div>
            </EachLinksSlot>
            <EachLinksSlot @click="switchTheme()">
                <div class="OThemeCheckboxMode">
                    <input type="checkbox" @click="switchTheme()" class="OThemeCheckbox" id="OThemeCheckbox" />Night Mode
                    &emsp;&emsp;&emsp;&emsp; <label for="OThemeCheckbox" class="OThemeCheckboxLabel">
                        <div class="OThemeCheckboxBall"></div>
                    </label>
                </div>
            </EachLinksSlot>
            <EachLinksSlot>
                <div @click="this.$emit('loggout')">Logout</div>
            </EachLinksSlot>

        </MenuContainerSlot>
    </div>
    <router-view />
</template>

<script>
import ThemeCheckbox from "../_mixins/ThemeMixin.vue";
import MenuToggleMixin from "../_mixins/MenuToggleMixin.vue";
import MenuContainerSlot from "../Slots/HeaderSlot/MenuContainerSlot.vue";
import EachLinksSlot from "../Slots/HeaderSlot/EachLinksSlot.vue"
export default {
    name: "AppHeader",
    emits: ["loggout"],
    mixins: [ThemeCheckbox, MenuToggleMixin],
    components: {
        MenuContainerSlot,
        EachLinksSlot,
    },
};
</script>

<style scoped src="@/css/menu.css"></style>
<style scoped src="@/css/darkModeToggle.css"></style>

<style scoped>
.router-link-active {
    text-decoration: none;
}

a {
    text-decoration: none;
}
</style>
