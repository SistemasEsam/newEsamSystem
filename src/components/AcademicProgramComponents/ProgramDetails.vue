<template>
    <v-container>
        <h2>Detalles del Programa: {{this.programId}}</h2>
    </v-container>
</template>
<script>
import { database } from "../../firebase/firebase";
import { doc, collection, getDocs, setDoc } from "firebase/firestore";
import { ref } from "vue";

export default {
    props:["programId"],
    data(){
        return {

        }
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

    }

}
</script>
<style>

</style>