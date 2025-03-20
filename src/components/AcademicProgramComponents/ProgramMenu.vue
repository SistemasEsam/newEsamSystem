<template>
  <v-container>
    <h2>Busqueda:</h2>
    <v-label> </v-label>
    <div class="search-program">
      <v-select
        variant="outlined"
        label="Parametro de busqueda:"
        v-model="programKeySearchWord"
        :items="programSearchFilter"
        item-title="programFilter"
        item-value="filterCode"
      >
      </v-select>
      <v-text-field
        class="search-program"
        label="Palabra clave"
        variant="outlined"
      >
      </v-text-field>
    </div>
    <v-btn variant="outlined" @click="searchProgramByFilter()">Buscar</v-btn>
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

  <v-container>
  <v-row>
    <v-col
      v-for="(program, index) in programList"
      :key="index"
      cols="12"       
      sm="6"          
      md="4"         
      lg="3"          
    >
      <v-card
        @click="openProgram(program.data().programId)"
        class="program-card"
        hover
      >
        <v-card-title class="program-name">
          <div style="white-space: normal; word-break: break-word;">
            {{ program.data().programName }}
          </div>
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
    </v-col>
  </v-row>
</v-container>


<v-container>
    <v-data-table
      :headers="headers"
      :items="programList" 
      :items-per-page="10" 
      class="elevation-1" 
    >
    </v-data-table>
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
      headers: [
        { text: "Nombre del programa", value: "programName", align: "start", sortable: true },
        { text: "Código contable", value: "programId", sortable: true },
        { text: "Responsable", value: "programCoordinator", sortable: true },
        { text: "Tipo de programa", value: "programType", sortable: true },
        { text: "Área", value: "programArea", sortable: true },
      ],
    };
  },
  created() {
    this.getProgramsList();
  },
  methods: {
    async getProgramsList() {
      try {
        // Obtener los documentos de Firestore
        const programsSnapshot = await getDocs(
          collection(database, "postDegreePrograms")
        );
        // Crear un array temporal para almacenar los programas
        const tempProgramList = [];

        // Recorrer los documentos y agregarlos al array temporal
        programsSnapshot.forEach((programDoc) => {
          tempProgramList.push(programDoc); // Usar programDoc.data() para obtener los datos del documento
        });

        // Asignar el array temporal a this.programList
        this.programList = tempProgramList;

        // Opcional: Registrar el número de programas obtenidos (solo para depuración)
        console.log(
          `Número de programas obtenidos: ${this.programList.length}`
        );
      } catch (error) {
        // Manejar errores en la consulta a Firestore
        console.error("Error al obtener la lista de programas:", error);

        // Opcional: Mostrar un mensaje al usuario o lanzar el error nuevamente
        throw new Error(
          "No se pudo obtener la lista de programas. Por favor, inténtalo de nuevo."
        );
      }
    },
    openProgram(programId) {
      this.showNextComponent(programId);
    },
    showNextComponent(programId) {
      let nextComponent = "program-details";
      this.$emit("show-next-component", nextComponent, programId);
    },
    async searchProgramByFilter() {
      this.programListFiltered = [];
      this.initialInstructorList.forEach(async (instructor) => {
        const dataListFiltered = await getDocs(
          collection(
            database,
            "instructors",
            instructor.data().email,
            this.filterEducation
          )
        );
        dataListFiltered.forEach((dataFiltered) => {
          switch (this.filterEducation) {
            case "degrees":
              if (
                dataFiltered
                  .data()
                  .careerDegree.toLowerCase()
                  .includes(this.keyWordFilter.toLowerCase())
              ) {
                this.instructorFilteredList.push(instructor);
              }
              break;
            case "postDegrees":
              if (
                dataFiltered
                  .data()
                  .namePostDegree.toLowerCase()
                  .includes(this.keyWordFilter.toLowerCase())
              ) {
                this.instructorFilteredList.push(instructor);
              }
              break;
            case "courses":
              if (
                dataFiltered
                  .data()
                  .nameCourse.toLowerCase()
                  .includes(this.keyWordFilter.toLowerCase())
              ) {
                this.instructorFilteredList.push(instructor);
              }
              break;
          }
        });
        this.instructorList = this.instructorFilteredList;
      });
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