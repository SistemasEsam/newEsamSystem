<template>
  <v-container>
    <v-container>
      <v-card
        v-for="(degreeForm, index) in degreeForms"
        :key="index"
        class="mb-4 card-style"
      >
        <v-card-title>
          <v-col class="d-flex justify-center aling-center">
            <h3 class="headline">FORMACIÓN DE PREGRADO</h3>
            <v-btn
              color="red"
              density="comfortable"
              class="icon-button"
              v-if="index !== 0"
              append-icon
              @click="deleteDegreeForm(index)"
            >
              <v-icon size="x-large">mdi-close-thick</v-icon>
            </v-btn>
          </v-col>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <b>
                <v-label>
                  Llene el formulario con los títulos más relevantes para el
                  cargo.
                  <br />Escribe los nombres completos de las instituciones sin
                  abreviaturas y verifica la ortografía.
                </v-label>
              </b>
            </v-row>
          </v-container>
          <v-col>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="degreeForm.universityDegree"
                  @input="
                    degreeForm.universityDegree =
                      degreeForm.universityDegree.toUpperCase()
                  "
                  label="Universidad o Institución"
                  required
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="degreeForm.careerDegree"
                  @input="
                    degreeForm.careerDegree =
                      degreeForm.careerDegree.toUpperCase()
                  "
                  label="Carrera"
                  required
                ></v-text-field>
              </v-col>
              <v-col>
                <v-select
                  v-model="degreeForm.levelOfDegree"
                  :items="NivelEstudio"
                  label="Nivel de Estudio"
                  outlined
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="degreeForm.countryDegree"
                  @input="
                    degreeForm.countryDegree =
                      degreeForm.countryDegree.toUpperCase()
                  "
                  label="País"
                  required
                ></v-text-field>
              </v-col>
              <v-col>
                <VueDatePicker
                  v-model="degreeForm.graduationYearDegree"
                  year-picker
                  :year-range="[1950, currentYear]"
                  :teleport="true"
                  placeholder="Año de titulación"
                />
              </v-col>
              <v-col>
                <v-select
                  v-model="degreeForm.graduationModalityDegree"
                  :items="ModalidadGraduacion"
                  label="Modalidad Graduación"
                  outlined
                ></v-select>
              </v-col>
            </v-row>
            <!-- <v-row>
              <v-col>
                <p style="text-align: left;">Adjuntar título escaneado</p>
                <v-file-input v-model="degreeForm.fileDegree" @change="loadDegreeFile($event)" accept="application/pdf"
                  label="Seleccionar archivo PDF" outlined></v-file-input>
              </v-col>
            </v-row> -->
          </v-col>
        </v-card-text>
        <v-alert
          v-model="alert"
          close-text="Close Alert"
          color="error"
          dark
          dismissible
          class="mx-15"
        >
          Debe llenar todos los campos requeridos.
        </v-alert>
      </v-card>
      <v-btn
        prepend-icon="mdi-plus"
        v-if="degreeForms.length < 3"
        @click="addDegreeForm()"
        class="fixed-bottom mr-2 button-form"
        density="comfortable"
      >
        AGREGAR NUEVA FORMACIÓN</v-btn
      >
    </v-container>
    <v-container>
      <v-checkbox
        @change="disablePostDegreeForm()"
        label="No se cuenta con más postgrados"
      ></v-checkbox>
      <v-container>
        <v-card
          :disabled="postDegreeCardFlag"
          v-for="(postDegreeForm, index2) in postDegreeForms"
          :key="index2"
          class="mb-4 card-style"
        >
          <v-card-title>
            <v-col class="d-flex justify-center aling-center">
              <h3 class="headline">FORMACIÓN DE POSTGRADO</h3>
              <v-btn
                class="icon-button"
                density="comfortable"
                color="red"
                append-icon
                v-if="index2 !== 0"
                @click="deletePostDegreeForm(index2)"
              >
                <v-icon size="x-large">mdi-close-thick</v-icon>
              </v-btn>
            </v-col>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <b>
                  <v-label>
                    Llene el formulario con los títulos más relevantes para el
                    cargo.
                    <br />Escribe los nombres completos de las instituciones sin
                    abreviaturas y verifica la ortografía.
                  </v-label>
                </b>
              </v-row>
            </v-container>
            <v-col>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="postDegreeForm.universityPostDegree"
                    @input="
                      postDegreeForm.universityPostDegree =
                        postDegreeForm.universityPostDegree.toUpperCase()
                    "
                    label="Universidad o Institución"
                    required
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="postDegreeForm.namePostDegree"
                    label="Nombre del postgrado"
                    @input="
                      postDegreeForm.namePostDegree =
                        postDegreeForm.namePostDegree.toUpperCase()
                    "
                    required
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-select
                    v-model="postDegreeForm.titlePostDegree"
                    :items="PostNivelEstudio"
                    label="Grado"
                    outlined
                  ></v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="postDegreeForm.countryPostDegree"
                    label="País"
                    @input="
                      postDegreeForm.countryPostDegree =
                        postDegreeForm.countryPostDegree.toUpperCase()
                    "
                    required
                  ></v-text-field>
                </v-col>
                <v-col>
                  <VueDatePicker
                    v-model="postDegreeForm.graduationYearPostDegree"
                    year-picker
                    :year-range="[1950, currentYear]"
                    :teleport="true"
                    placeholder="Año de Titulación"
                  />
                </v-col>
                <v-col>
                  <v-select
                    v-model="postDegreeForm.graduationModalityPostDegree"
                    :items="ModalidadGraduacionPost"
                    label="Modalidad de graduación"
                    outlined
                  ></v-select>
                </v-col>
              </v-row>
              <!-- <v-row>
              <v-col>
                <p style="text-align: left;">Adjuntar título escaneado</p>
                <v-file-input v-model="postDegreeForm.filePostDegree" @change="loadPostDegreeFile($event)"
                  accept="application/pdf" label="Seleccionar archivo PDF" outlined></v-file-input>
              </v-col>
            </v-row> -->
            </v-col>
          </v-card-text>
        </v-card>
        <v-btn
          prepend-icon="mdi-plus"
          v-if="postDegreeForms.length < 3"
          @click="addPostDegreeForm()"
          density="comfortable"
          class="fixed-bottom mr-2 button-form"
        >
          AGREGAR NUEVO POSTGRADO</v-btn
        >
        <v-alert
          variant="elevated"
          closable
          density="compact"
          color="red"
          title="Atención"
          v-show="alertFlag"
          text="Llene todos los campos!!!"
        ></v-alert>
      </v-container>
    </v-container>

    <v-container>
      <v-btn
        prepend-icon="mdi-content-save-outline"
        class="fixed-bottom mr-2 button-form"
        width="150px"
        density="default"
        @click="checkFormsFilled()"
        >guardar</v-btn
      >
      <!-- <v-btn
        prepend-icon="mdi-content-save-outline"
        class="fixed-bottom mr-2 button-form"
        width="150px"
        density="default"
        @click="showNextForm()"
        >guardar</v-btn
      > -->
      <v-btn
        prepend-icon="mdi-arrow-left"
        class="fixed-bottom mr-2 button-form"
        width="150px"
        density="default"
        @click="showPreviusForm()"
        >atras</v-btn
      >
    </v-container>
  </v-container>
