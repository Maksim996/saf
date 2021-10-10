<template>
  <div class="logo" :style="{width}">
    <img :src="logo" alt="logo">
  </div>
</template>

<script>
import {LOGO} from "../../utils/constants";

export default {
  name: "Logo",
  data() {
    return {
      logo: LOGO,
    }
  },
  props: {
    width: {
      type: String,
      default: '40px'
    }
  }
}
</script>

<style scoped lang="scss">
  .logo {
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
