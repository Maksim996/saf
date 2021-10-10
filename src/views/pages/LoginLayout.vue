<template>
  <div class="layout">
    <Info/>
    <Form/>
  </div>
</template>

<script>
import Form from "@/components/Login/Form";
import Info from "@/components/Login/Info";

export default {
  name: "Layout",
  components: {
    Form,
    Info
  },

}
</script>

<style scoped>
  .layout {
    display: flex;
    align-items: stretch;
    height: 100vh;
    flex-wrap: wrap;
  }
</style>
