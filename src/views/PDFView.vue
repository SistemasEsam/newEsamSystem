<template>
    <FilePDFVue :user-id="idUser"/>
  </template>
  
  <script>
import FilePDFVue from '@/components/FilePDF.vue';


  
  export default {
    components: {
        FilePDFVue
    },
    data() {
      return{
        idUser: this.$route.params.id

      }
    }
  };
  </script>
  