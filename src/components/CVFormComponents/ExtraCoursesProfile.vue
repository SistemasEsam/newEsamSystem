<template>
  <v-container width="1000" class="mx-auto">
    <v-container>
      <v-checkbox
        @change="disableCoursesForm()"
        label="No se cuenta con cursos realizados"
      ></v-checkbox>
      <v-container>
        <v-card
          :disabled="coursesFlag"
          v-for="(courseForm, index) in courseForms"
          :key="index"
          class="mb-4 card-style"
        >
          <v-card-title>
            <v-col class="d-flex justify-center aling-center">
              <h3 class="headline header-form">CURSOS</h3>
              <v-btn
                append-icon
                class="icon-button"
                color="red"
                v-if="index !== 0"
                @click="deleteCourseForm(index)"
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
                    Llene el formulario con los cursos realizados más relevantes
                    para el cargo.
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
                    v-model="courseForm.institutionCourse"
                    @input="
                      courseForm.institutionCourse =
                        courseForm.institutionCourse.toUpperCase()
                    "
                    label="Universidad o Institución"
                    required
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="courseForm.nameCourse"
                    @input="
                      courseForm.nameCourse =
                        courseForm.nameCourse.toUpperCase()
                    "
                    label="Nombre de Curso o Taller"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="courseForm.countryCourse"
                    @input="
                      courseForm.countryCourse =
                        courseForm.countryCourse.toUpperCase()
                    "
                    label="País"
                    required
                  ></v-text-field>
                </v-col>
                <v-col>
                  <VueDatePicker
                    v-model="courseForm.yearCourse"
                    locale="es"
                    year-picker
                    :year-range="[1950, currentYear]"
                    :teleport="true"
                    placeholder="Año de realización"
                  />
                </v-col>
                <!-- <v-col>
                <v-file-input @change="loadCourseFile($event)" accept="application/pdf" label="Seleccionar archivo PDF"
                  outlined></v-file-input>
                <p style="text-align: right;">Adjuntar certificado escaneado</p>
              </v-col> -->
              </v-row>
            </v-col>
          </v-card-text>
        </v-card>
        <v-btn
          prepend-icon="mdi-plus"
          v-if="courseForms.length < 3"
          @click="addCourseForm()"
          density="comfortable"
          class="fixed-bottom mr-2 button-form"
          >AGREGAR NUEVO CURSO</v-btn
        >
      </v-container>
    </v-container>
    <v-container>
      <v-checkbox
        @change="disablePublicationForm()"
        label="No se cuenta con publicaciones realizadas"
      ></v-checkbox>
      <v-container>
        <v-card
          :disabled="publicationFlag"
          v-for="(publicationForm, index2) in publicationForms"
          :key="index2"
          class="mb-4 card-style"
        >
          <v-card-title>
            <v-col class="d-flex justify-center aling-center">
              <h3 class="headline header-form">PRODUCCIÓN INTELECTUAL</h3>
              <v-btn
                append-icon
                class="icon-button"
                color="red"
                v-if="index2 !== 0"
                @click="deletePublicationForm(index2)"
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
                    Llene el formulario con los artículos realizados más
                    relevantes para el cargo.
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
                    v-model="publicationForm.namePublication"
                    label="Nombre de publicación"
                    @input="
                      publicationForm.namePublication =
                        publicationForm.namePublication.toUpperCase()
                    "
                    required
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="publicationForm.publisher"
                    label="Enlace o Editorial de Publicación"
                    @input="
                      publicationForm.publisher =
                        publicationForm.publisher.toUpperCase()
                    "
                    required
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-select
                    v-model="publicationForm.typePublication"
                    :items="publishType"
                    label="Tipo de publicación"
                    outlined
                  ></v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="publicationForm.countryPublication"
                    label="País"
                    @input="
                      publicationForm.countryPublication =
                        publicationForm.countryPublication.toUpperCase()
                    "
                    required
                  ></v-text-field>
                </v-col>
                <v-col>
                  <VueDatePicker
                    v-model="publicationForm.datePublication"
                    locale="es"
                    :teleport="true"
                    :year-range="[1950, currentYear]"
                    placeholder="Fecha de Publicación"
                    :enable-time-picker="false"
                  />
                </v-col>
                <!-- <v-col>
                <v-file-input @change="loadPublicationFile($event)" accept="application/pdf"
                  label="Seleccionar archivo PDF" outlined></v-file-input>
              </v-col> -->
              </v-row>
            </v-col>
          </v-card-text>
        </v-card>
        <v-btn
          prepend-icon="mdi-plus"
          v-if="publicationForms.length < 3"
          @click="addPublicationForm()"
          density="comfortable"
          class="fixed-bottom mr-2 button-form"
          >Agregar formulario</v-btn
        >
        <v-alert
          variant="elevated"
          closable
          density="compact"
          color="red"
          title="Atención"
          v-show="alertFlag"
          text="Verifique que los datos ingresados sean correctos!"
        ></v-alert>
      </v-container>
    </v-container>
    <v-container>
      <v-btn prepend-icon="mdi-content-save-outline" class="fixed-bottom mr-2 button-form" width="150px" density="default"
        @click="saveData()">guardar</v-btn>
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
import { getStorage, uploadBytes, ref } from "firebase/storage";

