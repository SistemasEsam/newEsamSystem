<template>
    <div>
      <nav-bar />
      <!-- Contenido de la vista -->
   
    <LoginVue/>
    
<Footer />

    </div>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue';
  import Footer from '@/components/Footer.vue';
  import LoginVue from '@/components/Login.vue';
  export default {
    name: 'LoginView',
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
  