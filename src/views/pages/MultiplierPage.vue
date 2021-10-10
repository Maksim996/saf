<template>
  <b-container>
    <b-table hover :items="multipliers" :fields="fields" head-variant="primary">
      <template #cell(id)="row">
        <span v-html="symbol"></span><sub>{{ row.value }}</sub>
      </template>

      <template #cell(actions)="row">
        <b-button variant="outline-primary" size="sm" @click="edit(row.item)">
          <b-icon icon="pencil" font-scale="1"/>
        </b-button>
      </template>
    </b-table>

    <validation-observer ref="observer" v-slot="{ handleSubmit }">
      <form ref="form" @submit.stop.prevent="handleSubmit(onSubmit)">
        <b-modal v-model="editModal"
                 id="modal-prevent-closing"
                 centered
                 title="Редагування"
                 header-bg-variant="primary"
                 header-text-variant="light"
                 cancel-title="Закрити"
                 ok-title="Зберегти"
                 @ok.prevent="handleSubmit(onSubmit)"
                 @close="reset"
        >
          <p class="my-2">Змінити індекс <span v-html="symbol"></span><sub>{{ editItem.id }}</sub></p>
          <validation-provider
            name="індекс"
            :rules="{ required: true, min: 3}"
            v-slot="validationContext"
          >
            <b-form-group id="example-input-group-1" label="" label-for="example-input-1">
              <b-form-input
                v-mask="'#.##'"
                id="example-input-1"
                name="example-input-1"
                v-model="editItem.value"
                :state="GlobalGetValidationState(validationContext)"
                aria-describedby="input-1-live-feedback"
              />
              <b-form-invalid-feedback id="input-1-live-feedback">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
        </b-modal>
      </form>
    </validation-observer>
  </b-container>
</template>

<script>
import {API} from "@/api/constants-api";
import {LETTER_F} from "@/utils/constants"

export default {
  name: "MultiplierPage",
  data() {
    return {
      name: 'sss',
      symbol: LETTER_F,
      fields: [
        {key: 'id', label: 'Індекс'},
        {key: 'value', label: 'Значення'},
        {key: 'actions', label: 'Дії'},
      ],
      multipliers: [
        {
          id: 1,
          value: 0.4,
        },
        {
          id: 2,
          value: 0.5,
        }
      ],
      editModal: false,
      editItem: {},
    }
  },
  mounted() {
    this.getMultipliers();
  },
  methods: {
    getMultipliers() {
      console.log(API)
    },
    edit(item) {
      this.editModal = true
      this.editItem = {...item}
    },
    onSubmit() {
      console.log(API)
      this.multipliers.map( el => { if(el.id === this.editItem.id) el.value = this.editItem.value})


      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    },
    reset() {
      this.editModal = false
      this.editItem = {}
    }
  }
}
</script>

<style lang="scss">
</style>