export default {
  props: ["userId"],
  data() {
    return {
      idUser: this.userId,
      // idUser: 'aljiar23@gmail.com',
      coursesFlag: false,
      publicationFlag: false,
      dialogVisible: false,
      alertFlag: false,
      estate: true,
      local: "",
      currentYear: new Date().getFullYear(),
      courseForms: [
        {
          institutionCourse: "",
          nameCourse: "",
          countryCourse: "",
          yearCourse: "",
          // fileCourse: null,
          // courseFilled: false
        },
      ],
      courseFiles: [],
      publicationForms: [
        {
          namePublication: "",
          publisher: "",
          typePublication: "",
          countryPublication: "",
          datePublication: "",
          // filePublication: null,
          // publicationFilled: false
        },
      ],
      publicationFiles: [],
      publishType: ["Libro", "Revista", "Artículo"],
      NivelEstudio: ["Licenciado", "Magister", "Doctor", "Otro"],
      ModalidadGraduacion: [
        "Tesis",
        "Trabajo Dirigido",
        "Doble Titulación",
        "Otro",
      ],
      menu: false,
      menu2: false,
      years: [],
    };
  },
  methods: {
    showNextForm() {
      let nextComponent = "work-experience-profile";
      this.$emit("show-next-form", nextComponent, this.idUser);
    },
    showPreviusForm() {
      let nextComponent = "superior-education-profile";
      this.$emit("show-next-form", nextComponent, this.idUser);
    },
    addCourseForm() {
      if (this.courseForms.length < 3 && this.checkCourseList()) {
        // if (this.courseForms.length < 3) {
        this.courseForms.push({
          institutionCourse: "",
          nameCourse: "",
          countryCourse: "",
          yearCourse: "",
          // fileCourse: null,
          courseFilled: false,
        });
      }
    },
    addPublicationForm() {
      if (this.publicationForms.length < 3 && this.checkPublicationList()) {
        this.publicationForms.push({
          namePublication: "",
          publisher: "",
          typePublication: "",
          countryPublication: "",
          datePublication: "",
          // filePublication: null
        });
      }
    },
    deleteCourseForm(index) {
      this.courseForms.splice(index, 1);
    },
    deletePublicationForm(index) {
      this.publicationForms.splice(index, 1);
    },
    saveDataCourses() {
      const documentRef = doc(database, "instructors", this.idUser);
      const collectionRef = collection(documentRef, "courses");
      this.courseForms.forEach((courseFormValue) => {
        if (courseFormValue.nameCourse != "") {
          addDoc(collectionRef, {
            institutionCourse: courseFormValue.institutionCourse,
            nameCourse: courseFormValue.nameCourse,
            countryCourse: courseFormValue.countryCourse,
            yearCourse: courseFormValue.yearCourse,
          });
        }
      });
    },
    saveDataPublication() {
      const documentRef = doc(database, "instructors", this.idUser);
      const collectionRef = collection(documentRef, "publications");
      this.publicationForms.forEach((publicationFormValue) => {
        if (publicationFormValue.namePublication != "") {
          addDoc(collectionRef, {
            namePublication: publicationFormValue.namePublication,
            publisher: publicationFormValue.publisher,
            typePublication: publicationFormValue.typePublication,
            countryPublication: publicationFormValue.countryPublication,
            datePublication: publicationFormValue.datePublication,
          });
        }
      });
    },
    // loadCourseFile(e) {
    //   let newFileCourse = e.target.files[0]
    //   console.log(newFileCourse)
    //   this.courseFiles.push(newFileCourse)
    //   this.courseForms[this.courseForms.length - 1].courseFilled = true
    // },
    // loadPublicationFile(e) {
    //   let newFilePublication = e.target.files[0]
    //   console.log(newFilePublication)
    //   this.publicationFiles.push(newFilePublication)
    //   this.publicationForms[this.publicationForms.length - 1].publicationFilled = true
    // },
    checkCourseList() {
      let listCourseFilled = true;
      this.courseForms.forEach((courseForm) => {
        if (
          courseForm.institutionCourse &&
          courseForm.nameCourse &&
          courseForm.countryCourse &&
          courseForm.yearCourse
          // && courseForm.courseFilled
        ) {
          listCourseFilled = true;
        } else {
          listCourseFilled = false;
        }
      });
      return listCourseFilled;
    },
    checkPublicationList() {
      let listPublicationFilled = true;
      this.publicationForms.forEach((publicationForm) => {
        if (
          publicationForm.namePublication &&
          publicationForm.publisher &&
          publicationForm.typePublication &&
          publicationForm.countryPublication &&
          publicationForm.datePublication
          // && publicationForm.publicationFilled
        ) {
          listPublicationFilled = true;
        } else {
          listPublicationFilled = false;
        }
      });
      return listPublicationFilled;
    },
    // uploadCourseFile() {
    //   const storage = getStorage()
    //   let newIdUser = this.idUser
    //   this.courseFiles.forEach((courseFileValue) => {
    //     const storageRef = ref(storage, newIdUser + '/courseFiles/' + courseFileValue.name)
    //     uploadBytes(storageRef, courseFileValue).then((snapshot) => {
    //       console.log('Upload course file')
    //     })
    //   })
    // },
    // uploadPublicationFile() {
    //   const storage = getStorage()
    //   let newIdUser = this.idUser
    //   this.publicationFiles.forEach((publicationFileValue) => {
    //     const storageRef = ref(storage, newIdUser + '/publicationFiles/' + publicationFileValue.name)
    //     uploadBytes(storageRef, publicationFileValue).then((snapshot) => {
    //       console.log('Upload publication file')
    //     })
    //   })
    // },
    saveData() {
      if (this.coursesFlag && this.publicationFlag) {
        this.showNextForm();
      } else if (this.coursesFlag == true && this.publicationFlag == false) {
        if (this.checkPublicationList()) {
          this.showNextForm();
          this.saveDataPublication();
        } else {
          this.alertFlag = true;
        }
      } else if (this.coursesFlag == false && this.publicationFlag == true) {
        if (this.checkCourseList()) {
          this.showNextForm();
          this.saveDataCourses();
        } else {
          this.alertFlag = true;
        }
      }
    },
    disableCoursesForm() {
      this.coursesFlag = !this.coursesFlag;
    },
    disablePublicationForm() {
      this.publicationFlag = !this.publicationFlag;
    },
  },
};
</script>
