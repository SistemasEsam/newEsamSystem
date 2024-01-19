<template>
    <div class="footer-container">
      <!-- Contenido adicional del pie de página si es necesario -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent',
    // Puedes agregar lógica de componente aquí si es necesario
  };
  </script>
  
  <style scoped>
  .footer-container {
    height: 20px; /* Altura del pie de página */
    background: linear-gradient(to right, #6e213d, navy); /* Degradado de guindo a azul marino */
    color: white; /* Color del texto en el pie de página */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>
  