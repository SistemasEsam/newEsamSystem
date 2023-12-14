<template>
  <NavBar></NavBar>
  <Main></Main>
  <Footer></Footer>

</template>
<script>
import Footer from '@/components/Footer.vue';
import NavBar from '@/components/NavBar.vue';
import Main from '@/components/Main.vue'
export default {
  name: "MainView",
  components: {
    Footer,
    NavBar,
    Main
  },
  // Otras opciones y métodos de la vista
};
</script>
  
<style>
/* Estilos personalizados para la vista */
</style>
  