<template>
    <div v-if="isLoginBefore == 1">
        <AppHeader @loggout="loggout()" />
    </div>
    <ContainerSlot v-else>
        <div class="OThemeCheckboxMode">
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
                    <LinksSlot @click="forgotPasswordToLogin()">←</LinksSlot>
                    <form class="forms">
                        <HeaderSlot>Forgot Password</HeaderSlot>
                        <ErrorSlot v-if="emailNotFound">{{ emailNotFound }}</ErrorSlot>
                        <input class="inputs" type="email" placeholder="Put email" v-model="lostEmail">
                        <ButtonSlot @click="sentRestCode()">Send code</ButtonSlot>
                    </form>
                </EMDS>
                <div v-else>
                    <EMDS v-if="isPasswordChanging">
                        <LinksSlot @click="comfirmToForget()">Back</LinksSlot>
                        <form class="forms">
                            <HeaderSlot>Confirm Verification Code</HeaderSlot>
                            <ErrorSlot v-if="confirmCodeNumber">{{ confirmCodeNumber }}</ErrorSlot>
                            <input class="inputs" type="text" placeholder="code" v-model="resetCredential">
                            <ButtonSlot @click="confirmCode()">Next</ButtonSlot>
                        </form>
                    </EMDS>
                    <EMDS v-else>
                        <LinksSlot @click="passwordToCode()">Back</LinksSlot>
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
                <LinksSlot @click="telToSignup()">Back</LinksSlot>
                <form class="forms">
                    <HeaderSlot> Enter Your Phone Number</HeaderSlot>
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

    },

    inject: ["DORM_API"],
    emits: ["loggout"],
    mixins: [ThemeMixins, cookieMixin, loginMixin],
    data() {
        return {
            hasFocus: false,
            hasFocus1: false,
            hasFocus2: false,
            showPassword: false,
            showPassword1: false,
            htmlEye: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g>
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                </g>
                            </svg>`,
            htmlSlashEye: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g>
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M17.882 19.297A10.949 10.949 0 0 1 12 21c-5.392 0-9.878-3.88-10.819-9a10.982 10.982 0 0 1 3.34-6.066L1.392 2.808l1.415-1.415 19.799 19.8-1.415 1.414-3.31-3.31zM5.935 7.35A8.965 8.965 0 0 0 3.223 12a9.005 9.005 0 0 0 13.201 5.838l-2.028-2.028A4.5 4.5 0 0 1 8.19 9.604L5.935 7.35zm6.979 6.978l-3.242-3.242a2.5 2.5 0 0 0 3.241 3.241zm7.893 2.264l-1.431-1.43A8.935 8.935 0 0 0 20.777 12 9.005 9.005 0 0 0 9.552 5.338L7.974 3.76C9.221 3.27 10.58 3 12 3c5.392 0 9.878 3.88 10.819 9a10.947 10.947 0 0 1-2.012 4.592zm-9.084-9.084a4.5 4.5 0 0 1 4.769 4.769l-4.77-4.769z" />
                                </g>
                            </svg>`
        };
    },
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
    border: 2px solid rgba(10, 185, 118, 0.156);
    padding: 10px;
    outline: none;
}


.forms {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;

}

.eyeContainer {
    position: relative;

}

.fuccussed {
    border: 2px solid var(--colorizedTextColor);
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