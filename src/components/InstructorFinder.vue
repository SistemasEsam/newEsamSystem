<template>
  <div>
    <div>
      <v-container>
        <v-row>
          <v-col>
            <v-text-field
              v-model="keyWordFilter"
              label="Ingrese datos a buscar"
            ></v-text-field>
            <v-radio-group label="Nivel de Educacion" v-model="filterEducation">
              <v-radio
                label="Pregrado"
                id="degree"
                value="degrees"
                @change="enableLevelPostDegree(true)"
              >
              </v-radio>
              <v-radio
                label="Postgrado"
                id="postDegree"
                value="postDegrees"
                @change="enableLevelPostDegree(false)"
              >
              </v-radio>
              <v-radio
                label="Cursos"
                id="courses"
                value="courses"
                @change="enableLevelPostDegree(true)"
              >
              </v-radio>
            </v-radio-group>
            <v-btn @click="searchByFilter()">Buscar</v-btn>
          </v-col>
          <v-col>
            <v-select
              :disabled="flagLevelPostDegree"
              v-model="levelPostDegree"
              label="Nivel Postgrado"
              :items="filterLevelPostDegree"
            >
            </v-select>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div>
      <v-card
        v-for="(instructor, index) in instructorFilteredList"
        :key="index"
      >
        <v-card-title>
          {{ instructor.data().name }} {{ instructor.data().lastNameF }}
          {{ instructor.data().lastNameM }}
        </v-card-title>
        <v-card-subtitle>
          e-Mail: {{ instructor.data().email }}
          <br />
          Documento: {{ instructor.data().numberId }}
          <br />
          Telefono: {{ instructor.data().personalPhone }}
        </v-card-subtitle>
        <v-card-actions>
          <v-btn :to="{ name: 'pdf', params: { id: instructor.data().email } }">
            Abrir
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>
<script>
import { database } from "@/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { ref } from "vue";

export default {
  data() {
    return {
      filterEducation: "",
      flagLevelPostDegree: true,
      keyWordFilter: "",
      levelPostDegree: "",
      instructorList: ref([]),
      instructorIDList: [],
      instructorFilteredList: ref([]),
      filterLevelPostDegree: [
        "Diplomado",
        "Especialidad Técnica",
        "Especialidad Superior",
        "Especialidad Clínico Quirúrgico",
        "Maestría M.Sc.",
        "Maestría Mgr.",
        "Master",
        "Doctorado Ph.D.",
        "Posdoctorado",
      ],
    };
  },
  created() {
    this.getInstructorsList();
  },
  methods: {
    enableLevelPostDegree(flag) {
      this.flagLevelPostDegree = flag;
    },
    async getInstructorsList() {
      const instructors = await getDocs(collection(database, "instructors"));
      instructors.forEach((instructor) => {
        this.instructorList.push(instructor);
      });
    },
    async searchByFilter() {
      this.instructorFilteredList = [];
      console.log(this.filterEducation);
      this.instructorList.forEach(async (instructor) => {
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
      });
    },
  },
};
</script>
