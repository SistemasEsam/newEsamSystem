<template>
    <div>
      <nav-bar />
      <PaymentCardsVue />
      <Footer />
    </div>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue';
  import Footer from '@/components/Footer.vue';
  import PaymentCardsVue from '@/components/PaymentCards.vue'

  export default {
   
    components: {
      NavBar,
      PaymentCardsVue,
      Footer,
    },
    // Otras opciones y métodos de la vista
  };
  </script>
  
  <style scoped>
  /* Estilos personalizados para la vista */
  </style>
  