<template>
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <!-- Descripción a la izquierda -->
          <div class="content-left">
            <h1 class="custom-title">VISITANOS Y</h1>
            <h1 class="custom-title2">CONTACTANOS</h1>
          
            <H3 class="custom-description">AV. RAMON RIVERO PLAZUELA QUINTANILLA <BR/> EDIFICIO LOS TIEMPOS <BR/> TORRE 1 - PISO 5</H3>
        
            <v-btn class="custome-btn" color="#54B262">LLAMANOS!</v-btn>
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
  .content-right {
  padding: 20%; /* Espaciado para el contenido a la derecha */
}
.custome-btn{

transition: background-color 0.3s ease; /* Agrega una transición de color de fondo */
  border-radius: 300px; /* Redondea los bordes de los botones */
  color: #D8D2D2; /* Cambia el color del texto a #D8D2D2 */

  text-align: right;
margin-right: -65%;

  position: relative;
 
}
.custom-title {
  font-size: 40pt; /* Tamaño de fuente relativo */
  font-weight: black;
  color: #172E4B;
  text-align: left;
line-height:40%;
  position:relative
}
.custom-title2 {
  font-size: 45pt; /* Tamaño de fuente relativo */
  font-weight: black;
  color: #B2A612;
  text-align: left;


  position:relative
}
.custom-description {
  font-size: 1em;
  font-weight: bold;
  color: #1E1E1c;
  text-align: left;
  margin-right: -77%;

  position:relative
}
  </style>
  