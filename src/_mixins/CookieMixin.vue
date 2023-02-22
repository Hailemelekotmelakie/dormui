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
            localStorage.setItem('z_c_c_v', 0)
            this.isLogin = 0
        },
    },
    mounted() {
        console.log(this.isLogin)
        let cookie = {};
        document.cookie.split(";").forEach(function (el) {
            let [k, v] = el.split("=");
            cookie[k.trim()] = v;
        });
        console.log(cookie["DORM"], " COOKIES OF DORM")
        if (cookie["DORM"]) {
            localStorage.setItem('z_c_c_v', 1)
            this.isLogin = 1
        }
        if (cookie["DORM"] == undefined) {
            localStorage.setItem('z_c_c_v', 0)
            this.isLogin = 0
        }
        console.log(this.isLogin)
    },
};
</script>
