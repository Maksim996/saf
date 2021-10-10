<template>
 <b-container>
   <Cards :menu="getMenu()" />
 </b-container>
</template>

<script>
import Cards from "@/components/base/Cards";
import {MENU} from "@/utils/menu-constants";
export default {
  name: "SettingPage",
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

</style>
