<template>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand href="#">
      <Logo width="100px"/>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <template v-for="(item, key) in menu">
          <b-nav-item :to="{name: item.route}"
                      :key="key"
                      exact-active-class="active"
          >
            {{ item.title }}
          </b-nav-item>
        </template>
        <b-nav-item @click="logout">
          Вийти
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import Logo from "@/components/base/Logo";
import {MENU} from "@/utils/menu-constants";
import { mapActions } from "vuex";
export default {

  name: "Navbar",
  components: {
    Logo
  },
  data() {
    return {
      menu: MENU,
    }
  },
  methods: {
    ...mapActions("auth", ["sendLogoutRequest"]),
    logout() {
      this.sendLogoutRequest();
      this.$router.push({ name: "Login" });
    }
  }
}
</script>

<style scoped>
/*.navbar-dark .navbar-nav .nav-link.router-link-exact-active {*/
/*  color: red;*/
/*}*/
</style>
