<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Iniciar sesión</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form @submit.prevent="login">
                <v-text-field v-model="username" label="Usuario" outlined></v-text-field>
                <v-text-field v-model="password" label="Contraseña" outlined type="password"></v-text-field>
                <v-select v-model="taste" :items="['Dulce', 'Amargo']" label="Preferencia de sabor" outlined></v-select>
                <p v-if="taste">Has seleccionado: {{ taste }}</p> <!-- Muestra la selección actual -->
                <v-btn color="primary" dark block type="submit">hola</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        taste: null
      };
    },
    methods: {
      login() {
        // Aquí puedes implementar la lógica para el inicio de sesión
        console.log('Usuario:', this.username);
        console.log('Contraseña:', this.password);
        console.log('Preferencia de sabor:', this.taste);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del componente */
  </style>
  