<template>
    <v-app-bar
      app
      color="#FCF7F6"
      dark
      :elevation="0"
      :height="visible ? 64 : 0"
      :class="{ 'scroll-hide': scrolled }"
    >
      <!-- Agregar imagen a la izquierda con estilo -->
      <img
        :src="require('../assets/logosvg.svg')"
        class="logo-image"
      />
      
      <!-- Título en el centro del v-app-bar con estilo de fuente personalizado y ubicación modificada -->
      <v-toolbar-title class="title">
        ESCUELA DE NEGOCIOS<br />ESAM COCHABAMBA SUCURSAL
      </v-toolbar-title>
      
      <!-- Agregar botones a la derecha con espacio entre ellos -->
      <v-btn  size="x-small" class="custom-button" id="button1" color="white" @click="redirectTo('/form-view')">
        REGISTRARSE
      </v-btn>
      <v-btn size="x-small" class="mx-2 custom-button" id="button2" color="white" @click="redirectTo('/login')">
        INICIAR SESION
      </v-btn>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    data() {
      return {
    
        scrolled: false,
        visible: true,
        drawer: false,
        lastScroll: 0,
      };
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {

      redirectTo(route) {
      this.$router.push(route);
    },
      handleScroll() {
        const currentScroll = window.scrollY;
  
        if (currentScroll > this.lastScroll) {
          // Hacia abajo
          this.visible = false;
        } else {
          // Hacia arriba
          this.visible = true;
        }
  
        this.lastScroll = currentScroll;
        this.scrolled = currentScroll > 0;
      },
    },
  };
  </script>
  
  <style scoped>
  .scroll_hide-enter-active,
  .scroll_hide-leave-active {
    transition: opacity 0.5s;
  }
  .scroll_hide-enter,
  .scroll_hide-leave-to {
    opacity: 0;
  }
  
  /* Cambiar el color de la barra de navegación */
  .v_app_bar {
    background-color: #3f51b5; /* Cambia este color según tus preferencias */
  }
  
  /* Alinear el título al centro en dos líneas y modificar la ubicación */
  .title {
    text-align: center;
    white-space: normal; /* Cambia a 'normal' para permitir saltos de línea */
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%; /* Asegurar que el título no desborde el v_app_bar */
    
    /* Modificar el tipo de letra y aplicar negritas */
    font-family: "NOW", sans-serif; /* Cambia el tipo de letra según tus preferencias */
    font-weight: bold; /* Aplicar negritas */
    
    /* Modificar la ubicación en X e Y */
    position: relative;
    left: 20px; /* Modifica la ubicación horizontal según tus preferencias */
    top: 0px; /* Modifica la ubicación vertical según tus preferencias */
  }
  
  /* Estilo de la imagen */
  .logo-image {
    width: 150px; /* Cambia el ancho según tus preferencias */
    height: 150px; /* Ajusta la altura automáticamente */
    
    /* Mover la imagen hacia abajo y hacia la izquierda */
    transform: translateY(10px) translateX(55px); /* Ajusta los valores según tu preferencia */
  }
  
  /* Estilo de los botones */
  .custom-button {
    transition: background-color 0.3s ease; /* Agrega una transición de color de fondo */
    border-radius: 300px; /* Redondea los bordes de los botones */
    color: #D8D2D2; /* Cambia el color del texto a #D8D2D2 */
    width: 100px; /* Cambia el ancho según tus preferencias */
    height: 25px; /* Ajusta la altura automáticamente */
  }
  
  .custom-button:hover {
    background-color: yellow; /* Cambia el color de fondo a amarillo al pasar el cursor */
  }
  
  /* Color de fondo personalizado para Button 1 */
  #button1 {
    background-color: #112533;
    
  }
  
  /* Color de fondo personalizado para Button 2 */
  #button2 {
    background-color: #b2a612;
  }
  </style>
  