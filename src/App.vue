<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("auth", ["user"])
  },
  mounted() {
    if (localStorage.getItem("authToken")) {
      this.getUserData();
    }
  },
  methods: {
    ...mapActions("auth", ["getUserData"]),
  }
};
</script>

<style lang="scss">
  //@import "assets/scss/base";
</style>
