<template>
    <NavBar></NavBar>
    <h1> Registro de Programa </h1>
    <ProgramForm></ProgramForm>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import ProgramForm from '../../components/AcademicProgramComponents/ProgramForm.vue';

export default {
    components: {
        ProgramForm,
        NavBar,
    },
    setup() {
        
    },
}
</script>
<style>

</style>