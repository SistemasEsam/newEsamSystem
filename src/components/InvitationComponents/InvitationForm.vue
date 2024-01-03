<template>
    <h1> Formulario de Invitación </h1>
    <h3> {{this.idUser}}</h3>
</template>
<script>
export default {
    setup() {
        
    },
    props: ["userId"],
    data() {
        return {
            idUser: this.userId,
        }
    }
}
</script>
<style>

</style>