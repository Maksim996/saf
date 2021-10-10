<template>
  <b-container>
    <Cards :menu="getMenu()"/>
  </b-container>
</template>

<script>
import {MENU} from "@/utils/menu-constants";
import Cards from "@/components/base/Cards";

export default {
  name: "HomePage",
  components: {
    Cards
  },
  methods: {
    getMenu() {
      const menu = MENU.find((item) => item.route === this.$router.currentRoute.name);
      if (menu !== null || menu !== undefined){
        const {submenu} = menu;
        return submenu;
      }
    }
  }


  }
</script>

<style scoped>
  a:hover {
    text-decoration: none;
  }
  .card {
    overflow:hidden;
  }
  .card .card-body{
    transition: all .3s ease-in-out;
  }
  a:hover .card .card-body {
    transform: scale(1.1);
    transition: all .3s ease-in-out;
  }
</style>
