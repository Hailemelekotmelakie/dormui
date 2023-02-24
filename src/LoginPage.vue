<template>
    <div v-if="isLoginBefore == 1">
        <AppHeader @loggout="loggout()" />
    </div>
    <ContainerSlot v-else>
        <div style="position: absolute;top: 40px; left: 40px;" class="OThemeCheckboxMode">
            <input type="checkbox" @click="switchTheme()" class="OThemeCheckbox" id="OThemeCheckbox" />
            <label for="OThemeCheckbox" class="OThemeCheckboxLabel">
                <div class="OThemeCheckboxBall"></div>
            </label>
        </div>
        <div v-if="loginPage">
            <EMDS v-if="isFirstOnLogin">
                <form class="forms">
                    <HeaderSlot>Login</HeaderSlot>
                    <ErrorSlot v-if="loginError">{{ loginError }}</ErrorSlot>
                    <input class="inputs" :class="{ 'fuccussed': hasFocus }" @focus="onFocus" @blur="onBlur" name="email"
                        type="text" v-model="email" placeholder="email" />
                    <div class="eyeContainer">
                        <input v-if="!showPassword" class="inputs" :class="{ 'fuccussed': hasFocus1 }" @focus="onFocus1"
                            @blur="onBlur1" type="password" autocomplete="off" v-model="password" placeholder="password" />
                        <span v-if="!showPassword" v-html="htmlEye" @click="toggleShowPassword()"
                            class="passwordText"></span>
                        <input v-if="showPassword" class="inputs" :class="{ 'fuccussed': hasFocus1 }" @focus="onFocus1"
                            @blur="onBlur1" type="text" autocomplete="off" v-model="password" placeholder="password">
                        <span v-if="showPassword" v-html="htmlSlashEye" @click="toggleShowPassword()"
                            class="passwordText"></span>
                    </div>
                    <ButtonSlot @click="handleLogin()">Login</ButtonSlot>
                </form>
                <LinksSlot @click="loginToForgotPassword()">Forgot password ?</LinksSlot>
                <LinksSlot @click="loginPage = !loginPage">Have not account create a new</LinksSlot>
            </EMDS>
            <div v-else>
                <EMDS v-if="isFirstReset">
                    <BackSlot @click="forgotPasswordToLogin()"></BackSlot>
                    <form class="forms">
                        <HeaderSlot>Forgot Password</HeaderSlot>
                        <ErrorSlot v-if="emailNotFound">{{ emailNotFound }}</ErrorSlot>
                        <input class="inputs" :class="{ 'fuccussed': hasFocus2 }" @focus="onFocus2" @blur="onBlur2"
                            type="email" placeholder="Put email" v-model="lostEmail">
                        <ButtonSlot @click="sentRestCode()">Send code</ButtonSlot>
                    </form>
                </EMDS>
                <div v-else>
                    <EMDS v-if="isPasswordChanging">
                        <BackSlot @click="comfirmToForget()"></BackSlot>
                        <form class="forms">
                            <HeaderSlot>Confirm Verification Code</HeaderSlot>
                            <ErrorSlot v-if="confirmCodeNumber">{{ confirmCodeNumber }}</ErrorSlot>
                            <input class="inputs" :class="{ 'fuccussed': hasFocus2 }" @focus="onFocus2" @blur="onBlur2"
                                type="text" placeholder="code" v-model="resetCredential">
                            <ButtonSlot @click="confirmCode()">Next</ButtonSlot>
                        </form>
                    </EMDS>
                    <EMDS v-else>
                        <BackSlot @click="passwordToCode()"></BackSlot>
                        <form class="forms">
                            <HeaderSlot>Confirm New Password</HeaderSlot>
                            <ErrorSlot v-if="confirmNewPassword">{{ confirmNewPassword }}</ErrorSlot>
                            <div class="eyeContainer">
                                <input v-if="showPassword" class="inputs" :class="{ 'fuccussed': hasFocus1 }"
                                    @focus="onFocus1" @blur="onBlur1" type="text" autocomplete="off"
                                    placeholder="Confirm new password" v-model="newPassword">
                                <span v-if="showPassword" v-html="htmlEye" @click="toggleShowPassword()"
                                    class="passwordText"></span>
                                <input v-if="!showPassword" class="inputs" :class="{ 'fuccussed': hasFocus1 }"
                                    @focus="onFocus1" @blur="onBlur1" type="password" autocomplete="off"
                                    placeholder="Confirm new password" v-model="newPassword">
                                <span v-if="!showPassword" v-html="htmlSlashEye" @click="toggleShowPassword()"
                                    class="passwordText"></span>
                            </div>
                            <div class="eyeContainer">
                                <input v-if="showPassword1" class="inputs" :class="{ 'fuccussed': hasFocus }"
                                    @focus="onFocus" @blur="onBlur" type="password" autocomplete="off"
                                    placeholder="Confirm new password" v-model="confirmingNewPassword">
                                <span v-if="showPassword1" v-html="htmlEye" @click="toggleShowPassword1()"
                                    class="passwordText"></span>
                                <input v-if="!showPassword1" class="inputs" :class="{ 'fuccussed': hasFocus }"
                                    @focus="onFocus" @blur="onBlur" type="text" autocomplete="off"
                                    placeholder="Confirm new password" v-model="confirmingNewPassword">
                                <span v-if="!showPassword1" v-html="htmlSlashEye" @click="toggleShowPassword1()"
                                    class="passwordText"></span>
                            </div>
                            <ButtonSlot @click="confirmPassword()">Confirm password </ButtonSlot>
                        </form>
                    </EMDS>
                </div>
            </div>
        </div>
        <div v-if="!loginPage">
            <EMDS v-if="isFirstOnSignup">
                <form class="forms">
                    <HeaderSlot>Signup</HeaderSlot>
                    <ErrorSlot v-if="signupError">{{ signupError }}</ErrorSlot>
                    <input class="inputs" :class="{ 'fuccussed': hasFocus1 }" @focus="onFocus1" @blur="onBlur1" type="text"
                        name="name" v-model="name" placeholder="Full Name" />
                    <input class="inputs" :class="{ 'fuccussed': hasFocus2 }" @focus="onFocus2" @blur="onBlur2" type="text"
                        name="email" v-model="email" placeholder="email" />
                    <div class="eyeContainer">
                        <input v-if="!showPassword1" class="inputs" :class="{ 'fuccussed': hasFocus }" @focus="onFocus"
                            @blur="onBlur" type="password" autocomplete="off" placeholder="Confirm new password"
                            v-model="password">
                        <span v-if="!showPassword1" v-html="htmlEye" @click="toggleShowPassword1()"
                            class="passwordText"></span>
                        <input v-if="showPassword1" class="inputs" :class="{ 'fuccussed': hasFocus }" @focus="onFocus"
                            @blur="onBlur" type="text" autocomplete="off" placeholder="Confirm new password"
                            v-model="password">
                        <span v-if="showPassword1" v-html="htmlSlashEye" @click="toggleShowPassword1()"
                            class="passwordText"></span>
                    </div>
                    <ButtonSlot @click="formValidator()">Next </ButtonSlot>
                </form>
                <LinksSlot @click="loginPage = !loginPage">Have an account login here</LinksSlot>
            </EMDS>
            <EMDS v-else>
                <BackSlot @click="telToSignup()"></BackSlot>
                <form class="forms">
                    <ErrorSlot v-if="phoneError">{{ phoneError }}</ErrorSlot>
                    <HeaderSlot>Enter Your Phone Number</HeaderSlot>
                    <input id="phone" :class="{ 'fuccussed': hasFocus }" @focus="onFocus" @blur="onBlur" class="inputs"
                        type="tel" placeholder="+251947053537" v-model="tel">
                    <ButtonSlot @click="handleSignup()">Register</ButtonSlot>
                </form>
            </EMDS>
        </div>
    </ContainerSlot>
