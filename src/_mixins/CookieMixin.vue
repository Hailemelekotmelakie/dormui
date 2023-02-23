<script>
export default {
    methods: {
        logout: function () {
            document.cookie = "DORM =HI ; Max-Age=0";
            this.$router.push("/");
            localStorage.setItem('z_c_c_v', 0)
        },
        login: function () {
            this.$router.push("/");
            localStorage.setItem('z_c_c_v', 1)
            this.authResponse = undefined;
            window.location.reload()
        },
    },
    mounted() {
        console.log(this.$cookies.get('DORM'))
        console.log(this.$cookies.get('DORM'), "dorm")
        console.log(this.cookies, "cookie")
    },
    computed: {
        mannon() {
            return localStorage.getItem('z_c_c_v')
        }
    },
};
</script>
