<template>
    <div>
      <v-container fluid fill-height>
        <v-row align="center" justify="center" class="fill-height">
          <v-col>
            <v-img :src="require('@/assets/Blog.jpg')" class="image"></v-img>
            <div class="centered-text">
              <span class="text">{{ texto }}</span>
            </div>
            <div class="centered-text text2-container">
            
            </div>
          </v-col>
        </v-row>
      </v-container>
  
      <!-- Barra delgada azul con botones -->
      <v-row class="blue-bar" justify="center">
        <v-btn v-btn size="small" class="custom-btn">
        Mundo Empresarial
      </v-btn>
      <v-btn v-btn size="small" class="custom-btn">
        Legalidad y Legitimidad
      </v-btn>    <v-btn v-btn size="small" class="custom-btn">
        Inovacion Cientifica Tecnologica
      </v-btn>    <v-btn v-btn size="small" class="custom-btn">
        Bienestar y Salud
      </v-btn>    <v-btn v-btn size="small" class="custom-btn">
        Texto Falso
      </v-btn>
      </v-row>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        texto: ' BLOG',
        buttons: ['Botón 1', 'Botón 2', 'Botón 3', 'Botón 4', 'Botón 5']
      };
    },
  };
  </script>
  
  <style scoped>
  .image {
    width: auto; /* Ancho de la imagen (ajusta según lo que necesites) */
    height: auto; /* Altura automática para mantener la proporción */
    object-fit: cover; /* Ajusta la imagen al tamaño de la caja */
  }
  
  .centered-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .text {
    font-size: 2em;
    color: beige;

  }
  
  .text2-container {
    position: absolute;
    top: 80%; /* Ajusta la posición vertical aquí (ejemplo: 70%) */
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .text2 {
    font-size: 2em;
    
  }
  
  /* Estilo de la barra azul */
  .blue-bar {
    background-color: #172E4B; /* Color azul */
    padding: 0.05cm; /* Espaciado interno */
    width: 100%; /* Ocupa todo el ancho */
  }
  
  /* Estilo de los botones en la barra */
  .v-btn {
    margin-left: 8px; /* Ajusta el margen izquierdo según tus preferencias */
    margin-right: 8px; /* Ajusta el margen derecho según tus preferencias */
    color: #172E4B; /* Cambia el color del texto a blanco o el que desees */
  }
  
/* Estilo del botón con fondo transparente */
.custom-btn {
  background-color: #172E4B;
  color: #fff;
  border-color: #172E4B;
}
  </style>
  