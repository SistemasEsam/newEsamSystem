<template>
  <v-container>
    <h2>Filtros de busqueda:</h2>
    <v-label> </v-label>
    <div class="search-program">
      <v-select
        variant="outlined"
        label="Area de programa"
        v-model="programKeySearchWord"
        :items="programSearchFilter"
        item-title="programFilter"
        item-value="filterCode"
      >
      </v-select>
      <v-text-field
        class="search-program"
        label="Nombre de programa"
        variant="outlined"
      >
      </v-text-field>
    </div>
    <v-btn variant="outlined">Buscar</v-btn>
  </v-container>
  <v-container>
    <v-card
      v-for="(program, index) in programList"
      :key="index"
      @click="openProgram(program.data().programId)"
      class="program-card"
      hover
    >
      <v-card-title class="program-name">
        {{ program.data().programName }}
      </v-card-title>
      <v-card-text>
        <b>Código contable: </b>{{ program.data().programId }}
        <br />
        <b>Responsable: </b
        >{{
          program.data().programCoordinatorName +
          " " +
          program.data().programCoordinatorLastame
        }}
        <br />
        <b>Tipo de programa: </b>{{ program.data().programType }}
        <br />
        <b>Area: </b>{{ program.data().programArea }}
      </v-card-text>
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
      programKeySearchWord: "",
      programSearchFilter: [
        { programFilter: "Nombre", filterCode: "1" },
        { programFilter: "Tipo", filterCode: "2" },
        { programFilter: "Area", filterCode: "3" },
      ],
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
      console.log(programs.size);
      programs.forEach((program) => {
        this.programList.push(program);
      });
    },
    openProgram(programId) {
      this.showNextComponent(programId);
    },
    showNextComponent(programId) {
      let nextComponent = "program-details";
      this.$emit("show-next-component", nextComponent, programId);
    },
  },
};
</script>
<style>
.program-card {
  margin-bottom: 0.5rem;
  background-color: #f1f2f4;
}
.program-name {
  color: white;
  background-color: #6e7c8f;
  font-size: medium;
}
.search-program {
  display: inline;
}
</style>