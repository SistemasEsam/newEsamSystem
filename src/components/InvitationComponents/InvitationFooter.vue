<template>
  <div class="footer-container">
    <!-- Contenido adicional del pie de página si es necesario -->
    <div class="footer-text"> 
      <p> AVENIDA RAMÓM RIVERO - PLAZUELA QUINTANILLA</p>
      <p> EDIFICIO LOS TIEMPOS │ TORRE 1 PISO 5 │ CEL: +591 62671307</p>
    </div>
    <div class="footer-line"></div>
  </div>
</template>
  
  <script>
export default {
  name: "FooterComponent",
  // Puedes agregar lógica de componente aquí si es necesario
};
</script>
  
  <style >
.footer-container {
  display: grid;
  align-items: center;
  float: left;
  width: 8in;
  height: 1in;
}
.footer-text{
  display: flex;
  flex-direction: column;
  place-items: center;
  font-size: larger;
  font-weight: bold;
}
.footer-line {
  height: 20px; /* Altura del pie de página */
  background: linear-gradient(
    to right,
    #7f1d1d,
    #142033
  ); /* Degradado de guindo a azul marino */
  color: white; /* Color del texto en el pie de página */
  width: 8.5in;
}
</style>
  