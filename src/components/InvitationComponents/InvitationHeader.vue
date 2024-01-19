<template>
    <div class="header-container">
      <img :src="logoUrl" alt="Logo" class="logo">
      <div class="header-text">
        <h1>UNIVERSIDAD NACIONAL SIGLO XX</h1>
        <p>Escuela de Postgrado</p>
        <p>Cochabamba</p>
        <div class="line"></div> <!-- Línea agregada aquí -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LetterHeaderComponent',
    computed: {
      logoUrl() {
        return require('@/assets/escudo.svg');
      }
    }
  };
  </script>
  
  <style scoped>
  .header-container {
    display: flex;
    align-items: center;
    padding: 10px;
  }
  
  .logo {
    height: 140px;
    margin-right: 219px;
    transform: translateX(220px);
    margin-top: 0px;
  }
  
 .header-text h1 {
  margin: 0;
  font-weight: bold;
  font-size: 18px; /* Ajusta el tamaño de la fuente para el título */
}

.header-text p {
  margin: 0;
  font-size: 16px; /* Ajusta el tamaño de la fuente para los párrafos */
}
  
.line {
  height: 2px; /* Controla el grosor de la línea */
  width: 250%; /* Controla el ancho de la línea */
  background-color: navy; /* Color azul marino */
  margin-top: 10px; /* Espaciado vertical desde el texto hasta la línea */
  margin-left: 50px; /* Mueve la línea horizontalmente a la derecha */
  margin-right: 50px; /* Ajusta el margen derecho si es necesario */
  position: relative;
  top: 36px; /* Mueve la línea verticalmente hacia abajo */
  left: -100px; /* Mueve la línea horizontalmente hacia la derecha */
}
  </style>
  