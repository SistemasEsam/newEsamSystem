<template>
  <div>
    <nav-bar />
    <!-- Contenido de la vista -->
 
<Aboutus/>


<Footer />

  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import Aboutus from '@/components/Aboutus.vue';
export default {
  name: 'ContacView',
  components: {
    NavBar,
    Aboutus,
    Footer,
  },
  // Otras opciones y métodos de la vista
};
</script>

<style scoped>
/* Estilos personalizados para la vista */
</style>
