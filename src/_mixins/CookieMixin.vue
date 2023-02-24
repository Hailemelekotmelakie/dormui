<script>
export default {
    methods: {
        logout: function () {
            document.cookie = "DORM =HI ; Max-Age=0";
            this.$router.push("/");
            localStorage.setItem('z_c_c_v', 0)
            window.location.reload()
        },
        login: function () {
            this.$router.push("/");
            localStorage.setItem('z_c_c_v', 1)
            this.authResponse = null;
            window.location.reload()
        },
    },
    computed: {
        isLoginBefore() {
            return localStorage.getItem('z_c_c_v')
        }
    },
};
</script>
