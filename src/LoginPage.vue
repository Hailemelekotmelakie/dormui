<template>
    <div v-if="mannon == 1">
        <AppHeader @loggout="loggout()" />
    </div>
    <div v-else>
        <div v-if="loginPage">
            <div v-if="isFirstOnLogin">
                <h2>Login</h2>
                <h4 v-if="authResponse"> {{ authResponse }}</h4>
                <input type="text" name="email" v-model="email" placeholder="email" />{{ email }} <br />
                <input type="text" v-model="password" placeholder="password" />{{ password }}<br />
                <input @click="handleLogin()" type="button" value="login" />
                <div @click="loginToForgotPassword()">Forgot password ?</div>
                <h5>Have not account<span @click="loginPage = !loginPage">Create a new</span></h5>
            </div>
            <div v-else>
                <div v-if="isFirstReset">
                    <div @click="forgotPasswordToLogin()">Back to login</div>
                    <div> forgot password</div>
                    <p v-if="emailNotFound">Email not found</p>
                    <input type="email" placeholder="Put email" v-model="lostEmail">{{ lostEmail }}
                    <input type="button" @click="sentRestCode()" value="Send reset code" />
                </div>
                <div v-else>
                    <div v-if="isPasswordChanging">
                        <div @click="comfirmToForget()">Back to forget password</div>
                        <div>confirm Code</div>
                        <p v-if="confirmCodeNumber">Incorrect code</p>
                        <input type="text" placeholder="code" v-model="resetCredential">{{ resetCredential }}
                        <input type="button" @click="confirmCode()" value="Next" />
                    </div>
                    <div v-else>
                        <div @click="passwordToCode()">Back to reset</div>
                        <div>confirm Code</div>
                        <input type="text" placeholder="password" v-model="newPassword">{{ newPassword }}
                        <input type="text" placeholder="password" v-model="confirmingNewPassword">
                        <br />
                        {{ confirmingNewPassword }}
                        <input type="button" @click="confirmPassword()" value="Confirm password" />
                    </div>
                </div>
            </div>
        </div>
        <div v-if="!loginPage">
            <div v-if="isFirstOnSignup">
                <h1>signup</h1>
                <h4 v-if="authResponse">{{ authResponse }}</h4>
                <input type="text" name="name" v-model="name" placeholder="Full Name" /> {{ name }}<br />
                <input type="text" name="email" v-model="email" placeholder="email" /> {{ email }} <br />
                <input type="text" v-model="password" placeholder="password" /> {{ password }}<br />
                <input @click="formValidator()" type="button" value="Next" />
                <h5>Have an account <span @click="loginPage = !loginPage">Login here</span></h5>
            </div>
            <div v-else>
                <h4 @click="telToSignup()">back</h4>
                <input type="tel" placeholder="+251947053537" v-model="tel">{{ tel }}
                <input type="submit" @click="handleSignup()" value="Register">
            </div>
        </div>
    </div>
</template>

<script>
import AppHeader from "./AppHeader/AppHeader.vue";
import ThemeMixins from "./_mixins/ThemeMixin.vue";
import cookieMixin from "./_mixins/CookieMixin.vue";
import loginMixin from "./_mixins/LoginMixin.vue";


export default {
    name: "App",
    components: {
        AppHeader,
    },
    inject: ["DORM_API"],
    emits: ["loggout"],
    mixins: [ThemeMixins, cookieMixin, loginMixin],
    data() {
        return {
            email: null,
            password: null,
            name: null,
            tel: null,
            resetCredential: null,

            newPassword: null,
            confirmingNewPassword: null,
            confirmCodeNumber: null,
            lostEmail: null,
            emailNotFound: null,
            id: null,
            authResponse: undefined,
            loginPage: true,
            isFirstOnSignup: true,
            isFirstOnLogin: true,
            isFirstReset: true,
            isPasswordChanging: true,
            getPost: null
        };
    },
};
</script>