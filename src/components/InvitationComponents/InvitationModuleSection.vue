<template>
    <h2>
        Selector de Módulo
        {{ this.idUser }}
    </h2>
</template>
<script>
export default {
    props: ["userId"],
    data() {
        return {
            idUser: this.userId
        }
    }
}
</script>
<style>

</style>