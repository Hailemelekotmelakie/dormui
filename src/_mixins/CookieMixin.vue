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
        },
    },
    computed: {
        mannon() {
            return localStorage.getItem('z_c_c_v')
        }
    },
};
</script>
