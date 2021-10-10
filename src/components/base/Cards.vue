<template>
  <div class="row row-cols-1 row-cols-md-4">
    <router-link v-for="item in menu" class="col mb-4" :to="{name: item.route}">
      <div class="card text-center">
        <div class="card-body">
          <b-icon :icon="item.icon" font-scale="7.5" class="mb-3"></b-icon>
          <h5 class="card-title">{{item.title}}</h5>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
name: "Cards",
  props: {
    menu: {
      default: {}
    }
  },
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
