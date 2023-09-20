<template>
    <div>
      <nav-bar />
      <!-- Contenido de la vista -->
   
<Contact/>
    
<Footer />

    </div>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue';
  import Footer from '@/components/Footer.vue';
  import Contact from '@/components/Contact.vue'
  export default {
    name: 'ContacView',
    components: {
      NavBar,
      Contact,
      Footer,
    },
    // Otras opciones y métodos de la vista
  };
  </script>
  
  <style scoped>
  /* Estilos personalizados para la vista */
  </style>
  