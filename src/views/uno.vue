<template>
    <div>
      <nav-bar />
      <!-- Contenido de la vista -->
  
<Footer />

    </div>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue';
  import Footer from '@/components/Footer.vue';
 
  export default {
    name: 'MainView',
    components: {
      NavBar,
      Footer,
      LoginVue
    },
    // Otras opciones y métodos de la vista
  };
  </script>
  
  <style scoped>
  /* Estilos personalizados para la vista */
  </style>
  