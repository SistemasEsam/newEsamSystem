<template>
    <v-app-bar
      app
      color="#172E4B"
      dark
      :elevation="0"
      :height="navBarHeight + 'px'"
      
    >
      <!-- Contenedor para alinear los botones a la derecha -->
      <v-spacer></v-spacer>
      
      <!-- Botones en la derecha -->
      <v-btn  size="small" text>
         Nosotros
      </v-btn>
      <v-btn  size="small" text>
        Programas
      </v-btn>
      <v-btn  size="small" text>
        Blog
      </v-btn>
      <v-btn  size="small" text>
        Contacto
      </v-btn>
      
    </v-app-bar>
  </template>
  
  <script>
  export default {
    name: "MyNavBar",
    props: {
      backgroundColor: {
        type: String,
        default: "#3f51b5", // Color de fondo predeterminado
      },
      navBarHeight: {
        type: Number,
        default: 64, // Altura predeterminada en píxeles
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para este componente */
  
  /* Estilo del título */
  .title {
    flex: 1;
    text-align: center;
    font-size: 20px; /* Ajusta el tamaño del texto según tus preferencias */
  }
  
  /* Estilo de los botones */
  .v-btn {
    margin-left: 8px; /* Ajusta el margen izquierdo según tus preferencias */
    margin-right: 8px; /* Ajusta el margen derecho según tus preferencias */
    color: #fff; /* Cambia el color del texto a blanco o el que desees */
  }
  </style>
  