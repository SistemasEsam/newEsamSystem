<template>
  <nav-bar></nav-bar>
  <v-container>
    <h1 class="programs-title">Programas</h1>
    <keep-alive>
      <component :is="activeComponent" @show-next-component="showNextComponent" :program-id="idProgram"></component>
    </keep-alive>
  </v-container>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import ProgramMenu from "@/components/AcademicProgramComponents/ProgramMenu.vue";
import ProgramDetails from "@/components/AcademicProgramComponents/ProgramDetails.vue";

export default {
  components: {
    NavBar,
    ProgramMenu,
    ProgramDetails,
  },
  data() {
    return {
        idProgram:'',
        activeComponent:'program-menu',
        component:'ProgramMenu'
    }
  },
  methods:{
    showNextComponent(nextComponent,idProgram){
        this.activeComponent = nextComponent
        this.idProgram = idProgram 
    }
  }
};
</script>
<style>
.programs-title {
  position: relative;
}
</style>