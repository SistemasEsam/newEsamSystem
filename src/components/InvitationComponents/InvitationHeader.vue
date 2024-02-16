<template>
  <div class="header-container">
    <div class="header-text">
        <img :src="logoUrl" alt="Logo" class="logo" />
      <div class="title-header">
        <h3>UNIVERSIDAD NACIONAL SIGLO XX</h3>
        <p>Escuela de Postgrado</p>
        <p>Cochabamba</p>
      </div>
    </div>
    <div class="line"></div>
    <!-- Línea agregada aquí -->
  </div>
</template>
  
  <script>
export default {
  name: "LetterHeaderComponent",
  computed: {
    logoUrl() {
      return require("@/assets/escudo.svg");
    },
  },
};
</script>
  
  <style>
.header-container {
  display: grid;
  align-items: center;
  float: left;
}

.logo {
  height: 140px;
}

.header-text{
  font-weight: bold;
  display:inline-flex;
}
.image
{
}
.title-header{
}

.line {
  height: 2px; /* Controla el grosor de la línea */
  width: 8.5in; /* Controla el ancho de la línea */
  background-color: navy; /* Color azul marino */
  position: relative;
}
</style>
  