<template>
    <div class="component-with-shapes-and-description">
      <!-- Rectángulo amarillo -->
   
      <div class="yellow-rectangle1"></div>
      <!-- Descripción del contenido -->
      <div class="description-container">
        <p class="description">Esta es una descripción con un rectángulo amarillo de fondo.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style>
.yellow-rectangle1 {
  position: absolute;
}

  .component-with-shapes-and-description {
    width: 8.5in; /* Ancho de hoja carta en pulgadas */
    height: 11in; /* Alto de hoja carta en pulgadas */
    padding: 0; /* Sin relleno */
    margin: 0; /* Sin márgenes */
    position: relative;
  }
  
  .yellow-rectangle1  {
  top: 10.5in; /* Ajustar la posición vertical del rectángulo */
  left: 0.0in; /* Ajustar la posición horizontal del rectángulo */
  width: 1375px; /* Ancho del rectángulo */
  height: 70px; /* Alto del rectángulo */
  background-color: yellow; /* Color amarillo */
}
  
  .description-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  
  .description {
    color: black; /* Color del texto en negro */
    font-size: 23px; /* Tamaño de fuente 23px */
    font-family: Arial, sans-serif; /* Tipo de letra Arial */
    background-color: rgba(255, 255, 255, 0.7); /* Fondo transparente */
    padding: 10px;
    border-radius: 5px;
  }
  </style>
  