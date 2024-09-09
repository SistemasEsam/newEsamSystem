<template>
  <v-form class="program-main">
    <v-container class="program-form">
      <v-container>
        <v-card class="card-layout">
          <v-card-title class="subtitle-program-form">
            Código de Programa
          </v-card-title>
          <v-card-subtitle>
            Nota: Código contable establecido en el portal.
          </v-card-subtitle>
          <v-text-field
            class="text-field-input"
            v-model="programId"
            label="Código del Programa"
            @input="programId = programId.toUpperCase()"
            variant="outlined"
            required
          ></v-text-field>
        </v-card>
        <v-card class="card-layout">
          <v-card-title class="subtitle-program-form"
            >ID de Programa</v-card-title
          >
          <v-card-subtitle
            >Nota: ID del programa establecido en el portal.</v-card-subtitle
          >
          <v-text-field
            class="text-field-input"
            v-model="programPortalId"
            label="ID del Programa"
            @input="programPortalId = programPortalId.toUpperCase()"
            variant="outlined"
            required
          ></v-text-field>
        </v-card>
        <v-card class="card-layout">
          <v-card-title class="subtitle-program-form"
            >Nombre del Programa</v-card-title
          >
          <v-card-subtitle
            >Nota: Escriba el nombre completo del programa, tome en cuenta la
            ortografía.</v-card-subtitle
          >
          <v-text-field
            class="text-field-input"
            v-model="programName"
            label="Nombre del Programa"
            :rules="nameRules"
            @input="programName = programName.toUpperCase()"
            variant="outlined"
            required
          ></v-text-field>
        </v-card>
        <v-card class="card-layout">
          <v-card-title class="subtitle-program-form">Cronograma</v-card-title>
          <v-card-subtitle
            >Nota: Ingrese la fecha de inicio y la fecha de
            finalización.</v-card-subtitle
          >
          <VueDatePicker
            class="text-field-input"
            v-model="programYear"
            :teleport="true"
            range
            :partial-range="false"
            :enable-time-picker="false"
            placeholder="Inicio y Fin"
          ></VueDatePicker>
        </v-card>
        <v-card class="card-layout">
          <v-card-title class="subtitle-program-form">Sede</v-card-title>
          <v-card-subtitle
            >Nota: Seleccione la sucursal a la que corresponde el programa.
          </v-card-subtitle>
          <v-select
            class="text-field-input"
            v-model="programSite"
            label="Sede del Programa"
            :items="programESAMSites"
            item-title="siteName"
            item-value="siteCode"
            variant="outlined"
            required
          ></v-select>
        </v-card>
        <v-card class="card-layout">
          <v-card-title class="subtitle-program-form"
            >Tipo de Programa</v-card-title
          >
          <v-card-subtitle
            >Nota: Seleccione el tipo de programa.</v-card-subtitle
          >
          <v-select
            class="text-field-input"
            v-model="programType"
            label="Tipo de Programa"
            :items="programTypes"
            item-title="typeName"
            item-value="typeName"
            @update:model-value="
              updateModuleLimit();
              updateProgramDefaultPayment();
            "
          ></v-select>
        </v-card>
        <v-card class="card-layout">
          <v-card-title class="subtitle-program-form"
            >Area del Programa</v-card-title
          >
          <v-card-subtitle
            >Nota: Seleccione el area a la que pertenece el
            programa.</v-card-subtitle
          >
          <v-select
            class="text-field-input"
            v-model="programArea"
            label="Area"
            :items="programAreas"
            item-title="areaName"
            item-value="areaName"
            variant="outlined"
          ></v-select>
        </v-card>
        <v-card class="card-layout">
          <v-card-title class="subtitle-program-form">Coordinador</v-card-title>
          <v-card-subtitle
            >Nota: Ingrese los datos del coordinador/encargado del
            programa.</v-card-subtitle
          >
          <v-text-field
            class="text-field-input"
            v-model="programCoordinatorName"
            label="Nombre"
            @input="
              programCoordinatorName = programCoordinatorName.toUpperCase()
            "
            variant="outlined"
            required
          ></v-text-field>
          <v-text-field
            class="text-field-input"
            v-model="programCoordinatorLastname"
            label="Apellidos"
            @input="
              programCoordinatorLastname =
                programCoordinatorLastname.toUpperCase()
            "
            variant="outlined"
            required
          ></v-text-field>
          <v-text-field
            class="text-field-input"
            v-model="programCoordinatorEmail"
            label="Correo"
            variant="outlined"
            @input="programCoordinatorEmail = programCoordinatorEmail"
            required
          ></v-text-field>
        </v-card>
        <v-card class="card-layout">
          <v-card-title class="subtitle-program-form">Módulos</v-card-title>
          <v-card-subtitle
            >Nota: Llenar todos los datos del formulario.</v-card-subtitle
          >
          <v-container>
            <v-form
              variant="outlined"
              v-for="(moduleForm, index) in moduleForms"
              :key="index"
            >
              <v-btn
                append-icon
                color="red"
                v-if="index !== 0"
                @click="deleteModuleForm(index)"
              >
              Eliminar
                <v-icon size="x-large">mdi-close-thick</v-icon>
              </v-btn>
              <v-card class="card-layout" variant="flat">
                <v-card-title class="subtitle-module-form"
                  >Nombre de módulo</v-card-title
                >
                <v-card-subtitle
                  >Nota: Ingrese el nombre del módulo, tome en cuenta la
                  ortografía.</v-card-subtitle
                >
                <v-text-field
                  class="text-field-input"
                  v-model="moduleForm.moduleName"
                  label="Nombre del Módulo"
                  :rules="nameRules"
                  variant="outlined"
                  @input="
                    moduleForm.moduleName = moduleForm.moduleName.toUpperCase()
                  "
                ></v-text-field>
              </v-card>
              <v-card class="card-layout" variant="flat">
                <v-card-title class="subtitle-module-form"
                  >Requerimientos</v-card-title
                >
                <v-select
                  class="text-field-input"
                  v-model="moduleForm.moduleInstructorOption"
                  label="Docente"
                  :items="instructorOptionList"
                  item-title="optionName"
                  item-value="optionCode"
                  variant="outlined"
                ></v-select>
                <v-select
                  class="text-field-input"
                  v-if="moduleForm.moduleInstructorOption == 1"
                  v-model="moduleForm.moduleInstructor"
                  label="Docente"
                  :items="instructorList"
                  item-title="instructorName"
                  return-object
                  variant="outlined"
                  filled
                ></v-select>
                <v-select
                  class="text-field-input"
                  v-model="moduleForm.moduleInvoice"
                  label="Facturación"
                  :items="invoiceOptionList"
                  item-title="invoiceName"
                  item-value="invoiceCode"
                  variant="outlined"
                ></v-select>
              </v-card>
              <v-card class="card-layout" variant="flat">
                <v-card-title class="subtitle-module-form"
                  >Monto a pagar</v-card-title
                >
                <v-card-subtitle>Definir monto a pagar</v-card-subtitle>
                <v-text-field
                  class="text-field-input"
                  v-model="moduleForm.modulePayment"
                  label="Salario"
                  prefix="$"
                  :disabled="false"
                  variant="outlined"
                ></v-text-field>
              </v-card>
              <v-card class="card-layout" variant="flat">
                <v-card-title class="subtitle-module-form"
                  >Cronograma de clases</v-card-title
                >
                <v-card-subtitle
                  >Nota: Seleccione todas las fechas en las cuales se llevara a
                  cabo el módulo.</v-card-subtitle
                >
                <VueDatePicker
                  class="text-field-input"
                  :teleport="true"
                  v-model="moduleForm.moduleDates"
                  :enable-time-picker="false"
                  multi-dates
                  placeholder="Fecha de clases"
                ></VueDatePicker>
                <v-card-subtitle
                  >Nota: Seleccione la hora de inicio y la hora de finalización
                  del módulo.</v-card-subtitle
                >
                <div class="dateTime">
                  <div>
                    <v-card-subtitle>Hora de inicio</v-card-subtitle>
                    <VueDatePicker
                      v-model="moduleForm.moduleStartHour"
                      time-picker
                      :teleport="true"
                      placeholder="Hora Inicio"
                    ></VueDatePicker>
                  </div>
                  <div>
                    <v-card-subtitle>Hora de finalización</v-card-subtitle>
                    <VueDatePicker
                      v-model="moduleForm.moduleEndHour"
                      time-picker
                      :teleport="true"
                      placeholder="Hora Fin"
                    ></VueDatePicker>
                  </div>
                </div>
                <br />
              </v-card>
              <v-card class="card-layout" variant="flat">
                <v-card-title class="subtitle-module-form"
                  >Contenido</v-card-title
                >
                <v-card-subtitle
                  >Nota: Ingrese el contenido tentativo para el desarrollo del
                  módulo.</v-card-subtitle
                >
                <v-textarea
                  class="text-field-input"
                  v-model="moduleForm.moduleContent"
                  label="Contenido del Módulo"
                  :rules="moduleContenRules"
                  variant="outlined"
                ></v-textarea>
              </v-card>
            </v-form>
          </v-container>
          <v-card-actions>
            <v-btn
              class="module-button"
              variant="tonal"
              v-if="moduleForms.length < moduleLimits"
              @click="addModuleForm()"
              color="#516278"
            >
              Añadir Módulo
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
      <v-container>
        <v-card class="card-layout">
          <v-card-title class="subtitle-program-form">Archivo</v-card-title>
          <v-card-subtitle
            >Nota: Seleccione el documento del proyecto.
          </v-card-subtitle>
          <v-file-input
            class="text-field-input"
            @change="loadProgramProject($event)"
            label="Subir proyecto"
            chips
            accept="application/pdf"
            variant="outlined"
          ></v-file-input>
        </v-card>
      </v-container>
      <br />
      <v-btn color="#516278" variant="tonal" @click="saveData()"> Guardar Programa</v-btn>
      <v-dialog v-model="dialogFlag">
        <v-card>
          <v-card-text>
            El código del programas es:
            <b> {{ this.programId }} </b>
          </v-card-text>
          <v-card-actions>
            <v-btn
              variant="outlined"
              color="primary"
              block
              @click="closeDialog()"
              >Close Dialog</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-form>
