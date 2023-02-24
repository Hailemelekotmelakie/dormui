<script>
import Axios from "axios";

export default {
    data() {
        return {
            email: null,
            password: null,
            name: null,
            tel: null,
            signupError: null,
            resetCredential: null,
            newPassword: null,
            confirmingNewPassword: null,
            confirmNewPassword: null,
            confirmCodeNumber: null,
            lostEmail: null,
            emailNotFound: null,
            id: null,
            loginError: null,
            loginPage: true,
            isFirstOnSignup: true,
            isFirstOnLogin: true,
            isFirstReset: true,
            isPasswordChanging: true,
            getPost: null
        };
    },
    methods: {
        loggout: function () {
            this.logout()
        },
        handleLogin: function () {
            if (this.email && this.password) {
                if (this.email.includes('@') && this.email.includes('.') && this.email.indexOf('@') + 1 < this.email.indexOf('.') && this.email.indexOf('@') > 1) {
                    if (this.password.length >= 4) {
                        Axios.defaults.withCredentials = true;
                        Axios.post(this.DORM_API + "/log", {
                            email: this.email,
                            password: this.password,
                        })
                            .then((result) => {
                                if (result.status === 200) {
                                    if (result.data === "success") {
                                        this.$router.push({
                                            path: "/"
                                        });
                                        this.login()
                                    } else {
                                        this.loginError = result.data;
                                    }
                                } else {
                                    this.loginError = "Error";
                                }
                            })
                            .catch(() => {
                                this.loginError = "Went wrong"
                            });
                    } else {
                        this.loginError = "Password is not less than 4 digit"
                    }
                } else {
                    this.loginError = "Invalid email"
                }
            }
            else {
                this.loginError = "All fields are required"
            }
        },
        handleSignup: function () {
            Axios.post(this.DORM_API + '/user', {
                fullname: this.name,
                email: this.email,
                password: this.password,
                tel: this.tel
            }).then(() => {
                console.log(this.name, this.password)
                this.handleLogin();
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
            this.emailNotFound = false;
            if (this.lostEmail) {
                if (this.lostEmail.includes('@') && this.lostEmail.includes('.') && this.lostEmail.indexOf('@') + 1 < this.lostEmail.indexOf('.') && this.lostEmail.indexOf('@') > 1) {
                    Axios.post(this.DORM_API + `/log/emailValidation`, { email: this.lostEmail }).then((result) => {
                        if (result) {
                            if (result.data.message == "error") {
                                this.emailNotFound = "Email not found"
                            } else {
                                this.id = result.data.message
                                this.emailNotFound = false
                                Axios.put(this.DORM_API + `/user/${this.id}`,
                                    { resetCredentialMaker: 'Reset' }).then((result) => {
                                        if (result.status == 200) {
                                            this.isFirstReset = false
                                        }
                                    })
                            }
                        } else {
                            this.emailNotFound = true;
                        }
                    }).catch(() => {
                    })
                }
                else {
                    this.emailNotFound = "Invalide email"

                }
            } else {
                this.emailNotFound = "Email is required"
            }
        },

        comfirmToForget: function () {
            this.isFirstReset = true
            this.confirmCodeNumber = null
        },
        confirmCode: function () {
            this.confirmCodeNumber = false
            if (this.resetCredential) {
                Axios.get(this.DORM_API + `/user/${this.id}/${this.resetCredential}`).then((result) => {
                    if (result.data.message == "success") {
                        this.confirmCodeNumber = null
                        this.isPasswordChanging = false
                    } else {
                        this.confirmCodeNumber = result.data.message;
                    }
                })
            } else {
                this.confirmCodeNumber = "Code field is required"
            }
        },
        passwordToCode: function () {
            this.isPasswordChanging = true;
        },
        confirmPassword: function () {
            this.confirmNewPassword = false
            if (this.newPassword && this.newPassword?.length >= 4) {
                if (this.newPassword === this.confirmingNewPassword) {
                    Axios.put(this.DORM_API + `/user/newPassword/${this.id}`,
                        {
                            newPassword: this.newPassword,
                            confirmingNewPassword: this.confirmingNewPassword
                        }).then((result) => {
                            if (result.data) {
                                this.email = this.lostEmail
                                this.password = this.confirmingNewPassword
                                this.handleLogin();
                            }
                        })
                } else {
                    this.isFirstOnLogin = false
                    this.confirmNewPassword = "Password and confirm password not match"
                }
            } else {
                this.isFirstOnLogin = false
                this.confirmNewPassword = "Fields are required and not less than 4 digit"
            }
        },

        formValidator: function () {
            this.signupError = null
            if (this.name && this.email && this.password) {
                if (this.password.length >= 4) {
                    if (this.email.includes('@') && this.email.includes('.') && this.email.indexOf('@') + 1 < this.email.indexOf('.') && this.email.indexOf('@') > 1) {
                        this.signupToTel()
                    } else {
                        this.signupError = "Invalid email adress"
                    }
                } else {
                    this.signupError = "Password must not less than 4 digit"
                }
            } else {
                this.signupError = "All are required"
            }
        },
    },
}
</script>