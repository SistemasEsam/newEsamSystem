<template>
  <v-form>
    <v-container>
      <v-col>
        <v-row>
          <h3>Código</h3>
          <v-container>
            <v-text-field
              v-model="programId"
              label="Código del Programa"
            ></v-text-field>
          </v-container>
        </v-row>
        <v-row>
          <h3>Programa</h3>
          <v-container>
            <v-text-field
              v-model="programName"
              label="Nombre del Programa"
            ></v-text-field>
          </v-container>
        </v-row>
        <v-row>
          <h3>Sede</h3>
          <v-container>
            <v-select
              v-model="programSite"
              label="Sede del Programa"
              :items="programSites"
              item-title="siteName"
              item-value="siteCode"
            ></v-select>
          </v-container>
        </v-row>
        <v-row>
          <h3>Tipo de Programa</h3>
          <v-container>
            <v-select
              v-model="programType"
              label="Tipo de Programa"
              :items="['Curso', 'Diplomado', 'Maestria', 'Especialidad']"
            ></v-select>
          </v-container>
        </v-row>
        <v-row>
          <h3>Area del Programa</h3>
          <v-container>
            <v-select
              v-model="programArea"
              label="Area"
              :items="['Empresarial', 'Ingenieria', 'Legal', 'Salud', 'Social']"
            ></v-select>
          </v-container>
        </v-row>
        <v-row>
          <h3>Coordinador</h3>
          <v-container>
            <v-text-field
              v-model="programCoordinator"
              label="Coordinador del Programa"
            ></v-text-field>
          </v-container>
        </v-row>
        <v-row>
          <h3>Modulos</h3>
          <v-container>
            <v-form v-for="(moduleForm, index) in moduleForms" :key="index">
              <v-btn
                append-icon
                color="red"
                v-if="index !== 0"
                @click="deleteModuleForm(index)"
              >
                <v-icon size="x-large">mdi-close-thick</v-icon>
              </v-btn>
              <v-text-field v-model="moduleForm.moduleName" label="Nombre del Modulo"></v-text-field>
              <VueDatePicker
                v-model="moduleForm.moduleDates"
                :enable-time-picker="false"
                multi-dates
                placeholder="Fechas de clases"
              ></VueDatePicker>
              <br />
              <v-textarea v-model="moduleForm.moduleContent" label="Contenido del Modulo"></v-textarea>
            </v-form>
            <v-btn v-if="moduleForms.length < 9" @click="addModuleForm()">
              Añadir Modulo
            </v-btn>
          </v-container>
        </v-row>
      </v-col>
      <br />
      <v-btn @click="saveData()"> Guardar Programa</v-btn>
    </v-container>
  </v-form>
</template>
<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { database } from "../../firebase/firebase";
import { doc, collection, setDoc } from "firebase/firestore";

export default {
  components: {
    VueDatePicker,
  },
  data() {
    return {
      programId: "",
      programName: "",
      programSite: "",
      programType: "",
      programArea: "",
      programCoordinator: "",
      moduleForms: [
        {
          moduleName: "",
          moduleCode: "",
          moduleDates: "",
          moduleContent: "",
        },
      ],
      programSites: [
        { siteName: "ESAM Tarija 1", siteCode: "1" },
        { siteName: "ESAM Tarija 2", siteCode: "2" },
        { siteName: "ESAM Sucre", siteCode: "3" },
        { siteName: "ESAM Potosí", siteCode: "4" },
        { siteName: "ESAM Santa Cruz", siteCode: "5" },
        { siteName: "ESAM Yacuiba", siteCode: "6" },
        { siteName: "ESAM Camargo", siteCode: "7" },
        { siteName: "ESAM Cochabamba", siteCode: "8" },
        { siteName: "ESAM La Paz", siteCode: "9" },
        { siteName: "ESAM Santa Cruz Sucursal", siteCode: "10" },
        { siteName: "ESAM Monteagudo", siteCode: "11" },
        { siteName: "Benito Juarez", siteCode: "12" },
        { siteName: "ESAM Sucre Sucursal", siteCode: "13" },
        { siteName: "ESAM La Paz Sucursal", siteCode: "14" },
        { siteName: "ESAM Cochabamba Sucursal", siteCode: "15" },
        { siteName: "ESAM Oruro", siteCode: "16" },
        { siteName: "ESAM Potosí Sucursal", siteCode: "17" },
        { siteName: "ESAM Tarija 3", siteCode: "18" },
        {
          siteName: "Dirección Nacional de Formación Continua",
          siteCode: "19",
        },
        { siteName: "Grupo Coorporativo", siteCode: "20" },
      ],
    };
  },
  setup() {},
  methods: {
    addModuleForm() {
      this.moduleForms.push({
        moduleName: "",
        moduleCode: "",
        moduleDates: "",
        moduleContent: "",
      });
    },
    deleteModuleForm(index) {
      this.moduleForms.splice(index, 1);
    },
    saveProgram() {
      const programInitials = this.programName
        .split(" ")
        .map((x) => x[0])
        .join("");
      const date = new Date();
      this.programId =
        programInitials.toUpperCase() +
        "-" +
        this.programSite * 1000 +
        "-" +
        (date.getFullYear() + "").substring(2, 4);
      console.log(this.programId);
      setDoc(doc(database, "postDegreePrograms", this.programId), {
        programId: this.programId,
        programName: this.programName,
        programSite: this.programSite,
        programType: this.programType,
        programArea: this.programArea,
        programCoordinator: this.programCoordinator,
      });
    },
    saveModules() {
      const documentRef = doc(database, "postDegreePrograms", this.programId);
      const collectionRef = collection(documentRef, "modules");
      this.moduleForms.forEach((moduleForm) => {
        const moduleInitials = moduleForm.moduleName
        .split(" ")
        .map((x) => x[0])
        .join("");
        console.log(moduleInitials)
        this.moduleCode = this.programId+'-'+moduleInitials
        
        /* addDoc(collectionRef, {
          moduleName: this.programId+'-'+moduleInitials,
          moduleCode: this.moduleCode,
          moduleDates: this.moduleDates,
          moduleContent: this.moduleContent,
        }); */
      });
    },
    saveData(){
      this.saveProgram()
      this.saveModules()
    },
  },
};
</script>
<style>
</style>