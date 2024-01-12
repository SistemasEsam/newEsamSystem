<template>
    <H1> Carta de Invitación</H1>
    <h2> {{this.idUser[0]}}</h2>
    <h2> {{this.idUser[1]}}</h2>

</template>
<script>
export default {
    props: ["userId"],
    data() {
        return {
            idUser : this.userId,
        }
    },

}
</script>
<style>

</style>