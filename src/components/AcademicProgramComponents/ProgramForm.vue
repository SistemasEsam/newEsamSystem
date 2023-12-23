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
          <br>
          <v-combobox label="Tipo de Programa" :items="['Curso', 'Diplomado', 'Maestria', 'Especialidad']"></v-combobox>
          <v-container>
            <v-text-field label="Nombre del Modulo"></v-text-field>
          </v-container>
        </v-row>
      </v-col>
    </v-container>
  </v-form>
</template>
<script>
export default {
  setup() {},
};
</script>
<style>
</style>