<template>
  <div>
    <nav-bar />
    <!-- Contenido de la vista -->
    <LoginProfileVue />


    <Footer />

  </div>
</template>
  
<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import LoginProfileVue from '@/components/LoginProfile.vue';
export default {
  name: 'ProfileView',
  components: {
    NavBar,
    Footer,
    LoginProfileVue
  },
  // Otras opciones y métodos de la vista
};
</script>
  
<style scoped>
/* Estilos personalizados para la vista */
</style>
  