</template>
<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { database } from "../../firebase/firebase";
import { doc, collection, getDocs, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";

export default {
  components: {
    VueDatePicker,
  },
  data() {
    return {
      dialogFlag: false,
      dateFlag: "",
      instructorStatus: 1,
      instructorList: [],
      currentYear: new Date().getFullYear(),
      programsQuantity: 0,
      moduleLimits: 0,

      programId: "",
      programPortalId: "",
      programName: "",
      programYear: "",
      programSite: "",
      programType: "",
      programDefaultPayment: "",
      programArea: "",
      programCoordinatorName: "",
      programCoordinatorLastname: "",
      programCoordinatorEmail: "",
      programProjectFile: null,

      nameRules: [
        (value) => {
          if (value) return true;

          return "Nombre obligatorio.";
        },
        (value) => {
          if (value?.length <= 10) return true;

          return "El nombre tiene que contener más de 10 caracteres.";
        },
      ],
      programCoordinatorRules: [
        (value) => {
          if (value) return true;

          return "Nombre de coordinador obligatorio.";
        },
        (value) => {
          if (value?.length <= 10) return true;

          return "El nombre del coordinador debe contener más de 10 caracteres.";
        },
      ],
      moduleContenRules: [
        (value) => {
          if (value) return true;

          return "Contenido del módulo obligatorio.";
        },
        (value) => {
          if (value?.length <= 20) return true;

          return "Contenido insuficiente. Debe ser más explícito.";
        },
      ],

      moduleForms: [
        {
          moduleOrder: "",
          moduleName: "",
          moduleCode: "",
          moduleInstructorOption: "",
          moduleInstructor: null,
          moduleInstructorName: "",
          moduleInstructorEmail: "",
          moduleInstructorPhone: "",
          moduleInvoice: "",
          modulePayment: "",
          moduleDates: "",
          moduleStartHour: { hours: 19, minutes: 0 },
          moduleEndHour: { hours: 22, minutes: 0 },
          moduleContent: "",
        },
      ],
      programESAMSites: [
        { siteName: "ESAM Sucre", siteCode: "1" },
        { siteName: "ESAM Potosí", siteCode: "2" },
        { siteName: "ESAM Camargo", siteCode: "3" },
        { siteName: "ESAM Santa Cruz", siteCode: "4" },
        { siteName: "ESAM Cochabamba", siteCode: "5" },
        { siteName: "ESAM Yacuiba", siteCode: "6" },
        { siteName: "ESAM Tarija", siteCode: "7" },
        { siteName: "ESAM Tarija Sucursal", siteCode: "8" },
        { siteName: "ESAM La Paz", siteCode: "9" },
        { siteName: "ESAM Santa Cruz Sucursal", siteCode: "10" },
        { siteName: "ESAM LATAM", siteCode: "11" },
        { siteName: "ESAM Monteagudo", siteCode: "12" },
        { siteName: "ESAM Sucre Sucursal", siteCode: "13" },
        { siteName: "ESAM La Paz Sucursal", siteCode: "14" },
        { siteName: "ESAM Cochabamba Sucursal", siteCode: "15" },
        { siteName: "ESAM Oruro", siteCode: "16" },
        { siteName: "ESAM Potosí Sucursal", siteCode: "17" },
        { siteName: "ESAM Tarija 3", siteCode: "18" },
      ],

      instructorOptionList: [
        {
          optionName: "No definido (En proceso de selección)",
          optionCode: "0",
        },
        { optionName: "Antiguo (Presente en la base datos)", optionCode: "1" },
      ],
      invoiceOptionList: [
        { invoiceName: "Emite Factura", invoiceCode: "0" },
        { invoiceName: "Pago con Retención", invoiceCode: "1" },
        {
          invoiceName: "Internacional (No aplica facturación)",
          invoiceCode: "2",
        },
      ],
      programTypes: [
        { typeName: "Curso" },
        { typeName: "Diplomado" },
        { typeName: "Maestría" },
        { typeName: "Especialidad" },
      ],
      programAreas: [
        { areaName: "Empresarial" },
        { areaName: "Ingenieria" },
        { areaName: "Legal" },
        { areaName: "Salud" },
        { areaName: "Social" },
      ],
    };
  },
  created() {
    this.getProgramsList();
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
    async getProgramsList() {
      const programs = await getDocs(
        collection(database, "postDegreePrograms")
      );
      this.programsQuantity = programs.size;
    },
    addModuleForm() {
      this.moduleForms.push({
        moduleOrder: "",
        moduleName: "",
        moduleCode: "",
        moduleInstructorOption: "",
        moduleInstructor: null,
        moduleInstructorName: "",
        moduleInstructorEmail: "",
        moduleInstructorPhone: "",
        moduleInvoice: "",
        modulePayment: this.programDefaultPayment,
        moduleDates: "",
        moduleStartHour: { hours: 19, minutes: 0 },
        moduleEndHour: { hours: 22, minutes: 0 },
        moduleContent: "",
      });
    },
    instructorNotDefine(moduleInstructorFlag) {
      return !moduleInstructorFlag;
    },
    disableInvoice() {
      this.invoiceFlag = !this.invoiceFlag;
    },
    deleteModuleForm(index) {
      this.moduleForms.splice(index, 1);
    },
    saveProgram() {
      if (this.programIdFlag) {
        const programInitials = this.programName
          .split(" ")
          .map((x) => x[0])
          .join("");
        const date = new Date();

        console.log((date.getFullYear() + "").substring(2, 4));
        this.programId =
          programInitials.substring(0, 5) +
          "-" +
          (this.programSite * 1000 + this.programsQuantity + 1) +
          "-" +
          (date.getFullYear() + "").substring(2, 4);
        console.log(this.programId);
      }
      setDoc(doc(database, "postDegreePrograms", this.programId), {
        programId: this.programId,
        programPortalId: this.programPortalId,
        programName: this.programName,
        programYear: JSON.parse(JSON.stringify(this.programYear)),
        programSite: this.programSite,
        programType: this.programType,
        programArea: this.programArea,
        programCoordinatorName: this.programCoordinatorName,
        programCoordinatorLastame: this.programCoordinatorLastname,
        programCoordinatorEmail: this.programCoordinatorEmail,
      });
    },
    saveModules() {
      this.moduleForms.forEach((moduleForm, index) => {
        console.log("Módulo: " + index);
        this.moduleCode = this.programId + "-M" + index;
        const dates = JSON.parse(JSON.stringify(moduleForm.moduleDates));
        const startHour = JSON.parse(
          JSON.stringify(moduleForm.moduleStartHour)
        );
        const endHour = JSON.parse(JSON.stringify(moduleForm.moduleEndHour));
        let instructorName;
        let instructorEmail;
        let instructorPhone;
        if (moduleForm.moduleInstructorOption == 0) {
          instructorName = "";
          instructorEmail = "";
          instructorPhone = "";
        } else if (moduleForm.moduleInstructorOption == 1) {
          instructorName = moduleForm.moduleInstructor.instructorName;
          instructorEmail = moduleForm.moduleInstructor.instructorEmail;
          instructorPhone = moduleForm.moduleInstructor.instructorPhone;
        }
        setDoc(
          doc(
            database,
            "postDegreePrograms",
            this.programId,
            "modules",
            this.moduleCode
          ),
          {
            moduleOrder: "M" + index,
            moduleName: moduleForm.moduleName,
            moduleCode: this.moduleCode,
            moduleInstructorName: instructorName,
            moduleInstructorEmail: instructorEmail,
            moduleInstructorPhone: instructorPhone,
            moduleInvoice: moduleForm.moduleInvoice,
            modulePayment: moduleForm.modulePayment,
            moduleDates: dates,
            moduleStartHour: this.formatHour(startHour),
            moduleEndHour: this.formatHour(endHour),
            moduleContent: moduleForm.moduleContent,
          }
        );
      });
    },
    loadProgramProject(e) {
      this.programProjectFile = e.target.files[0];
    },
    saveFile() {
      const storage = getStorage();
      let newIdProgram = this.programId;
      const storageRef = ref(
        storage,
        "/Programs/" + newIdProgram + "/Project/" + this.programProjectFile.name
      );
      uploadBytes(storageRef, this.programProjectFile).then((snapshot) => {
        console.log("Uploaded project file!");
      });
    },
    formatHour(hour) {
      let hourFormated;
      let minutesFormated;
      if (hour.minutes < 10) {
        minutesFormated = 0 + "" + hour.minutes;
      } else {
        minutesFormated = hour.minutes;
      }
      hourFormated = hour.hours + ":" + minutesFormated;
      return hourFormated;
    },
    saveData() {
      this.dialogFlag = true;
      this.saveProgram();
      this.saveModules();
      this.saveFile();
    },
    closeDialog() {
      this.dialogFlag = false;
    },
    updateModuleLimit() {
      console.log("Tipo de programa:" + this.programType);
      switch (this.programType) {
        case "Diplomado":
          this.moduleLimits = 10;
          console.log("Limite" + this.moduleLimits);
          break;
        case "Maestria":
          this.moduleLimits = 20;
          console.log("Limite" + this.moduleLimits);
          break;
      }
    },
    updateProgramDefaultPayment() {
      switch (this.programType) {
        case "Diplomado":
          this.programDefaultPayment = 1775;
          console.log(this.programDefaultPayment);
          break;
        case "Maestria":
          this.programDefaultPayment = 3550;
          console.log(this.programDefaultPayment);
          break;
      }
      this.moduleForms[0].modulePayment = this.programDefaultPayment;
    },
  },
};
</script>
<style>
.program-form {
  position: relative;
  width: 65rem;
  border: 1px solid #6e7c8f;
  border-width: 0.1rem;
}
.dateTime {
  display: flex;
  justify-content: center;
}
.program-header {
  background-color: blue;
  width: 100%;
}
.subtitle-program-form {
  color: white;
  margin-bottom: 1rem;
  background-color: #516278;
}
.container-setup {
  border: 1px solid black;
}
.text-field-input {
  margin: 1rem;
}
.card-layout {
  margin-bottom: 1rem;
}
.subtitle-module-form {
  color: #6e7c8f;
}
.module-button {
  color: #6e7c8f;
}
</style>