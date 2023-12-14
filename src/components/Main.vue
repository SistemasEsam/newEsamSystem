<template>
    <div class="main-menu">
        <div class="academic-section">
            Log In Academicos
        </div>
        <div class="instructor-section">
            <v-img
            class="instructor-image"
            >

            </v-img>
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
.main-menu{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.academic-section{
    width: 40%;
    height: 50rem;
    background-color: #162d4a;
}
.instructor-section{
    width: 30%;
    height: 50rem;
    background-color: #ffdf0b;
}

</style>