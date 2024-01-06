<template>
  <h1>Formulario de Invitación</h1>
  <h3>{{ this.idUser }}</h3>
  <v-form>
    <v-label> Nombre del Programa </v-label>
    <v-text-field
    label="Palabra Clave"
    ></v-text-field>

  </v-form>
</template>
<script>
import { ref } from 'vue';
import { database } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export default {
  props: ["userId"],
  data() {
    return {
      idUser: this.userId,
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
      programs.forEach((program) => {
          this.programList.push(program);
      });
      console.log(programs.size);
    },
  },
};
</script>
<style>
</style>