<template>
    <v-container>
        <v-row >
            <v-col>
                <v-btn @click="openStaffProfile()" class="button-style" size="300px">
                    <v-icon size="200px"> mdi-account-box-outline </v-icon>
                    <h3 class="text-position">Perfil Personal</h3>
                </v-btn>
            </v-col>
            <v-col>
                <v-btn class="button-style" size="300px" >
                    <v-icon size="200px"> mdi-text-box-plus-outline </v-icon>
                    <h3 class="text-position">Registro de Programas</h3>
                </v-btn>
            </v-col>
            <v-col>
                <v-btn @click="openInstructorFinder()" class="button-style" size="300px">
                    <v-icon size="200px"> mdi-account-search-outline </v-icon>
                    <h3 class="text-position">Buscar Prospectos</h3>
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn class="button-style" size="300px">
                    <v-icon size="200px"> mdi-account-question-outline </v-icon>
                    <h3 class="text-position">Postulantes</h3>
                </v-btn>
            </v-col>
            <v-col>
                <v-btn class="button-style" size="300px">
                    <v-icon size="200px"> mdi-calendar-clock-outline </v-icon>
                    <h3 class="text-position">Reuniones Pendientes</h3>
                </v-btn>
            </v-col>
            <v-col>
                <v-btn class="button-style" size="300px">
                    <v-icon size="200px"> mdi-certificate-outline </v-icon>
                    <h3 class="text-position">Certifaciones Docentes</h3>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
    
</template>
<script>
import router from '@/router';


export default{
    methods:
    {
        openInstructorFinder(){
            let instructorFinderTab = router.resolve({name: 'instructorFinder'})
            window.open(instructorFinderTab.href)
        },
        openStaffProfile(){
            let staffProfileTab = router.resolve({name: 'staffProfile'})
            window.open(staffProfileTab.href)
        },
    },
    

}
</script>
<style>
.button-style{
    position: relative;
}
.text-position{
    position: absolute;
    margin-top: 75%;
}

</style>
