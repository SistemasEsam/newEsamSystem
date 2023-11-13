<template>
    <!--<FilePDFVue :user-id="idUser"/> -->
    <PDFFormationSection :user-id="idUser"/>
  </template>

  <script>
import FilePDFVue from '@/components/PDFComponents/FilePDF.vue';
import PDFFormationSection from '@/components/PDFComponents/PDFFormationSection.vue';

  export default {
    components: {
        FilePDFVue,
        PDFFormationSection
    },
    data() {
      return{
        idUser: this.$route.params.id

      }
    }
  };
  </script>
