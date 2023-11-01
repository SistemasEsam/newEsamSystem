<template>
    <div class="main-blog-form">
        <div class="blog-form">
            <v-text-field label="Titulo"> </v-text-field>
            <v-textarea label="Resumen del Paper" :rules="[v => (v || '' ).length <= 500 || 'El documento debe contener un mximo de 500 palabras.']">
            </v-textarea>

        </div>
        
    </div>
</template>
<script>
export default {
    setup() {
        
    },
}
</script>
<style>
.main-blog-form{
    position: absolute;
    width: 90%;
}
.blog-form{
    position: relative;
    margin: auto;
    width: 50%;
}
</style>