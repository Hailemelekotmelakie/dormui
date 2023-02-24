<script>
import Axios from "axios";

export default {
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
                            </svg>`,
            email: null,
            password: null,
            name: null,
            tel: null,
            signupError: null,
            phoneError: null,
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
            this.phoneError = null
            if (this.tel && this.email && this.password) {
                if (this.tel.length >= 9) {
                    Axios.post(this.DORM_API + '/user', {
                        fullname: this.name,
                        email: this.email,
                        password: this.password,
                        tel: this.tel
                    }).then((result) => {
                        if (result.data.message == "success") {
                            this.handleLogin();
                        } else {
                            this.phoneError = result.data.message
                        }
                    }).catch((e) => console.log(e))
                } else {
                    this.phoneError = "Invalid phone number"
                }
            }
            else {
                this.phoneError = "The field is required"
            }
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