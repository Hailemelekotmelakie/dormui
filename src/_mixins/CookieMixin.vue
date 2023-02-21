<script>
export default {
    data() {
        return {
            isLogin: localStorage.getItem('dCookies')
        };
    },
    methods: {
        logout: function () {
            document.cookie = "DORM =HI ; Max-Age=-1";
            this.$router.push("/");
            this.isLogin = 0
            localStorage.setItem('dCookies', 0)
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
        console.log(cookie["DORM"])
        if (cookie["DORM"]) {
            localStorage.setItem('dCookies', 1)
        } else {
            localStorage.setItem('dCookies', 0)
        }
        console.log(this.isLogin)
    },
};
</script>
