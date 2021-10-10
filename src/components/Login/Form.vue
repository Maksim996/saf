<template>
  <div class="form">
    <b-card
      header="Вхід"
      class="m-auto"
      border-variant="primary"
      header-bg-variant="primary"
      header-text-variant="white"
    >
      <b-form @submit="onSubmit">
        <b-form-group
          id="email-group"
          label="Електронна адреса:"
          label-for="email"
        >
          <b-form-input
            id="email"
            v-model="details.email"
            type="email"
            placeholder="Введіть електронну адресу"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="password-group" label="Пароль:" label-for="password">
          <b-form-input
            id="password"
            v-model="details.password"
            type="password"
            placeholder="Введіть пароль"
            required
          ></b-form-input>
        </b-form-group>

<!--        <b-button type="submit" variant="primary">Увійти</b-button>-->
        <b-button type="button" @click="onSubmit" variant="primary">Увійти</b-button>

      </b-form>
    </b-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Form",
  data() {
    return {
      details: {
        email: "admin@email.com",
        password: "password",
      }
    }
  },
  computed: {
    ...mapGetters(["errors"])
  },
  methods: {
    ...mapActions("auth", ["sendLoginRequest"]),
    onSubmit() {
      this.sendLoginRequest(this.details).then(() => {
        // this.$router.push({ name: "Home" });
        // this.$router.push('/');
      });
    },
  }
}
</script>

<style scoped>
.form {
  flex: 1 0 50%;
  display: flex;
}
.form form {
  min-width: 320px;
  max-width: 30rem;
}
@media screen and (max-width: 560px) {
  .form {
    flex: 0 0 100%;
  }
  .form form {
    width: 280px;
    min-width: auto;
  }
}
</style>
