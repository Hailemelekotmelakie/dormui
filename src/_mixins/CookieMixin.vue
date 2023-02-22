<script>
import VueCookies from 'vue-cookies'

export default {

    data() {
        return {
            isLogin: 1
        };
    },
    methods: {
        logout: function () {
            document.cookie = "DORM =HI ; Max-Age=-1";
            this.$router.push("/");
            localStorage.setItem('z_c_c_v', 0)
            this.isLogin = 0
        },
    },
    mounted() {
        this.isLogin = localStorage.getItem('z_c_c_v')

        if (VueCookies.get("DORM")) {
            localStorage.setItem('z_c_c_v', 1)
            this.isLogin = 1
        }
        if (VueCookies.get("DORM") == null) {
            localStorage.setItem('z_c_c_v', 0)
            this.isLogin = 0
        }
        console.log(this.isLogin)
    },
};
</script>
