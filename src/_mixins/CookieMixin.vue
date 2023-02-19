<script>
export default {
  data() {
    return {
      isLogin: false,
    };
  },
  methods: {
    logout: function () {
      document.cookie = "DORM =HI ; Max-Age=-1";
      this.$router.push("/auth");
    },
  },
  mounted() {
    // check cookies
    let cookie = {};
    document.cookie.split(";").forEach(function (el) {
      let [k, v] = el.split("=");
      cookie[k.trim()] = v;
    });
    if (cookie["DORM"]) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
    // Authorizing pages
    if (!this.isLogin) {
      this.logout();
    }
  },
};
</script>
