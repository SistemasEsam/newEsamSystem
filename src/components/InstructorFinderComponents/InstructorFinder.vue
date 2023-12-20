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
            <v-btn class="button-form" @click="searchByFilter()">Buscar</v-btn>
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
      <v-container>
        <h1 class="sub-title">Resultados {{ this.status }}</h1>
        <v-card
          class="mb-4"
          v-for="(instructor, index) in instructorList"
          :key="index"
        >
          <v-card-title class="sub-title">
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
          <p v-if="instructor.data().status == 0">Estado: Pendiente</p>
          <v-card-actions>
            <!-- <v-btn :to="{ name: 'pdf', params: { id: instructor.data().email }}" target ='_blank'> -->
            <v-btn class="button-card" @click="openCV(instructor.data().email)">
              Abrir
            </v-btn>
            <v-btn class="button-card" @click="sendInvitation()">
              Invitar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </div>
  </div>
</template>
<script>
import { database } from "@/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { ref } from "vue";
import router from "@/router";

export default {
  props: ["status"],
  data() {
    return {
      statusToShow: this.status,
      filterEducation: "",
      flagLevelPostDegree: true,
      keyWordFilter: "",
      levelPostDegree: "",
      instructorList: ref([]),
      initialInstructorList: ref([]),
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
      console.log("This is the current status: "+ this.status)
      const instructors = await getDocs(collection(database, "instructors"));
      instructors.forEach((instructor) => {
        if (instructor.data().status == this.statusToShow) {
          this.initialInstructorList.push(instructor);
        }
      });
      this.instructorList = this.initialInstructorList;
    },
    async searchByFilter() {
      this.instructorFilteredList = [];
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
    openCV(instructorID) {
      let newTab = router.resolve({
        name: "PDFView",
        params: { id: instructorID },
      });
      window.open(newTab.href);
    },
  },
};
</script>
