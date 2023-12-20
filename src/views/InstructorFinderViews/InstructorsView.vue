<template>
    <nav-bar></nav-bar>
    <h1 v-if="status == 0"> Postulantes </h1>
    <h1 v-else> Docentes </h1>
    <instructor-finder :status="status"></instructor-finder>
</template>
<script>
import InstructorFinder from '@/components/InstructorFinderComponents/InstructorFinder.vue';
import NavBar from '@/components/NavBar.vue';

export default{
  components: { InstructorFinder, NavBar },
    setup() {
        
    },
    component:{
        InstructorFinder,
        NavBar
    },
    data(){
        return{
            status: this.$route.params.status
        }
    },
}
</script>