</template>

<script>
import AppHeader from "./AppHeader/AppHeader.vue";
import ThemeMixins from "./_mixins/ThemeMixin.vue";
import cookieMixin from "./_mixins/CookieMixin.vue";
import loginMixin from "./_mixins/LoginMixin.vue";
import ButtonSlot from "./Slots/LoginSlots/ButtonSlot.vue";
import LinksSlot from "./Slots/LoginSlots/LinksSlot.vue";
import ContainerSlot from "./Slots/LoginSlots/ContainerSlot.vue"
import EMDS from "./Slots/LoginSlots/EachMainDivSlot.vue";
import HeaderSlot from "./Slots/LoginSlots/HeaderSlot.vue"
import ErrorSlot from "./Slots/LoginSlots/ErrorSlot.vue"
import BackSlot from "./Slots/LoginSlots/BackSlot.vue";
export default {
    name: "AppLogin",
    components: {
        AppHeader,
        ButtonSlot,
        LinksSlot,
        ContainerSlot,
        EMDS,
        HeaderSlot,
        ErrorSlot,
        BackSlot,
    },

    inject: ["DORM_API"],
    emits: ["loggout"],
    mixins: [ThemeMixins, cookieMixin, loginMixin],

    methods: {
        onFocus() {
            this.hasFocus = true;
        },
        onBlur() {
            this.hasFocus = false;
        },
        onFocus1() {
            this.hasFocus1 = true;
        },
        onBlur1() {
            this.hasFocus1 = false;
        },
        onFocus2() {
            this.hasFocus2 = true;
        },
        onBlur2() {
            this.hasFocus2 = false;
        },
        toggleShowPassword() {
            this.showPassword = !this.showPassword
        },
        toggleShowPassword1() {
            this.showPassword1 = !this.showPassword1
        }
    }
};

</script>

<style scoped src="@/css/darkModeToggle.css"></style>

<style scoped>
.inputs {
    display: flex;
    font-size: 20px;
    background-color: white;
    color: var(--textColor);
    border-radius: 5px;
    border: 1.5px solid rgb(226, 226, 226);
    padding: 10px;
    outline: none;
    padding-right: 30px;
}

.forms {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    margin: 10px;
}

.eyeContainer {
    position: relative;

}

.fuccussed {
    border: 1.5px solid var(--colorizedTextColor);
}

.passwordText {
    display: flex;
    position: absolute;
    width: 25px;
    align-items: flex-end;
    right: 2%;
    top: 26%;
    cursor: pointer;
}
</style>