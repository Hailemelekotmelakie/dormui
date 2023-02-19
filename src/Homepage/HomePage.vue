<template>
  <p>para Home</p>
  <div v-for="one in data" :key="one">{{ one.id }} {{ one.post }}{{ one.userId }}</div>
  <spinnerLoader />
</template>
<script>
import ThemeCheckbox from "../_mixins/ThemeMixin.vue";
import spinnerLoader from "../components/SpinnerLoad.vue";
import Axios from "axios";

export default {
  mixins: [ThemeCheckbox],
  inject: ["DORM_API"],
  components: {
    spinnerLoader,
  },
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    Axios.get(this.DORM_API + "/ip")
      .then((result) => {
        this.data = result.data;
      })
      .catch((e) => console.error(e));
  },
};
</script>
<style scoped src="@/css/darkModeToggle.css"></style>

<style></style>
