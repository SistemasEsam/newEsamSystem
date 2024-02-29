<template>
  <NavBar></NavBar>
    <report/>
  <Footer></Footer>  
</template>
  
  <script>
  
  import report from '@/components/MKTreports/ReportMKT.vue'
  import NavBar from '@/components/NavBar.vue'
  import Footer from '@/components/Footer.vue'
  
  export default {
    name: 'App',
    components: { 
      NavBar,
      report,
      Footer,
     }
  }
  </script>
  
  <style>
  </style>