<template>
  <nav-bar></nav-bar>
  <div>
    <h1 class="programs-title">Programas</h1>
    <keep-alive>
      <component :is="activeComponent" @show-next-component="showNextComponent" :idArray="idProgram"></component>
    </keep-alive>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import ProgramMenu from "@/components/AcademicProgramComponents/ProgramMenu.vue";
import ProgramDetails from "@/components/AcademicProgramComponents/ProgramDetails.vue";
import InvitationLetter from "@/components/InvitationComponents/InvitationLetter.vue";

export default {
  components: {
    NavBar,
    ProgramMenu,
    ProgramDetails,
    InvitationLetter,
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