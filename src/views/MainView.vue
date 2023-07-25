<template>
    <div>
      <nav-bar />
      <!-- Contenido de la vista -->
   
    <Home />
    
<Footer />

    </div>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue';
  import Footer from '@/components/Footer.vue';
  import Home from '@/components/Home.vue';
  export default {
    name: 'MainView',
    components: {
      NavBar,
      Footer,
      Home
    },
    // Otras opciones y métodos de la vista
  };
  </script>
  
  <style scoped>
  /* Estilos personalizados para la vista */
  </style>
  