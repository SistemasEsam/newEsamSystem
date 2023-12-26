<template>
  <v-form>
    <v-container>
      <v-col>
        <v-row>
          <h3>Programa</h3>
          <v-container>
            <v-text-field label="Nombre del Programa"></v-text-field>
          </v-container>
        </v-row>
        <v-row>
          <h3> Tipo de Programa</h3>
          <v-container>
            <v-combobox label="Tipo de Programa" :items="['Curso', 'Diplomado', 'Maestria', 'Especialidad']"></v-combobox>
          </v-container>
        </v-row>
        <v-row>
          <h3>Codigo</h3>
          <v-container>
            <v-text-field label="Código del Programa"></v-text-field>
          </v-container>
        </v-row>
        <v-row>
          <h3>Coordinadora</h3>
          <v-container>
            <v-text-field label="Coordinadora del Programa"></v-text-field>
          </v-container>
        </v-row>
        <v-row>
          <h3>Modulos</h3>
          <v-container>
            <v-form v-for="(moduleForm, index) in moduleForms" :key="index">
              <v-text-field label="Nombre del Modulo"></v-text-field>
              <v-text-field label="Codigo del Modulo"></v-text-field>
              <VueDatePicker v-model="moduleForm.moduleDates" :enable-time-picker="false" multi-dates placeholder="Fechas de clases"></VueDatePicker>
              <br>
              <v-textarea label="Contenido del Modulo"></v-textarea>
            </v-form>
          </v-container>
        </v-row>
      </v-col>
      <br>
    </v-container>
  </v-form>

</template>
<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
  components:{
    VueDatePicker,
  },
  data() {
    return {
      moduleForms: [
        {
          moduleName: '',
          moduleCode: '',
          moduleDates: '',
          moduleContent: '',
        }
      ],
    }
  },
  setup() {},
};
</script>
<style>
</style>