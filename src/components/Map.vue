<template>
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <!-- Descripción a la izquierda -->
          <div class="description">
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
          </div>
        </v-col>
  
        <v-col cols="6">
          <!-- Imagen a la derecha -->
          <v-img :src="require('@/assets/Mapa1.jpg')" alt="Imagen" class="image" />
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        default: 'Título'
      },
      description: {
        type: String,
        default: 'Descripción'
      },
      imageSrc: {
        type: String,
        default: 'https://via.placeholder.com/300' // Imagen de muestra
      }
    }
  };
  </script>
  
  <style scoped>
  .description {
    padding: 20px;
  }
  
  .image {
    width: 100%;
    height: auto;
  }
  </style>
  