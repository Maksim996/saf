<template>
  <b-container>
    <b-row class="justify-content-md-center">
      <b-col lg="8">
        <b-card
          header="Змінити пароль"
          class="m-auto"
          border-variant="primary"
          header-bg-variant="primary"
          header-text-variant="white"
        >
          <validation-observer ref="observer" v-slot="{ handleSubmit }">
            <b-form ref="form" @submit.stop.prevent="handleSubmit(onSubmit)">
              <validation-provider
                name="пароль"
                :rules="{ required: true}"
                v-slot="validationContext"
              >
                <b-form-group id="password-group"
                              label="Пароль:"
                              label-for="password"
                >
                  <b-form-input
                    id="password"
                    v-model="password"
                    type="password"
                    placeholder="Введіть пароль"
                    :state="GlobalGetValidationState(validationContext)"
                  />
                  <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
              <validation-provider
                name="новий пароль"
                :rules="{ required: true, min: 8}"
                v-slot="validationContext"
                :vid="newPasswordConfirmation"
              >
                <b-form-group id="new-password-group"
                              label="Новий пароль:"
                              label-for="new-password"
                >
                  <b-form-input
                    id="new-password"
                    v-model="newPassword"
                    type="password"
                    placeholder="Введіть пароль"
                    :state="GlobalGetValidationState(validationContext)"
                  />
                  <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
              <validation-provider
                name="повторіть новий пароль"
                :rules="{ required: true, min: 8, confirmed: newPassword}"
                v-slot="validationContext"
              >
                <b-form-group id="new-password-confirmation-group"
                              label="Повторіть новий пароль:"
                              label-for="new-password-confirmation"
                >
                  <b-form-input
                    id="new-password-confirmation"
                    v-model="newPasswordConfirmation"
                    type="password"
                    placeholder="Введіть пароль"
                    :state="GlobalGetValidationState(validationContext)"
                  />
                  <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>

              <b-button type="submit" variant="primary">Зберегти</b-button>
              <!--             <b-button type="button" @click="onSubmit" variant="primary">Зберегти</b-button>-->

            </b-form>
          </validation-observer>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {API} from "@/api/constants-api";

export default {

  name: "ResetPasswordPage",
  data() {
    return {
      password: '',
      newPassword: '',
      newPasswordConfirmation: '',
    }
  },
  methods: {
    onSubmit() {
      console.log(API.UPDATE_PASSWORD)
    }
  }
}
</script>

<style scoped>

</style>
