<template>
  <h1>Formulario de Invitación</h1>
  <h3>{{ this.idUser }}</h3>
  <v-container>
    <v-form>
      <v-label> Filtro de busquedad </v-label>
      <v-select
        v-model="programFilter"
        label="Buscar programa por:"
        :items="[
          'Area',
          'Coordinador',
          'Código de Programa',
          'Nombre de Programa',
          'Sede',
        ]"
      >
      </v-select>
      <v-label> Nombre del Programa </v-label>
      <v-text-field
        v-model="keyWordProgram"
        label="Palabra Clave"
      ></v-text-field>
    </v-form>
    <v-btn @click="searchProgram()">Buscar Programa</v-btn>
  </v-container>
  <v-container>
    <h4>Coincidencias:</h4>
    <v-card v-for="(program, index) in programListFiltered" :key="index">
      <v-card-title>
        <h4>Nombre del Programa</h4>
        {{program.data().programName}}
      </v-card-title>
      <v-card-subtitle>
        Coordinador: {{ program.data().programCoordinator }}
        <br>
        Area: {{ program.data().programArea }}
        <br>
        Sede: {{ program.data().programSite }}
        <br>
        Código: {{ program.data().programId }}
        <br>
      </v-card-subtitle>
      <v-card-actions>
        <v-btn @click="openProgram(program.data().programId)" variant="outlined"> Abrir Programa </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script>
import { ref } from "vue";
import { database } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export default {
  props: ["userId"],
  data() {
    return {
      idUser: this.userId,
      programFilter: "",
      keyWordProgram: "",
      programList: ref([]),
      programListFiltered: ref([]),
    };
  },
  created() {
    this.getProgramsList();
  },
  methods: {
    showNextForm(programIdSelected){
      let nextComponent = 'invitation-module-section'
      this.$emit('show-next-form', nextComponent, [this.idUser,programIdSelected]);
    },
    async getProgramsList() {
      const programs = await getDocs(
        collection(database, "postDegreePrograms")
      );
      programs.forEach((program) => {
        this.programList.push(program);
      });
      console.log(programs.size);
    },
    searchProgram() {
      this.programList.forEach((program) => {
        switch (this.programFilter) {
          case "Area":
            if (
              program
                .data()
                .programArea.toLowerCase()
                .includes(this.keyWordProgram.toLowerCase())
            ) {
              this.programListFiltered.push(program);
            }
            break;
          case "Coordinador":
            if (
              program
                .data()
                .programCoordinator.toLowerCase()
                .includes(this.keyWordProgram.toLowerCase())
            ) {
              this.programListFiltered.push(program);
            }
            break;
          case "Código de Programa":
            if (
              program
                .data()
                .programId.toLowerCase()
                .includes(this.keyWordProgram.toLowerCase())
            ) {
              this.programListFiltered.push(program);
            }
            break;
          case "Nombre de Programa":
            if (
              program
                .data()
                .programName.toLowerCase()
                .includes(this.keyWordProgram.toLowerCase())
            ) {
              this.programListFiltered.push(program);
            }
            break;
          case "Sede":
            if (
              program
                .data()
                .programSite.toLowerCase()
                .includes(this.keyWordProgram.toLowerCase())
            ) {
              this.programListFiltered.push(program);
            }
            break;
        }
      });
    },
    openProgram(programId){
      this.showNextForm(programId)
    },
  },
};
</script>
<style>
</style>