<template>
    <v-container>
      <h2>Filtros de busqueda:</h2>
      <v-label>
        
      </v-label>
      <v-text-field label="Nombre de programa" variant="outlined">
      </v-text-field>
      <v-select variant="outlined" label="Area de programa"></v-select>
      <v-select variant="outlined" label="Tipo de programa"></v-select>
      <VueDatePicker placeholder="Gestión del programa" class="mb-5" v-model="programYear" year-picker></VueDatePicker>
      <v-btn variant="outlined">Buscar</v-btn>
    </v-container>
    <v-container>
        <v-card variant="outlined" v-for="(program, index) in programList"
          :key="index"
          @click="openProgram(program.data().programId)"
          class="program-card">
            <v-card-title>
                {{program.data().programName}}
            </v-card-title>
            <v-card-subtitle>
                {{program.data().programId}}
                <br>
                {{program.data().programCoordinatorName+" "+program.data().programCoordinatorLastame}}
                <br>
                {{program.data().programType}}
                <br>
                {{program.data().programArea}}
            </v-card-subtitle>
        </v-card>
    </v-container>
</template>
<script>
import { ref } from "vue";
import { database } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import VueDatePicker from "@vuepic/vue-datepicker";


export default {
  data() {
    return {
        programList: ref([]), 
    };
  },
  created() {
    this.getProgramsList();
  },
  methods: {
    async getProgramsList() {
      const programs = await getDocs(
        collection(database, "postDegreePrograms")
      );
      console.log(programs.size)
      programs.forEach(program => {
        this.programList.push(program)
      });
    },
    openProgram(programId){
        this.showNextComponent(programId)
    },
    showNextComponent(programId){
        let nextComponent = "program-details"
        this.$emit("show-next-component",nextComponent,programId )
    },
  },
};
</script>
<style>
.program-card{
  margin-bottom: 0.5rem;
}
</style>