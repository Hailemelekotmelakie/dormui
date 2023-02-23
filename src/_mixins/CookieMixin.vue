<script>
import VueCookies from 'vue-cookies'

export default {
    methods: {
        logout: function () {
            document.cookie = "DORM =HI ; Max-Age=0";
            this.$router.push("/");
            localStorage.setItem('z_c_c_v', false)
            this.makeLogin = false
        },
        login: function () {
            this.$router.push("/");
            localStorage.setItem('z_c_c_v', true)
            this.makeLogin = true
            this.authResponse = undefined;
            console.log(VueCookies.get("DORM"), "login")
        },
    },
    mounted() {
        console.log(VueCookies.get("DORM"), "nu DORM ll")
        console.log(localStorage.getItem('z_c_c_v'), "z_c_c_v")
        if (VueCookies.get("DORM")) {
            console.log(VueCookies.get("DORM"), " inner")
            localStorage.setItem('z_c_c_v', true)
            this.makeLogin = true
            console.log(this.makeLogin, "mak lo in ")

        }
        if (VueCookies.get("DORM") == null) {
            localStorage.setItem('z_c_c_v', false)
            this.makeLogin = false
            console.log(VueCookies.get("DORM"), "dorm iin null")
            console.log(this.makeLogin, "nu ll")
        }

    },
};
</script>
