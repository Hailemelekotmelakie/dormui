<script>
import VueCookies from 'vue-cookies'

export default {

    data() {
        return {
            LoggedIn: 0
        };
    },
    methods: {
        logout: function () {
            document.cookie = "DORM =HI ; Max-Age=-1";
            this.$router.push("/");
            // localStorage.setItem('z_c_c_v', 1)
            this.LoggedIn = 0
        },
    },
    mounted() {
        // this.LoggedIn = localStorage.getItem('z_c_c_v')

        if (VueCookies.get("DORM")) {
            // localStorage.setItem('z_c_c_v', 1)
            this.LoggedIn = 1
        }
        if (VueCookies.get("DORM") == null) {
            // localStorage.setItem('z_c_c_v', 0)
            this.LoggedIn = 0
        }
        // console.log(this.LoggedIn)
    },
};
</script>
