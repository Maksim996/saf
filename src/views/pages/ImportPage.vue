<template>
  <div>
    <b-container>
      <b-row class="justify-content-md-between">
        <b-col col lg="7">
          <b-row>
            <b-col col lg="9">
              <b-form-file v-model="file" browse-text="Оберіть" placeholder="Оберіть файл Excel" accept=".xlsx,.xls"></b-form-file>
            </b-col>
            <b-col col lg="2">
              <b-button variant="outline-success" :disabled="!file" >Імпортувати</b-button>
            </b-col>
          </b-row>
        </b-col>
        <b-col col lg="5">
          <b-button class="d-block ml-auto" :disabled="!students" variant="outline-primary">Експортувати таблицю</b-button>
        </b-col>
      </b-row>
    </b-container>


    <b-container fluid class="mt-5">
      <b-table hover :items="students" :fields="fields" head-variant="primary">
        <template #cell(id)="row">
          {{ row.value }}
        </template>

        <template #row-details="row">
          <b-list-group>
            <b-list-group-item v-for="item in row.item.marks" class="py-1">
              <b-row class="mb-2">
                <b-col sm="11">{{ item.name }}</b-col>
                <b-col>{{ item.mark }}</b-col>
              </b-row>
            </b-list-group-item>
          </b-list-group>
        </template>


        <template #cell(actions)="row">
          <b-button class="mr-1" variant="outline-info" size="sm" @click="row.toggleDetails">
            <b-icon icon="eye" font-scale="1"/>
          </b-button>
          <b-button class="mr-1" variant="outline-primary" size="sm" @click="edit(row.item)">
            <b-icon icon="pencil" font-scale="1"/>
          </b-button>
          <b-button variant="outline-danger" size="sm" @click="deleted(row.item)">
            <b-icon icon="trash" font-scale="1"/>
          </b-button>
        </template>
      </b-table>
    </b-container>


      <form ref="form" @submit.stop.prevent="onSubmit()">
        <b-modal v-model="editModal"
                 id="modal-prevent-closing"
                 title="Редагування"
                 header-bg-variant="primary"
                 header-text-variant="light"
                 cancel-title="Закрити"
                 ok-title="Зберегти"
                 @ok.prevent="onSubmit()"
                 @close="reset"
                 size="xl"
        >
          <b-table  :fields="fieldsSmall" :items="[selectItem]"></b-table>

          <b-list-group>
            <b-list-group-item v-for="item in listPoints" class="py-1">
              <b-row class="mb-2">
                <b-col sm="10">{{ item.name }}</b-col>
                <b-col>{{ item.mark }}</b-col>
                <b-col>
                  <b-form-checkbox
                    v-model="item.status"
                    name="checkbox-1"
                    size="lg"
                  />
                </b-col>
              </b-row>
            </b-list-group-item>
          </b-list-group>
        </b-modal>
      </form>

      <b-modal cancel-title="Ні" ok-title="Так" cancel-variant="danger" id="deleted" title="Видалення" @ok.prevent="onDelete">
        <p class="my-4">Ви точно хочете видалити запис  {{ selectItem.id }}</p>
      </b-modal>
  </div>
</template>

<script>

import {API} from "@/api/constants-api";

export default {
name: "PageImport",
  data() {
    return {
      file: null,
      editModal: false,
      selectItem: {},
      status: true,
      fields: [
        {key: 'id', label: 'id'},
        {key: 'student_full_name', label: 'ПІБ студента'},
        {key: 'group', label: 'Група'},
        {key: 'course', label: 'Курс'},
        {key: 'unit', label: 'Факультет/Інститут'},
        {key: 'supervisor_full_name', label: 'ПІБ керівника'},
        {key: 'supervisor_position', label: 'Посада керівника'},
        {key: 'mark_total', label: 'Загальна оцінка'},
        {key: 'actions', label: 'Дії'},
      ],
      fieldsSmall: [
        {key: 'id', label: 'id'},
        {key: 'student_full_name', label: 'ПІБ студента'},
        {key: 'group', label: 'Група'},
        {key: 'course', label: 'Курс'},
        {key: 'unit', label: 'Факультет/Інститут'},
        {key: 'supervisor_full_name', label: 'ПІБ керівника'},
        {key: 'supervisor_position', label: 'Посада керівника'}
      ],
      students: [
        {
          id: 1,
          student_full_name: 'Іванов Іван Іванович',
          group: 'Ел-41',
          course: '1',
          unit: 'ЕлІТ',
          supervisor_full_name: 'Петров Петро Петрович',
          supervisor_position: 'кафедра физики',
          mark_total: '30',
          marks: [
            {
              name: 'Виконання науково-дослідної роботи у рамках держбюджетної, госпдоговірної або грантової тематики із оплатою праці не менше 3-х місяців в еквіваленті щонайменше 0,5 ставки від мінімальної заробітної плати щомісячно.',
              mark: '10'
            },
            {
              name: 'Виконання науково-дослідної роботи у рамках держбюджетної, госпдоговірної або грантової тематики із оплатою праці не менше 3-х місяців в еквіваленті щонайменше 0,5 ставки від мінімальної заробітної плати щомісячно.',
              mark: '8'
            },
          ]
        },
        {
          id: 2,
          student_full_name: 'Іванов Іван Іванович 2',
          group: 'Ел-41',
          course: '2',
          unit: 'ЕлІТ',
          supervisor_full_name: 'Петров Петро Петрович 2',
          supervisor_position: 'кафедра физики',
          mark_total: '30',
          marks: [
            {
              name: 'Виконання науково-дослідної роботи у рамках держбюджетної, госпдоговірної або грантової тематики із оплатою праці не менше 3-х місяців в еквіваленті щонайменше 0,5 ставки від мінімальної заробітної плати щомісячно.',
              mark: '10'
            },
            {
              name: 'Виконання науково-дослідної роботи у рамках держбюджетної, госпдоговірної або грантової тематики із оплатою праці не менше 3-х місяців в еквіваленті щонайменше 0,5 ставки від мінімальної заробітної плати щомісячно.',
              mark: '8'
            },
          ]
        }
      ],
      listPoints: [
        {
          name: 'Виконання науково-дослідної роботи у рамках держбюджетної, госпдоговірної або грантової тематики із оплатою праці не менше 3-х місяців в еквіваленті щонайменше 0,5 ставки від мінімальної заробітної плати щомісячно.',
          mark: '10',
          status: true,
        },
        {
          name: 'Виконання науково-дослідної роботи у рамках держбюджетної, госпдоговірної або грантової тематики із оплатою праці не менше 3-х місяців в еквіваленті щонайменше 0,5 ставки від мінімальної заробітної плати щомісячно.',
          mark: '8',
          status: false,
        }
      ]
    }
  },
  methods: {
    onSubmit() {
      console.log(API)

      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    },
    onDelete() {
      this.$nextTick(() => {
        this.$bvModal.hide('deleted')
      })

      this.reset();
    },
    edit(item) {
      this.selectItem = {...item};
      this.editModal = true;
    },
    deleted(item) {
      this.selectItem = {...item};
      this.$bvModal.show('deleted')
    },
    reset() {
      this.selectItem = {}
    }
  }
}
</script>

<style scoped>

</style>
