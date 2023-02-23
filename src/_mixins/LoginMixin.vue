<script>
import Axios from "axios";

export default {
    methods: {
        loggout: function () {
            this.logout()
        },
        handleLogin: function () {
            Axios.defaults.withCredentials = true;
            Axios.post(this.DORM_API + "/log", {
                email: this.email,
                password: this.password,
            })
                .then((result) => {
                    if (this.email && this.password) {
                        if (result.status === 200) {
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
                Axios.post(this.DORM_API + `/log/emailValidation`, { email: this.lostEmail }).then((result) => {
                    if (result) {
                        if (result.data.message == "error") {
                            this.emailNotFound = true
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
        },

        comfirmToForget: function () {
            this.isFirstReset = true
        },
        confirmCode: function () {
            this.confirmCodeNumber = false
            if (this.resetCredential) {
                Axios.get(this.DORM_API + `/user/${this.id}/${this.resetCredential}`).then((result) => {
                    console.log(result)
                    this.confirmCodeNumber = false
                    this.isPasswordChanging = false
                })
            } else {
                this.confirmCodeNumber = true
            }
        },
        passwordToCode: function () {
            this.isPasswordChanging = true;
        },
        confirmPassword: function () {
            if (this.newPassword === this.confirmingNewPassword && this.newPassword.length >= 4) {
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
                // } else {
                //     this.isFirstOnLogin = true
                // }
            } else {
                this.isFirstOnLogin = false

            }
        },

        formValidator: function () {
            if (this.name && this.email && this.password) {
                this.signupToTel()
            } else {
                console.log("Fill filds")
            }
        },
    },
}
</script>