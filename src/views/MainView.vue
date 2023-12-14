<template>
  <NewNavBar />
  <LitleNavBar />
  <NewImages />
  <Programs />
</template>
  
  <script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import Home from "@/components/Home.vue";
import NewNavBar from "@/components/NewNavBar.vue";
import LitleNavBar from "@/components/LitleNavBar.vue";
import NewImages from "@/components/NewImages.vue";

export default {
  name: "MainView",
  components: {
    NavBar,
    Footer,
    Home,
    NewNavBar,
    LitleNavBar,
    NewImages,
  },
  // Otras opciones y métodos de la vista
};
</script>
  
  <style>
/* Estilos personalizados para la vista */
</style>
  