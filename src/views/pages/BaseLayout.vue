<template>
  <div>
    <Navbar></Navbar>
    <div class="mt-3">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/base/Navbar";

  export default {
    name: "BaseLayout",
    components: {
      Navbar
    }
  }
</script>

<style scoped lang="scss">

</style>
