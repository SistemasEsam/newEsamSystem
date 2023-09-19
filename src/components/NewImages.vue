<template>
    <v-app>
      <v-carousel cycle hide-delimiters :show-arrows="false">
        <v-carousel-item v-for="(item, index) in carouselItems" :key="index">
          <v-sheet
            :style="{ 'background-image': `url(${item.backgroundImage})`, 'background-size': 'cover' }"
            height="100%"
            class="d-flex flex-column align-center justify-center"
          >
            <h2 class="custom-title">{{ item.title }}</h2>
            <h3 class="custom-subtitle">{{ item.subtitle }}</h3>
            <p class="custom-description">{{ item.description }}</p>
            <v-btn class="custom-btn" color="primary">{{ item.buttonText }}</v-btn>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <p class="custome-more">CONOCE MAS</p>
      <v-btn @click="scrollToComponent" variant="plain"  class="custom-button" >
       <v-icon left>
        mdi-chevron-down
       </v-icon>

      </v-btn>
      <div ref="componentToScrollTo" style="height: 500px; background-color: lightgray">
        <!-- Contenido del componente al que se desplazará -->
        <p>Este es el componente al que te desplazarás.</p>
      </div>


    </v-app>
  </template>
  
  <script>


  export default {
methods:{
  scrollToComponent() {
        const element = this.$refs.componentToScrollTo;
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
},
 
    data() {
      return {
     
        carouselItems: [
          {
            title: 'Imagen 1',
            subtitle: 'Subtítulo de la Imagen 1',
            description: 'Descripción de la Imagen 1.',
            buttonText: 'Botón 1',
            backgroundImage: require('@/assets/BANCA.png'), // Ruta de la imagen de fondo
          },
          {
            title: 'Imagen 2',
            subtitle: 'Subtítulo de la Imagen 2',
            description: 'Descripción de la Imagen 2.',
            buttonText: 'Botón 2',
            backgroundImage: require('@/assets/GERENCIATRIBUTARIA.png'), // Ruta de la imagen de fondo
          },
          // Agrega más objetos para más imágenes
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Estilos personalizados */
  .custom-title {
    font-size: 30px; /* Tamaño de fuente personalizado */
    font-weight: bold-semi-regular; /* Tipo de letra en negrita */
    color: #ff5722; /* Color de letra personalizado */
    text-align: left; /* Alineación a la izquierda */
    margin-left: 1000px; /* Margen izquierdo para mover el título hacia la izquierda */
  }
    .custom-subtitle {
  font-size: 60px; /* Tamaño de fuente personalizado */
  font-weight: Black; /* Tipo de letra en negrita */
  color: #2196F3; /* Color de letra personalizado */
  text-align: left; /* Alineación centrada */
  margin-left: 1000px; /* Margen superior para separar el subtítulo del título */
  }
  .custom-description {
  font-size: 16px; /* Tamaño de fuente personalizado */
  font-weight: bold; /* Tipo de letra en negrita */
  color: #ff5722; /* Color de letra personalizado */
  text-align: left; /* Alineación a la izquierda */
  margin-left: 1000px; /* Margen izquierdo para mover la descripción hacia la izquierda */
}
.custom-btn {
  font-size: 16px; /* Tamaño de fuente personalizado */
  font-weight: bold; /* Tipo de letra en negrita */
  color: #ff5722; /* Color de letra personalizado */
  text-align: left; /* Alineación a la izquierda */
  margin-left: 1000px; /* Margen izquierdo para mover la descripción hacia la izquierda */
}
.v-carousel-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.custome-more{

  font-size: 30px; /* Tamaño de fuente personalizado */
  font-weight: bold; /* Tipo de letra en negrita */
  color: #ff5722; /* Color de letra personalizado */
  text-align: left; /* Alineación a la izquierda */
  margin-left: 585px; /* Margen izquierdo para mover la descripción hacia la izquierda */



}

.custom-button {
 
   
    color: #D8D2D2; /* Cambia el color del texto a #D8D2D2 */
    width: 100px; /* Cambia el ancho según tus preferencias */
    height: 25px; /* Ajusta la altura automáticamente */
    margin-left: 630px;
    font-size: 56px;
    color: black;
  }
  </style>
  