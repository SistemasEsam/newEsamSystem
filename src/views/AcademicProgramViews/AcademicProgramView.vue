<template>
  <NavBar></NavBar>
  <div class="program-background">
  <v-container class="program-background-container">
    <h1>Registro de Programa</h1>
    <ProgramForm></ProgramForm>
  </v-container>
</div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import ProgramForm from "../../components/AcademicProgramComponents/ProgramForm.vue";

export default {
  components: {
    ProgramForm,
    NavBar,
  },
  setup() {},
};
</script>
<style>
.program-background{
  background-color: #e5e7eb;
}
.program-background-container{
  background-color: white;
}
</style>