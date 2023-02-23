<script>
export default {
    methods: {
        logout: function () {
            document.cookie = "DORM =HI ; Max-Age=0";
            this.$router.push("/");
            // localStorage.setItem('z_c_c_v', false)
            // this.makeLogin = false
        },
        login: function () {
            this.$router.push("/");
            // localStorage.setItem('z_c_c_v', true)
            // this.makeLogin = true
            this.authResponse = undefined;
            // console.log(this.$cookies.get("DORM"))
        },
    },
    mounted() {
        // console.log(this.$cookies.get("DORM"), "nu DORM ll")
        // console.log(localStorage.getItem('z_c_c_v'), "z_c_c_v")
        // if (this.$cookies.get("DORM")) {
        //     console.log(this.$cookies.get("DORM"), " inner")
        //     localStorage.setItem('z_c_c_v', true)
        //     this.makeLogin = true
        //     console.log(this.makeLogin, "mak lo in ")
        // }
        // if (this.$cookies.get("DORM") == null) {
        //     localStorage.setItem('z_c_c_v', false)
        //     this.makeLogin = false
        //     console.log(this.$cookies.get("DORM"), "dorm iin null")
        //     console.log(this.makeLogin, "nu ll")
        // }
    },
};
</script>