</template>
      
<script>
import { database } from "../../firebase/firebase";
import { addDoc, collection, doc } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  props: ["userId"],
  components: {
    VueDatePicker,
  },
  data() {
    return {
      idUser: this.userId,
      // idUser: 'aljiar23@gmail.com',
      postDegreeCardFlag: false,
      alertFlag: false,
      dialogVisible: false,
      estate: true,
      alert: false,
      local: "",
      url: "",
      currentYear: new Date().getFullYear(),
      listOfPaths: [],
      degreeForms: [
        {
          universityDegree: "",
          careerDegree: "",
          levelOfDegree: "",
          countryDegree: "",
          graduationYearDegree: "",
          graduationModalityDegree: "",
          // fileDegree: null,
          // fileDegreePath: '',
          // degreeFilled: false,
        },
      ],
      // degreeFiles: [],
      postDegreeForms: [
        {
          universityPostDegree: "",
          namePostDegree: "",
          titlePostDegree: "",
          countryPostDegree: "",
          graduationYearPostDegree: "",
          graduationModalityPostDegree: "",
          // filePostDegree: null,
          // filePostDegreePath: '',
          // postDegreeFilled: false,
        },
      ],
      // postDegreeFiles: [],
      selectedPostEstudyType: null,
      PostNivelEstudio: [
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

      selectedEstudyType: null,
      NivelEstudio: ["Licenciatura", "Técnico Universitario"],
      selectedModalityPostType: "",
      ModalidadGraduacionPost: ["Monografía", "Tesis", "Otros"],
      selectedModalityType: "",
      ModalidadGraduacion: [
        "Tesis",
        "Exámen de Grado",
        "Proyecto de Grado",
        "Trabajo Dirigido",
        "Excelencia Académica",
        "Doble Titulación",
      ],
    };
  },
  methods: {
    showNextForm() {
      let nextComponent = "extra-courses-profile";
      this.$emit("show-next-form", nextComponent, this.idUser);
    },
    showPreviusForm() {
      let nextComponent = "higher-education-post-degree";
      this.$emit("show-next-form", nextComponent, this.idUser);
    },
    saveDataDegrees() {
      const documentRef = doc(database, "instructors", this.idUser);
      const collectionRef = collection(documentRef, "degrees");
      this.degreeForms.forEach((degreeFormValue) => {
        if (degreeFormValue.careerDegree != "") {
          addDoc(collectionRef, {
            universityDegree: degreeFormValue.universityDegree,
            careerDegree: degreeFormValue.careerDegree,
            levelOfDegree: degreeFormValue.levelOfDegree,
            countryDegree: degreeFormValue.countryDegree,
            graduationYearDegree: degreeFormValue.graduationYearDegree,
            graduationModalityDegree: degreeFormValue.graduationModalityDegree,
          });
        }
      });
    },
    uploadDegreeFiles() {
      const storage = getStorage();
      let newIdUser = this.idUser;
      this.degreeFiles.forEach((degreeFileValue) => {
        const storageRef = ref(
          storage,
          newIdUser + "/degreeFiles" + "/" + degreeFileValue.name
        );
        uploadBytes(storageRef, degreeFileValue).then((snapshot) => {
          console.log("Uploaded a blob or file!");
        });
      });
    },
    saveDataPostDegrees() {
      const documentRef = doc(database, "instructors", this.idUser);
      const collectionRef = collection(documentRef, "postDegrees");
      this.postDegreeForms.forEach((postDegreeFormValue) => {
        if (postDegreeFormValue.namePostDegree != "") {
          addDoc(collectionRef, {
            universityPostDegree: postDegreeFormValue.universityPostDegree,
            namePostDegree: postDegreeFormValue.namePostDegree,
            titlePostDegree: postDegreeFormValue.titlePostDegree,
            countryPostDegree: postDegreeFormValue.countryPostDegree,
            graduationYearPostDegree:
              postDegreeFormValue.graduationYearPostDegree,
            graduationModalityPostDegree:
              postDegreeFormValue.graduationModalityPostDegree,
          });
        }
      });
    },
    uploadPostDegreeFiles() {
      const storage = getStorage();
      let newIdUser = this.idUser;
      this.postDegreeFiles.forEach((postDegreeFileValue) => {
        const storageRef = ref(
          storage,
          newIdUser + "/postDegreeFiles/" + postDegreeFileValue.name
        );
        uploadBytes(storageRef, postDegreeFileValue).then((snapshot) => {
          console.log("Uploaded a blob or file!");
        });
      });
    },
    addDegreeForm() {
      if (this.degreeForms.length < 3 && this.checkDegreeList()) {
        // if (this.degreeForms.length < 3) {
        this.degreeForms.push({
          universityDegree: "",
          careerDegree: "",
          levelOfDegree: "",
          countryDegree: "",
          graduationYearDegree: "",
          graduationModalityDegree: "",
          fileDegree: "",
          degreeFilled: false,
        });
      }
    },
    checkDegreeList() {
      let listDegreeFilled = true;
      this.degreeForms.forEach((degreeForm) => {
        if (
          degreeForm.universityDegree &&
          degreeForm.careerDegree &&
          degreeForm.levelOfDegree &&
          degreeForm.countryDegree &&
          degreeForm.graduationYearDegree &&
          degreeForm.graduationModalityDegree
          // && degreeForm.fileDegree
          // && degreeForm.degreeFilled
        ) {
          listDegreeFilled = true;
        } else {
          listDegreeFilled = false;
        }
      });
      console.log(listDegreeFilled);
      return listDegreeFilled;
    },
    addPostDegreeForm() {
      if (this.postDegreeForms.length < 3 && this.checkPostDegreeList()) {
        // if (this.postDegreeForms.length < 3) {
        this.postDegreeForms.push({
          universityPostDegree: "",
          namePostDegree: "",
          titlePostDegree: "",
          countryPostDegree: "",
          graduationYearPostDegree: "",
          graduationModalityPostDegree: "",
          filePostDegree: "",
          postDegreeFilled: false,
        });
      }
    },
    checkPostDegreeList() {
      let listPostDegreeFilled = true;
      this.postDegreeForms.forEach((postDegreeForm) => {
        if (
          postDegreeForm.universityPostDegree &&
          postDegreeForm.namePostDegree &&
          postDegreeForm.titlePostDegree &&
          postDegreeForm.countryPostDegree &&
          postDegreeForm.graduationYearPostDegree &&
          postDegreeForm.graduationModalityPostDegree
          // && postDegreeForm.filePostDegree
          // && postDegreeForm.postDegreeFilled
        ) {
          listPostDegreeFilled = true;
        } else {
          listPostDegreeFilled = false;
        }
      });
      return listPostDegreeFilled;
    },
    deleteDegreeForm(index) {
      this.degreeForms.splice(index, 1);
    },
    deletePostDegreeForm(index2) {
      this.postDegreeForms.splice(index2, 1);
    },
    // loadDegreeFile(e) {
    //   let newFileDegree = e.target.files[0]
    //   console.log(newFileDegree)
    //   this.degreeFiles.push(newFileDegree)
    //   this.degreeForms[this.degreeForms.length - 1].degreeFilled = true
    // },
    // loadPostDegreeFile(e) {
    //   let newFilePostDegree = e.target.files[0]
    //   console.log(newFilePostDegree)
    //   this.postDegreeFiles.push(newFilePostDegree)
    //   this.postDegreeForms[this.postDegreeForms.length - 1].postDegreeFilled = true
    // },
    checkFormsFilled() {
      if (this.postDegreeCardFlag == false) {
        if (this.checkDegreeList() && this.checkPostDegreeList()) {
          this.showNextForm();
          this.saveDataDegrees();
          this.saveDataPostDegrees();
        } else {
          this.alertFlag = true;
        }
      } else {
        if (this.checkDegreeList()) {
          this.showNextForm();
          this.saveDataDegrees();
          this.saveDataPostDegrees();
        } else {
          this.alertFlag = true;
        }
      }
    },
    disablePostDegreeForm() {
      this.postDegreeCardFlag = !this.postDegreeCardFlag;
    },
  },
};
</script>
