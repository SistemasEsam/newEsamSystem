<template>
    <v-container>
        <v-card v-for="(program, index) in programList"
          :key="index"
          @click="openProgram(program.data().programId)">
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
import { database } from "../../firebase/firebase";
import { doc, collection, getDocs, setDoc } from "firebase/firestore";
import { ref } from "vue";

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
</style>