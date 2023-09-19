<template>
      <button @click="scrollToComponent">Desplazarse al Siguiente Componente</button>
    <div>
      <div ref="componentToScrollTo" style="height: 500px; background-color: lightgray">
        <!-- Contenido del componente al que se desplazará -->
        <p>Este es el componente al que te desplazarás.</p>
      </div>
    
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      scrollToComponent() {
        const element = this.$refs.componentToScrollTo;
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };
  </script>
  