<template>
  <v-btn @click="showPreviusComponent()"> Atras </v-btn>
  <v-container>
    <h2>Detalles del Programa: {{ this.idProgram }}</h2>
    <v-card
      variant="outlined"
      class="mb-2"
      v-for="(programModule, index) in moduleList"
      :key="index"
      :rounded="rounded"
      hover
    >
      <v-card-title class="program-name">{{
        programModule.moduleOrder + " : " + programModule.moduleName
      }}</v-card-title>
      <v-card-text class="subtitle-instructor">
        Nombre:
        {{ programModule.moduleInstructorName }}</v-card-text
      >
      <v-card-text class="subtitle-instructor"
        >Correo: {{ programModule.moduleInstructorEmail }}</v-card-text
      >
      <v-card-text class="subtitle-instructor"
        >Telefono: {{ programModule.moduleInstructorPhone }}</v-card-text
      >

      <v-card-item>
        <v-form
          v-if="programModule.updateModuleData"
          :disabled="!programModule.updateModuleData"
        >
          <v-select
            v-model="programModule.moduleInstructor"
            label="Docente"
            :items="instructorList"
            item-title="instructorName"
            return-object
            filled
          >
          </v-select>
          <v-select
            v-model="programModule.moduleInvoice"
            label="Facturación"
            :items="invoiceOptionList"
            item-title="invoiceName"
            item-value="invoiceCode"
          ></v-select>
          <v-text-field
            label="Pago"
            v-model="programModule.modulePayment"
            required
          >
          </v-text-field>
          <VueDatePicker
          v-model="programModule.moduleDates"
            :teleport="true"
            :enable-time-picker="false"
            multi-dates
            placeholder="Fecha de clases"
          ></VueDatePicker>
          <v-textarea
            label="Contenido mínimo"
            v-model="programModule.moduleContent"
          ></v-textarea>
        </v-form>
      </v-card-item>
      <v-card-actions>
        <v-btn
          :disabled="!programModule.updateModuleData"
          variant="outlined"
          @click="updateModule(programModule)"
          >Actualizar</v-btn
        >
        <v-btn
          variant="outlined"
          @click="
            openLetter(
              programModule.moduleInstructorEmail,
              programModule.moduleCode
            )
          "
          >Invitación
        </v-btn>
        <v-checkbox
          v-model="programModule.updateModuleData"
          label="Actualizar módulo:"
        ></v-checkbox>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { database } from "../../firebase/firebase";
import { doc, updateDoc, collection, getDocs } from "firebase/firestore";
import { ref } from "vue";
import router from "@/router";

export default {
  components:{
    VueDatePicker,
  },
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
          moduleDates: module.data().moduleDates,
          moduleStartHour: module.data().moduleStartHour,
          moduleEndHour: module.data().moduleEndHour,
          moduleContent: module.data().moduleContent,
          updateModuleData: false,
          modulePayment: module.data().modulePayment,
        });
      });
      finalModuleList.sort(this.compareByModuleOrder);
      this.moduleList = finalModuleList;
    },
    compareByModuleOrder(module1, module2) {
      return module1.moduleOrder.localeCompare(module2.moduleOrder);
    },
    openLetter(moduleInstructor, moduleCode) {
      console.log(
        "Instructor: " + moduleInstructor + "Codigo de Modulo:" + moduleCode
      );
      let newTab = router.resolve({
        name: "invitationPDFView",
        params: { id: moduleInstructor, moduleId: moduleCode },
      });
      window.open(newTab.href);
    },
    showNextComponent(moduleInstructor, moduleCode) {
      let nextComponent = "invitation-letter";
      this.$emit("show-next-component", nextComponent, [
        moduleInstructor,
        moduleCode,
      ]);
    },
    async updateModule(programModule) {
      let instructorNameUpdated = programModule.moduleInstructor.instructorName;
      let instructorEmailUpdated =
        programModule.moduleInstructor.instructorEmail;
      let instructorPhoneUpdated =
        programModule.moduleInstructor.instructorPhone;
      programModule.moduleInstructorName = instructorNameUpdated;
      programModule.moduleInstructorEmail = instructorEmailUpdated;
      programModule.moduleInstructorPhone = instructorPhoneUpdated;
      let dates = JSON.parse(JSON.stringify(programModule.moduleDates));
      const moduleRef = doc(
        database,
        "postDegreePrograms",
        this.idProgram,
        "modules",
        programModule.moduleCode
      );
      await updateDoc(moduleRef, {
        moduleInstructorName: instructorNameUpdated,
        moduleInstructorEmail: instructorEmailUpdated,
        moduleInstructorPhone: instructorPhoneUpdated,
        modulePayment: programModule.modulePayment,
        moduleInvoice: programModule.moduleInvoice,
        moduleContent: programModule.moduleContent,
        moduleDates: dates,
      });
    },
    updateModuleContent() {
      this.incident.incidentFreeText = value;
    },
    showPreviusComponent() {
      let nextComponent = "program-menu";
      this.$emit("show-next-component", nextComponent);
    },
  },
};
</script>
<style>
.subtitle-instructor {
  font-size: medium;
  margin-bottom: -1rem;
}
.program-name {
  color: white;
  background-color: #6e7c8f;
  font-size: medium;
  margin-bottom: 1rem;
}
</style>