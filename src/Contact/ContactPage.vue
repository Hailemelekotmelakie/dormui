<template>
  <h2>para contact</h2>
  <p>{{ data }}</p>
</template>
<script>
import Axios from 'axios';
export default {
  inject: ["DORM_API"],
  data() {
    return {
      data: null
    }
  },
  mounted() {
    Axios.get(this.DORM_API + '/user').then((res) => {
      this.data = res.data
    })

  }
}
</script>