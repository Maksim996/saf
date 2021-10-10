<template>
  <div class="info">
    <Logo width="18rem" height="6rem" />
    <p class="text-white mt-4">
      {{nameApp}}
    </p>
  </div>
</template>

<script>
import Logo from "@/components/base/Logo";
import {NAME_APP} from "@/utils/constants";

export default {
  name: "Info",
  data() {
    return {
      nameApp: NAME_APP
    }
  },
  components: {
    Logo
  }
}
</script>

<style scoped lang="scss">
  .info {
    flex: 1 0 50%;
    background: $base-bg;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>
