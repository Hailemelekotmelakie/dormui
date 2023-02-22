<script>
export default {
    data() {
        return {
            isLogin: localStorage.getItem('z_c_c_v')
        };
    },
    methods: {
        logout: function () {
            document.cookie = "DORM =HI ; Max-Age=-1";
            this.$router.push("/");
            this.isLogin = 0
            localStorage.setItem('z_c_c_v', 0)
        },
    },
    mounted() {
        console.log(this.isLogin)
        // check cookies
        let cookie = {};
        document.cookie.split(";").forEach(function (el) {
            let [k, v] = el.split("=");
            cookie[k.trim()] = v;
        });
        if (cookie["DORM"]) {
            this.isLogin = 1;
            localStorage.setItem('z_c_c_v', 1)
        } else {
            this.isLogin = 0;
            localStorage.setItem('z_c_c_v', 0)

        }
        console.log(this.isLogin)
        // Authorizing pages
        // if (!this.isLogin) {
        //     this.logout();
        // }
    },
};
</script>
