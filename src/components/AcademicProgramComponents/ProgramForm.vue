<template>
  <v-form class="program-main">
    <v-container class="program-form">
      <v-col>
        <v-row>
          <h3>Código de Programa</h3>
          <v-container>
            <v-label>
              Nota: Si el proyecto a ingresar no cuenta con el código contable
              marcar la casilla "Programa Nuevo".
            </v-label>
            <v-checkbox
              label="Programa Nuevo"
              @change="disableProgramIdField()"
            >
            </v-checkbox>
            <v-label>Código contable del programa. </v-label>
            <v-text-field
              v-model="programId"
              label="Código del Programa"
              @input="programId = programId.toUpperCase()"
              :disabled="programIdFlag"
              required
            ></v-text-field>
          </v-container>
        </v-row>
        <v-row>
          <h3>Programa</h3>
          <v-container>
            <v-label>
              Nota: Escriba el nombre completo del programa, tome en cuenta la
              ortografía.
            </v-label>
            <v-text-field
              v-model="programName"
              label="Nombre del Programa"
              :rules="nameRules"
              @input="programName = programName.toUpperCase()"
              required
            ></v-text-field>
          </v-container>
        </v-row>
        <v-row>
          <h3>Cronograma</h3>
          <v-container>
            <v-label>
              Nota: Ingrese la fecha de inicio y la fecha de finalización.
            </v-label>
            <VueDatePicker
              v-model="programYear"
              :teleport="true"
              range
              :partial-range="false"
              :enable-time-picker="false"
              placeholder="Inicio y Fin"
            >
            </VueDatePicker>
          </v-container>
        </v-row>
        <v-row>
          <h3>Sede</h3>
          <v-container>
            <v-label>
              Nota: Seleccione la sucursal a la que corresponde el programa.
            </v-label>
            <v-select
              v-model="programSite"
              label="Sede del Programa"
              :items="programESAMSites"
              item-title="siteName"
              item-value="siteCode"
              required
            ></v-select>
          </v-container>
        </v-row>
        <v-row>
          <h3>Tipo de Programa</h3>
          <v-container>
            <v-label> Nota: Seleccione el tipo de programa. </v-label>
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
            <v-label>
              Nota: Seleccione el area a la que pertenece el programa.
            </v-label>
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
            <v-label>
              Nota: Ingrese los datos del coordinador/encargado del programa.
            </v-label>
            <v-text-field
              v-model="programCoordinatorName"
              label="Nombre"
              required
            ></v-text-field>
            <v-text-field
              v-model="programCoordinatorLastname"
              label="Apellidos"
              required
            ></v-text-field>
            <v-text-field v-model="programCoordinatorEmail" label="Correo">
            </v-text-field>
          </v-container>
        </v-row>
        <v-row>
          <h3>Módulos</h3>
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
              <v-label>
                Nota: Ingrese el nombre del módulo, tome en cuenta la
                ortografía.
              </v-label>
              <v-text-field
                v-model="moduleForm.moduleName"
                label="Nombre del Módulo"
                :rules="nameRules"
              ></v-text-field>
              <v-label>
                Nota: Ingrese el nombre del docente designado, si no se ha
                elegido docente marque la casilla "Docente no definido".
              </v-label>
              <v-checkbox
                @change="
                  moduleForm.moduleInstructorFlag =
                    !moduleForm.moduleInstructorFlag
                "
                label="Docente no definido"
              ></v-checkbox>
              <v-select
                v-model="moduleForm.moduleInstructor"
                label="Docente"
                :items="instructorList"
                item-title="instructorName"
                return-object
                filled
                :disabled="moduleForm.moduleInstructorFlag"
              >
              </v-select>
              <v-label>
                Nota: Si el docente designado es del exterior marque la casilla
                "Internacional".
              </v-label>
              <v-checkbox
                @change="
                  moduleForm.moduleInvoiceFlag = !moduleForm.moduleInvoiceFlag
                "
                label="Internacional"
              >
              </v-checkbox>
              <v-label>
                Nota: En caso de que el docente facture, marque sí; caso
                contrario, marque no.
              </v-label>
              <v-radio-group
                v-model="moduleForm.moduleInvoice"
                label="FACTURA"
                inline
                :disabled="moduleForm.moduleInvoiceFlag"
              >
                <v-radio label="Si" value="1"></v-radio>
                <v-radio label="No" value="2"></v-radio>
              </v-radio-group>
              <v-label>
                Nota: Seleccione todas las fechas en las cuales se llevara a
                cabo el módulo.
              </v-label>
              <VueDatePicker
                v-model="moduleForm.moduleDates"
                :enable-time-picker="false"
                multi-dates
                placeholder="Fechas de clases"
              ></VueDatePicker>
              <br />
              <v-label>
                Nota: Seleccione la hora de inicio y la hora de finalización del
                módulo.
              </v-label>
              <VueDatePicker
                v-model="moduleForm.moduleStartHour"
                time-picker
                placeholder="Hora Inicio"
              ></VueDatePicker>
              <br />
              <VueDatePicker
                v-model="moduleForm.moduleEndHour"
                time-picker
                placeholder="Hora Fin"
              ></VueDatePicker>
              <br />
              <v-label>
                Nota: Ingrese el contenido tentativo para el desarrollo del
                módulo.
              </v-label>
              <v-textarea
                v-model="moduleForm.moduleContent"
                label="Contenido del Módulo"
                :rules="moduleContenRules"
              ></v-textarea>
            </v-form>
            <v-btn v-if="moduleForms.length < 9" @click="addModuleForm()">
              Añadir Módulo
            </v-btn>
          </v-container>
        </v-row>
        <v-row>
          <v-container>
            <v-label> Nota: Seleccione el documento del proytecto. </v-label>
            <v-file-input
              @change="loadProgramProject($event)"
              label="Subir proyecto"
              chips
              accept="application/pdf"
            >
            </v-file-input>
          </v-container>
        </v-row>
      </v-col>
      <br />
      <v-btn @click="saveData()"> Guardar Programa</v-btn>
      <v-dialog v-model="dialogFlag">
        <v-card>
          <v-card-text>
            El código del programas es:
            <b> {{ this.programId }} </b>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="closeDialog()"
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
      programIdFlag: false,
      currentYear: new Date().getFullYear(),
      programsQuantity: 0,

      programId: "",
      programName: "",
      programYear: "",
      programSite: "",
      programType: "",
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
          moduleName: "",
          moduleInstructorFlag: false,
          moduleInstructorName: "",
          moduleInvoiceFlag: false,
          moduleInvoice: 0,
          moduleCode: "",
          moduleDates: "",
          moduleStartHour: "",
          moduleEndHour: "",
          moduleContent: "",
          moduleInstructor: null,
          moduleInstructorEmail: "",
          moduleInstructorPhone: "",
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
      console.log(this.instructorList[0].instructorName);
    },
    async getProgramsList() {
      const programs = await getDocs(
        collection(database, "postDegreePrograms")
      );
      this.programsQuantity = programs.size;
      console.log("Cantidad de programas: " + this.programsQuantity);
    },
    addModuleForm() {
      this.moduleForms.push({
        moduleName: "",
        moduleInstructorName: "",
        moduleInvoice: 0,
        moduleCode: "",
        moduleDates: "",
        moduleStartHour: "",
        moduleEndHour: "",
        moduleContent: "",
      });
    },
    disableProgramIdField() {
      this.programIdFlag = !this.programIdFlag;
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
      this.moduleForms.forEach((moduleForm) => {
        const moduleInitials = moduleForm.moduleName
          .split(" ")
          .map((x) => x[0])
          .join("");
        this.moduleCode = this.programId + "-" + moduleInitials.substring(0, 5);
        const dates = JSON.parse(JSON.stringify(moduleForm.moduleDates));
        const startHour = JSON.parse(
          JSON.stringify(moduleForm.moduleStartHour)
        );
        const endHour = JSON.parse(JSON.stringify(moduleForm.moduleEndHour));
        setDoc(
          doc(
            database,
            "postDegreePrograms",
            this.programId,
            "modules",
            this.moduleCode
          ),
          {
            moduleName: moduleForm.moduleName,
            moduleInstructorName: moduleForm.moduleInstructorName,
            moduleInvoice: moduleForm.moduleInvoice,
            moduleCode: this.moduleCode,
            moduleDates: dates,
            moduleStartHour: this.formatHour(startHour),
            moduleEndHour: this.formatHour(endHour),
            moduleContent: moduleForm.moduleContent,
            moduleInstructorName: moduleForm.moduleInstructor.instructorName,
            moduleInstructorEmail: moduleForm.moduleInstructor.instructorEmail,
            moduleInstructorPhone: moduleForm.moduleInstructor.instructorPhone,
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
  },
};
</script>
<style>
.program-form {
  position: relative;
  width: 65rem;
}
</style>