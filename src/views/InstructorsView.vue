<template>
    <h1> Búsqueda Docente </h1>
    <instructor-finder></instructor-finder>
</template>
<script>
import InstructorFinder from '@/components/InstructorFinder.vue';
export default{
  components: { InstructorFinder },
    setup() {
        
    },
    component:{
        InstructorFinder
    }
}
</script>
