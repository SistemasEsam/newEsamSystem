<template>
  <h2>Selector de Módulo</h2>
  <v-container>
    <v-card v-for="(programModule, index) in moduleList" :key="index">
        <v-card-title>
           Nombre del Módulo {{programModule.data().moduleName}}
        </v-card-title>
        <v-card-subtitle>
            Código del Módulo {{ programModule.data().moduleCode }}
        </v-card-subtitle>
        <v-card-text>
            Contenido del Módulo: {{programModule.data().moduleContent}}
        </v-card-text>
        <v-card-text>
            Fechas del Módulo: {{programModule.data().moduleDates}}
        </v-card-text>
        <v-card-actions>
            <v-btn variant="outlined">
                Seleccionar
            </v-btn>
        </v-card-actions>
    </v-card>
  </v-container>
</template>
<script>
import { database } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { ref } from "vue";
import { list } from 'firebase/storage';


export default {
  props: ["userId"],
  data() {
    return {
      idUser: this.userId,
      moduleList: ref([]),
    };
  },
  created(){
    this.getModulesList();
  },
  methods: {
    async getModulesList() {
      const modules = await getDocs(
        collection(database, "postDegreePrograms",this.idUser[1],"modules")
      );
      modules.forEach((module) => {
        module.data().moduleDates = this.formatDate(module.data().moduleDates)
        console.log(module.data().moduleDates)
        this.moduleList.push(module);
      });
    },
    formatDate(dates){
        const formatedDates = []
        dates.forEach((date)=>{
            const listDate = new Date(date)
            const newDate = listDate.getDate()+"/"+(listDate.getMonth() + 1)+"/"+listDate.getFullYear()
            formatedDates.push(newDate)
        })
        console.log(formatedDates)
        return formatedDates
    }
  },
};
</script>
<style>
</style>