<template>
    <div v-if="makeLogin">
        <AppHeader @loggout="this.$emit('loggout')" />
    </div>
    <div v-else>
        <div v-if="loginPage">
            <div v-if="isFirstOnLogin">
                <h2>Login</h2>
                <h4 v-if="authResponse"> {{ authResponse }}</h4>
                <input type="text" name="email" v-model="email" placeholder="email" /> <br />
                <input type="text" v-model="password" placeholder="password" /><br />
                <input @click="handleLogin()" type="button" value="login" />
                <div @click="loginToForgotPassword()">Forgot password ?</div>
                <h5>Have not account<span @click="loginPage = !loginPage">Create a new</span></h5>
            </div>
            <div v-else>
                <div v-if="isFirstReset">
                    <div @click="forgotPasswordToLogin()">Back to login</div>
                    <div> forgot password</div>
                    <input type="email" placeholder="Put email" v-model="lostEmail">
                    <input type="button" @click="sentRestCode()" value="Send reset code" />
                </div>
                <div v-else>
                    <div v-if="isPasswordChanging">
                        <div @click="comfirmToForget()">Back to forget password</div>
                        <div>confirm Code</div>
                        <input type="text" placeholder="code" v-model="code">
                        <input type="button" @click="confirmCode()" value="Next" />
                    </div>
                    <div v-else>
                        <div @click="passwordToCode()">Back to reset</div>
                        <div>confirm Code</div>
                        <input type="text" placeholder="password" v-model="newPassword">
                        <input type="text" placeholder="password" v-model="confirmingPassword">
                        <input type="button" @click="confirmPassword()" value="Confirm password" />
                    </div>
                </div>
            </div>
        </div>
        <div v-if="!loginPage">
            <div v-if="isFirstOnSignup">
                <h1>signup</h1>
                <h4 v-if="authResponse">{{ authResponse }}</h4>
                <input type="text" name="name" v-model="name" placeholder="Full Name" /> <br />
                <input type="text" name="email" v-model="email" placeholder="email" /> <br />
                <input type="text" v-model="password" placeholder="password" /><br />
                <input @click="formValidator()" type="button" value="Next" />
                <h5>Have an account <span @click="loginPage = !loginPage">Login here</span></h5>
            </div>
            <div v-else>
                <h4 @click="telToSignup()">back</h4>
                <input type="tel" placeholder="+251947053537" v-model="tel">
                <input type="submit" @click="handleSignup()" value="Register">
            </div>
        </div>
    </div>
</template>

<script>
import AppHeader from "./AppHeader/AppHeader.vue";
import Axios from "axios";

import ThemeMixins from "./_mixins/ThemeMixin.vue";
import cookieMixin from "./_mixins/CookieMixin.vue";


export default {
    name: "App",
    components: {
        AppHeader,
    },
    inject: ["DORM_API"],
    emits: ["loggout"],
    mixins: [ThemeMixins, cookieMixin],
    data() {
        return {
            email: null,
            password: null,
            name: null,
            tel: null,
            code: null,

            newPassword: null,
            confirmingPassword: null,

            lostEmail: null,

            authResponse: undefined,
            loginPage: true,
            isFirstOnSignup: true,
            isFirstOnLogin: true,
            isFirstReset: true,
            isPasswordChanging: true,

            makeLogin: true,


            getPost: null


        };
    },
    methods: {
        handleLogin: function () {
            Axios.defaults.withCredentials = true;
            Axios.post(this.DORM_API + "/log", {
                email: this.email,
                password: this.password,
            })
                .then((result) => {
                    if (this.email && this.password) {
                        if (result.status === 200) {
                            console.log("Loggd in ");
                            if (result.data === "success") {
                                this.$router.push({
                                    path: "/"
                                });
                                this.login()
                            } else {
                                this.authResponse = result.data;
                            }
                        } else {
                            this.authResponse = "Error";
                        }
                    } else {
                        this.authResponse = "Fill below";
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        handleSignup: function () {
            Axios.post(this.DORM_API + '/user', {
                fullname: this.name,
                email: this.email,
                password: this.password,
                tel: this.tel
            }).then(() => {
                console.log(this.name, this.password)
                // this.handleLogin();
            }).catch((e) => console.log(e))
        },
        signupToTel: function () {
            this.isFirstOnSignup = false;
        },
        telToSignup: function () {
            this.isFirstOnSignup = true;
        },
        loginToForgotPassword: function () {
            this.isFirstOnLogin = false
        },
        forgotPasswordToLogin: function () {
            this.isFirstOnLogin = true
        },
        sentRestCode: function () {
            if (this.lostEmail) {
                this.isFirstReset = false
            }
        },
        comfirmToForget: function () {
            this.isFirstReset = true
        },
        confirmCode: function () {
            this.isPasswordChanging = false
        },
        passwordToCode: function () {
            this.isPasswordChanging = true;
        },
        confirmPassword: function () {
            if (this.newPassword == this.confirmingPassword) {
                this.isFirstOnLogin = true
            }
        },
        cleanTheCatch: function () {
            this.email = null,
                this.password = null,
                this.name = null
        },
        formValidator: function () {
            if (this.name && this.email && this.password) {
                this.signupToTel()
            } else {
                console.log("Fill filds")
            }
        },
    }
};
</script>