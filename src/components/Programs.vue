<template>
    <div class="custom-container">
      <h2 class="custom-title">{{ mainTitle }}</h2>
  
      <div class="images-container">
        <div v-for="(item, index) in imageData" :key="index" class="image-item">
          <v-img :src="item.imageUrl" :alt="'Imagen ' + (index + 1)" />
          
          <p class="custom-title-program pt-5">{{ item.title }}</p>
          <p class="custom-subtitle-program">{{ item.subtitle }}</p>
          <p class="custom-description-program">{{ item.description }}</p>
        
          <v-btn class="custom-button" id="button1">CONOCE MAS</v-btn>
        </div>
      </div>
  
  
    </div>
  </template>
  
  <script>
  export default {
    props: {
      mainTitle: {
        type: String,
        default: 'NUESTROS PROGRAMAS'
      }
    },
    data() {
      return {
        imageData: [
          {
            imageUrl: require("@/assets/M-AYCF.png"),
            title: 'MAESTRIA EN',
            subtitle: 'AUDITORIA Y CONTROL FINANCIERO',
            description: 'VERSION 1 GRUPO 2',
            button:'nuevo'
          },
          {
            imageUrl: require("@/assets/M-BIMM.png"),
            title: 'MAESTRIA EN ',
            subtitle: 'BIM MANAGEMENT',
            description: 'VERSION 1 GRUPO 1'
          },
          {
            imageUrl: require("@/assets/M-GHGS.png"),
            title: 'MAESTRIA EN',
            subtitle: 'GESTION HOSPITALARIA Y GERENCIA DE LOS SERVICIOS DE SALUD',
            description: 'VERSION 1 GRUPO 2'
          },  {
            imageUrl: require("@/assets/M-SPME.png"),
            title: 'MAESTRIA EN',
            subtitle: 'SALUD PUBLICA',
            description: 'VERSION 1 GRUPO 1'
          },          // ... Agrega más objetos para más imágenes
        ],
        buttonTexts: ['Botón 1', 'Botón 2','Botón 2','Botón 2'] // Agrega más textos para más botones
      };
    }
  };
  </script>
  
  <style scoped>
  .custom-container {
    background-color: #112533;
    padding: 20px;
    color: white;
  }
  
  .custom-title {
    font-size: 20pt;
    font-weight: bold;
    text-align: center;
  }
  
  .images-container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  .image-item {
    text-align: center;
    width: 23%; /* Ajusta el ancho según tus necesidades */
  }
  
  .image-item v-img {
    width: 100%; /* Ajusta el ancho de la imagen */
  }
  
  .buttons-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .custom-button {
    transition: background-color 0.3s ease; /* Agrega una transición de color de fondo */
    border-radius: 300px; /* Redondea los bordes de los botones */
    color: #112533; /* Cambia el color del texto a #D8D2D2 */
    width: 200px; /* Cambia el ancho según tus preferencias */
    height: 25px; /* Ajusta la altura automáticamente */
    font-weight: bold;
  }
  #button1 {
    background-color: #D8D2D2;
    
  }
  .custom-title-program{
    font-size: 10pt; /* Tamaño de fuente relativo */
  font-weight: bold;
  color: #B2A612;
  text-align: center;

  position:relative
  }
  .custom-subtitle-program{
    font-size: 18pt; /* Tamaño de fuente relativo */
  font-weight: Black;
  color: #D8D2D2;
  text-align: center;
  line-height: 100%;

  position:relative
  }
  .custom-description-program{

    font-size: 10PT; /* Tamaño de fuente relativo */
  font-weight: regular;
  color: #D8D2D2;
  text-align: center;

  position:relative

  }
  </style>
  