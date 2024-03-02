<template>
  <v-container>
    <h2>Detalles del Programa: {{ this.idProgram }}</h2>
    <v-card
      class="mb-2"
      v-for="(programModule, index) in moduleList"
      :key="index"
    >
      <v-card-title>{{
        programModule.moduleOrder + " : " + programModule.moduleName
      }}</v-card-title>
      <v-card-subtitle class="subtitle-instructor"
        >Docente actual</v-card-subtitle
      >
      <v-card-subtitle>
        Nombre:
        {{ programModule.moduleInstructorName }}</v-card-subtitle
      >
      <v-card-subtitle
        >Correo: {{ programModule.moduleInstructorEmail }}</v-card-subtitle
      >
      <v-card-subtitle
        >Telefono: {{ programModule.moduleInstructorPhone }}</v-card-subtitle
      >
      <v-checkbox
        v-model="programModule.updateModuleData"
        label="Asignar/Cambiar docente:"
      ></v-checkbox>
      <v-card-item>
        <v-form v-if="programModule.updateModuleData">
          <v-select
            v-model="programModule.moduleInstructorOption"
            label="Docente"
            :items="instructorOptionList"
            item-title="optionName"
            item-value="optionCode"
          ></v-select>
          <v-select
            v-if="programModule.moduleInstructorOption == 1"
            v-model="programModule.moduleInstructor"
            label="Docente"
            :items="instructorList"
            item-title="instructorName"
            return-object
            filled
          >
          </v-select>
          <v-form v-else-if="programModule.moduleInstructorOption == 2">
            <v-text-field
              v-model="programModule.moduleInstructorName"
              label="Nombre del Docente"
            ></v-text-field>
            <v-text-field
              v-model="programModule.moduleInstructorEmail"
              label="Correo del Docente"
            ></v-text-field>
            <v-text-field
              v-model="programModule.moduleInstructorPhone"
              label="Telefono del Docente"
            ></v-text-field>
          </v-form>
          <v-select
            v-model="programModule.moduleInvoice"
            label="Facturación"
            :items="invoiceOptionList"
            item-title="invoiceName"
            item-value="invoiceCode"
          ></v-select>
        </v-form>
        <v-btn :disabled="!programModule.updateModuleData" variant="outlined" @click="updateModule(programModule)">Actualizar módulo</v-btn>
        <v-btn variant="outlined" @click="openLetter(programModule.moduleInstructorEmail, programModule.moduleCode)">Invitación</v-btn>
      </v-card-item>
    </v-card>
  </v-container>
</template>
<script>
import { database } from "../../firebase/firebase";
import { setDoc, doc, updateDoc, collection, getDocs} from "firebase/firestore";
import { ref } from "vue";

export default {
  props: ["idArray"],
  data() {
    return {
      idProgram: this.idArray,
      moduleList: ref([]),
      instructorList: [],
      instructorStatus: 1,

      instructorOptionList: [
        { optionName: "Antiguo (Presente en la base datos)", optionCode: "1" },
        { optionName: "Nuevo (Primera experiencia laboral)", optionCode: "2" },
      ],
      invoiceOptionList: [
        { invoiceName: "Factura", invoiceCode: "0" },
        { invoiceName: "Retención", invoiceCode: "1" },
        {
          invoiceName: "Internacional (No aplica facturación)",
          invoiceCode: "2",
        },
      ],
    };
  },
  created() {
    this.getModulesList();
    this.getInstructorsList();
  },
  methods: {
    async getInstructorsList() {
      const instructors = await getDocs(collection(database, "instructors"));
      instructors.forEach((instructor) => {
        if (instructor.data().status == this.instructorStatus) {
          this.instructorList.push({
            instructorName:
              instructor.data().name +
              " " +
              instructor.data().lastNameF +
              " " +
              instructor.data().lastNameM,
            instructorEmail: instructor.data().email,
            instructorPhone: instructor.data().personalPhone,
          });
        }
      });
    },
    async getModulesList() {
      let finalModuleList = [];
      const modules = await getDocs(
        collection(database, "postDegreePrograms", this.idProgram, "modules")
      );
      modules.forEach((module) => {
        let moduleDates = this.formatDate(module.data().moduleDates);
        finalModuleList.push({
          moduleOrder: module.data().moduleOrder,
          moduleCode: module.data().moduleCode,
          moduleName: module.data().moduleName,
          moduleInstructorOption: "",
          moduleInstructor: null,
          moduleInstructorName: module.data().moduleInstructorName,
          moduleInstructorEmail: module.data().moduleInstructorEmail,
          moduleInstructorPhone: module.data().moduleInstructorPhone,
          moduleInvoice: module.data().moduleInvoice,
          moduleDates: moduleDates,
          moduleStartHour: module.data().moduleStartHour,
          moduleEndHour: module.data().moduleEndHour,
          moduleContent: module.data().moduleContent,
          updateModuleData: false,
        });
      });
      finalModuleList.sort(this.compareByModuleOrder);
      this.moduleList = finalModuleList;
    },
    formatDate(dates) {
      const formatedDates = [];
      dates.forEach((date) => {
        const listDate = new Date(date);
        const newDate =
          listDate.getDate() +
          "/" +
          (listDate.getMonth() + 1) +
          "/" +
          listDate.getFullYear();
        formatedDates.push(newDate);
      });
      return formatedDates;
    },
    compareByModuleOrder(module1, module2) {
      return module1.moduleOrder.localeCompare(module2.moduleOrder);
    },
    openLetter(moduleInstructor, moduleCode){
      this.showNextComponent(moduleInstructor, moduleCode)
    },
    showNextComponent(moduleInstructor, moduleCode){
      let nextComponent = 'invitation-letter'
      this.$emit('show-next-component', nextComponent, [moduleInstructor, moduleCode]);
    },
    async updateModule(programModule){
      const moduleRef = doc(database, "postDegreePrograms", this.idProgram, "modules", programModule.moduleCode)
      if(programModule.moduleInstructorOption == 1){
        console.log(programModule.moduleCode)
        programModule.moduleInstructorName = programModule.moduleInstructor.instructorName
        programModule.moduleInstructorEmail = programModule.moduleInstructor.instructorEmail
        programModule.moduleInstructorPhone = programModule.moduleInstructor.instructorPhone

        await updateDoc(moduleRef,{
          moduleInstructorName : programModule.moduleInstructor.instructorName,
          moduleInstructorEmail : programModule.moduleInstructor.instructorEmail,
          moduleInstructorPhone : programModule.moduleInstructor.instructorPhone,

        })
      }else{
        await updateDoc(moduleRef,{
          moduleInstructorName : (programModule.moduleInstructorName).toUpperCase(),
          moduleInstructorEmail : programModule.moduleInstructorEmail,
          moduleInstructorPhone : programModule.moduleInstructorPhone,
        })
      }
    },
  },
};
</script>
<style>
.subtitle-instructor {
  font-size: large;
}
</style>