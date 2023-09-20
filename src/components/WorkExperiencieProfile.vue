<template>
  <v-container width="1000" class="mx-auto">
    <v-container>
      <v-card v-for="(workExperienceForm, index) in workExperienceForms" :key="index" class="mb-4 card-style">
        <v-card-title>
          <v-col class="d-flex justify-center aling-center">
            <h2 class="headline header-form">EXPERIENCIA LABORAL DE LOS ULTIMOS 3 AÑOS</h2>
          </v-col>
          <v-col>
            <h3>{{ this.idUser }}</h3>
          </v-col>
          <v-btn append-icon class="icon-button" color="red" v-if="index !== 0" @click="deleteWorkExperinceForm(index)">
            <v-icon size="x-large">mdi-close-thick</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-col>
            <v-row>
              <v-col>
                <v-text-field v-model="workExperienceForm.institutionWorkExperience"
                  @input="workExperienceForm.institutionWorkExperience = workExperienceForm.institutionWorkExperience.toUpperCase()"
                  label="Nombre de Empresa o Institución" required></v-text-field>
              </v-col>

              <v-col>
                <v-text-field v-model="workExperienceForm.jobTitleWorkExperience" label="Cargo"
                  @input="workExperienceForm.jobTitleWorkExperience = workExperienceForm.jobTitleWorkExperience.toUpperCase()"
                  required></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field v-model="workExperienceForm.countryWorkExperience"
                  @input="workExperienceForm.countryWorkExperience = workExperienceForm.countryWorkExperience.toUpperCase()"
                  label="País" required></v-text-field>
              </v-col>
              <v-col>
                <v-text-field v-model="workExperienceForm.cityWorkExperience"
                  @input="workExperienceForm.cityWorkExperience = workExperienceForm.cityWorkExperience.toUpperCase()"
                  label="Ciudad" required></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-checkbox v-model="workExperienceForm.currentJobFlag" label="Trabajo Actual"></v-checkbox>
              </v-col>
              <v-col v-if="workExperienceForm.currentJobFlag">
                <VueDatePicker v-model="workExperienceForm.startWorkExperienceCurrentJob" locale="es" :teleport="true"
                  :year-range="[1950, currentYear]" placeholder="Fecha de Inicio" :enable-time-picker="false" />
              </v-col>
              <v-col v-else>
                <v-col>
                  <VueDatePicker v-model="workExperienceForm.startWorkExperience" locale="es" :teleport="true"
                    :year-range="[1950, currentYear]" placeholder="Fecha de Inicio" :enable-time-picker="false" />
                </v-col>
                <v-col>
                  <VueDatePicker v-model="workExperienceForm.endWorkExperience" locale="es" :teleport="true"
                    :year-range="[1950, currentYear]" placeholder="Fecha de Finalizacion" :enable-time-picker="false" />
                </v-col>
              </v-col>
            </v-row>
            <v-col>
              <v-textarea v-model="workExperienceForm.descriptionWorkExperience"
                @input="workExperienceForm.descriptionWorkExperience = workExperienceForm.descriptionWorkExperience.toUpperCase()"
                label="Descripción de funciones realizadas" placeholder="Escribe tus comentarios aquí" rows="4" auto-grow
                outlined></v-textarea>
            </v-col>
            <v-container>
              <v-row>
                <v-card-title>
                  <v-col class="d-flex justify-center aling-center">
                    <h2 class="headline header-form">REFERENCIAS</h2>
                  </v-col>
                </v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col>
                      <v-text-field v-model="workExperienceForm.nameReference"
                        @input="workExperienceForm.nameReference = workExperienceForm.nameReference.toUpperCase()"
                        label="Nombre"></v-text-field>
                    </v-col>
                    <v-col>
                      <v-text-field v-model="workExperienceForm.lastnameReference"
                        @input="workExperienceForm.lastnameReference = workExperienceForm.lastnameReference.toUpperCase()"
                        label="Apellidos"></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-text-field v-model="workExperienceForm.jobTitleReference"
                        @input="workExperienceForm.jobTitleReference = workExperienceForm.jobTitleReference.toUpperCase()"
                        label="Cargo de Inmediato Superior"></v-text-field>
                    </v-col>
                    <v-col>
                      <v-text-field v-model="workExperienceForm.phoneReference"
                        @input="workExperienceForm.phoneReference = workExperienceForm.phoneReference.toUpperCase()"
                        :rules="numeroRules" label="Número de Contacto " required></v-text-field>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-row>
            </v-container>
          </v-col>
        </v-card-text>
      </v-card>
      <v-btn prepend-icon="mdi-plus" v-if="workExperienceForms.length < 3" @click="addWorkExperienceForm()"
        class="fixed-bottom mr-2 button-form">AGREGAR
        NUEVA EXPERIENCIA LABORAL</v-btn>
    </v-container>
    <v-container>
      <v-card v-for="(instructorExperienceForm, index2) in instructorExperienceForms" :key="index2"
        class="mb-4 card-style">
        <v-card-title>
          <v-col class="d-flex justify-center aling-center">
            <h2 class="headline header-forom">EXPERIENCIA COMO DOCENTE</h2>
            <v-btn append-icon class="icon-button" color="red" v-if="index2 !== 0"
              @click="deleteInstructorExperienceForm(index2)">
              <v-icon size="x-large">mdi-close-thick</v-icon>
            </v-btn>
          </v-col>
        </v-card-title>
        <v-card-text>
          <v-col>
            <v-row>
              <v-col>
                <v-text-field v-model="instructorExperienceForm.institutionInstructorExperience"
                  @input="instructorExperienceForm.institutionInstructorExperience = instructorExperienceForm.institutionInstructorExperience.toUpperCase()"
                  label="Universidad o Institución" required></v-text-field>
              </v-col>
              <v-col>
                <v-text-field v-model="instructorExperienceForm.subjectInstructorExperience" label="Materia Impartida"
                  @input="instructorExperienceForm.subjectInstructorExperience = instructorExperienceForm.subjectInstructorExperience.toUpperCase()"
                  required></v-text-field>
              </v-col>
              <v-col>
                <v-select v-model="instructorExperienceForm.typeInstructor" :items="academicLevels" label="En calidad de:"
                  outlined></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-select v-model="instructorExperienceForm.academicLevel" :items="instructorTypes"
                  item-title="instructorType" item-value="code" label="Grado Académico que impartió" outlined></v-select>
              </v-col>
              <v-col>
                <VueDatePicker v-model="instructorExperienceForm.lastYearInstructorExperience" :teleport="true"
                  :year-range="[1950, currentYear]" year-picker placeholder="Ultimo año de experiencia"
                  :enable-time-picker="false" />
              </v-col>
            </v-row>
          </v-col>
        </v-card-text>
      </v-card>
      <v-btn prepend-icon="mdi-plus" v-if="instructorExperienceForms.length < 3" @click="addInstructorExperienceForm()"
        class="fixed-bottom mr-2 button-form">AGREGAR
        NUEVA EXPERIENCIA COMO DOCENTE</v-btn>
      <v-alert variant="elevated" density="compact" closable color="red" title="Atención" v-show="alertFlag"
        text="Verifique que los datos ingresados sean correctos!"></v-alert>
    </v-container>
    <v-container>
      <v-btn prepend-icon="mdi-content-save-outline" class="fixed-bottom mr-2 button-form" width="150px" density="default"
        @click="saveData()">guardar</v-btn>
      <!-- <v-btn prepend-icon="mdi-content-save-outline" class="fixed-bottom mr-2 button-form" width="150px" density="default"
        @click="saveDataWorkExperience()">guardar</v-btn> -->
      <v-btn prepend-icon="mdi-arrow-left" class="fixed-bottom mr-2 button-form" width="150px" density="default"
        @click="showPreviusForm()">atras</v-btn>
    </v-container>
  </v-container>
</template>

<script>
import { database } from '../firebase/firebase'
import { addDoc, collection, doc } from "firebase/firestore";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
  props: [
    "userId"
  ],
  components: {
    VueDatePicker
  },
  data() {
    return {
      idUser: this.userId,
      // idUser: 'aljiar23@gmail.com',
      alertFlag: false,
      isChecked: false,
      dateStart: null,
      menu1: false,
      menu2: false,
      menu3: false,
      numero: null,
      local: '',
      estate: true,
      currentYear: new Date().getFullYear(),

      numeroRules: [
        v => !!v || 'El número es requerido',
        v => /^[0-9]+$/.test(v) || 'Ingrese solo números'
      ],



      workExperienceForms: [
        {
          institutionWorkExperience: '',
          jobTitleWorkExperience: '',
          currentJobFlag: false,
          startWorkExperience: '',
          startWorkExperienceCurrentJob: '',
          endWorkExperience: '',
          countryWorkExperience: '',
          cityWorkExperience: '',
          descriptionWorkExperience: '',
          nameReference: '',
          lastnameReference: '',
          jobTitleReference: '',
          phoneReference: ''

        }
      ],
      instructorExperienceForms: [
        {
          institutionInstructorExperience: '',
          subjectInstructorExperience: '',
          typeInstructor: '',
          academicLevel: '',
          lastYearInstructorExperience: '',
        }
      ],

      instructorTypes: [
        { instructorType: "Pregrado", code: "Pregrado" },
        { instructorType: "Postgrado", code: "Postgrado" },
      ],

      academicLevels: [
        'Titular',
        'Invitado'
      ],
      dateOfBirth: null,
      menu: false,
      selectedYear: null,
      years: []
    }
  },
  methods: {
    showNextForm() {
      let nextComponent = 'skills-profile'
      this.$emit('show-next-form', nextComponent, this.idUser)
    },
    showPreviusForm() {
      let nextComponent = 'extra-courses-profile'
      this.$emit('show-next-form', nextComponent, this.idUser)
    },
    checkWorkExperienceList() {
      let listWorkExperienceFilled = true
      this.workExperienceForms.forEach((workExperienceForm) => {
        console.log(workExperienceForm.institutionWorkExperience)
        if (workExperienceForm.institutionWorkExperience
          && workExperienceForm.jobTitleWorkExperience
          && workExperienceForm.countryWorkExperience
          && workExperienceForm.cityWorkExperience
          && workExperienceForm.descriptionWorkExperience
          && workExperienceForm.nameReference
          && workExperienceForm.lastnameReference
          && workExperienceForm.jobTitleReference
          && workExperienceForm.phoneReference) {
          listWorkExperienceFilled = true
        } else {
          listWorkExperienceFilled = false
        }
      })
      console.log(listWorkExperienceFilled)
      return listWorkExperienceFilled
    },
    checkInstructorExperienceList() {
      let listInstructorExperienceFilled = true
      this.instructorExperienceForms.forEach((instructorExperienceForm) => {
        if (instructorExperienceForm.institutionInstructorExperience
          && instructorExperienceForm.subjectInstructorExperience
          && instructorExperienceForm.typeInstructor
          && instructorExperienceForm.academicLevel
          && instructorExperienceForm.lastYearInstructorExperience) {
          listInstructorExperienceFilled = true
        } else {
          listInstructorExperienceFilled = false
        }
      })
      return listInstructorExperienceFilled
    },
    addWorkExperienceForm() {
      if (this.workExperienceForms.length < 3 && this.checkWorkExperienceList()) {
        this.workExperienceForms.push({
          institutionWorkExperience: '',
          jobTitleWorkExperience: '',
          currentJobFlag: false,
          startWorkExperience: '',
          startWorkExperienceCurrentJob: '',
          endWorkExperience: '',
          countryWorkExperience: '',
          cityWorkExperience: '',
          descriptionWorkExperience: '',
          nameReference: '',
          lastnameReference: '',
          jobTitleReference: '',
          phoneReference: ''
        })
      }
    },
    addInstructorExperienceForm() {
      if (this.instructorExperienceForms.length < 3 && this.checkInstructorExperienceList()) {
        this.instructorExperienceForms.push({
          institutionInstructorExperience: '',
          subjectInstructorExperience: '',
          typeInstructor: '',
          academicLevel: '',
          lastYearInstructorExperience: '',
        })
      }
    },
    deleteWorkExperinceForm(index) {
      this.workExperienceForms.splice(index, 1)
    },
    deleteInstructorExperienceForm(index) {
      this.instructorExperienceForms.splice(index, 1)
    },
    saveDataWorkExperience() {
      const documentRef = doc(database, 'instructors', this.idUser)
      const collectionRef = collection(documentRef, 'jobs')
      this.workExperienceForms.forEach((workExperienceFormValue) => {
        console.log(workExperienceFormValue)
        if (workExperienceFormValue.jobTitleWorkExperience != '') {
          if (workExperienceFormValue.currentJobFlag) {
            addDoc(collectionRef, {
              institutionWorkExperience: workExperienceFormValue.institutionWorkExperience,
              jobTitleWorkExperience: workExperienceFormValue.jobTitleWorkExperience,
              currentJobFlag: workExperienceFormValue.currentJobFlag,
              startWorkExperienceCurrentJob: workExperienceFormValue.startWorkExperienceCurrentJob,
              countryWorkExperience: workExperienceFormValue.countryWorkExperience,
              cityWorkExperience: workExperienceFormValue.cityWorkExperience,
              descriptionWorkExperience: workExperienceFormValue.descriptionWorkExperience,
              nameReference: workExperienceFormValue.nameReference,
              lastnameReference: workExperienceFormValue.lastnameReference,
              jobTitleReference: workExperienceFormValue.jobTitleReference,
              phoneReference: workExperienceFormValue.phoneReference
            })
          } else {
            addDoc(collectionRef, {
              institutionWorkExperience: workExperienceFormValue.institutionWorkExperience,
              jobTitleWorkExperience: workExperienceFormValue.jobTitleWorkExperience,
              currentJobFlag: workExperienceFormValue.currentJobFlag,
              startWorkExperience: workExperienceFormValue.startWorkExperience,
              endWorkExperience: workExperienceFormValue.endWorkExperience,
              countryWorkExperience: workExperienceFormValue.countryWorkExperience,
              cityWorkExperience: workExperienceFormValue.cityWorkExperience,
              descriptionWorkExperience: workExperienceFormValue.descriptionWorkExperience,
              nameReference: workExperienceFormValue.nameReference,
              lastnameReference: workExperienceFormValue.lastnameReference,
              jobTitleReference: workExperienceFormValue.jobTitleReference,
              phoneReference: workExperienceFormValue.phoneReference
            })
          }
        }
      })
    },
    saveDateInstructorExperience() {
      const documentRef = doc(database, 'instructors', this.idUser)
      const collectionRef = collection(documentRef, 'instructorJobs')
      this.instructorExperienceForms.forEach((instructorExperienceFormValue) => {
        if (instructorExperienceFormValue.subjectInstructorExperience != '') {
          addDoc(collectionRef, {
            institutionInstructorExperience: instructorExperienceFormValue.institutionInstructorExperience,
            subjectInstructorExperience: instructorExperienceFormValue.subjectInstructorExperience,
            typeInstructor: instructorExperienceFormValue.typeInstructor,
            academicLevel: instructorExperienceFormValue.academicLevel,
            lastYearInstructorExperience: instructorExperienceFormValue.lastYearInstructorExperience,
          })
        }
      })
    },
    saveData() {
      if (this.checkWorkExperienceList() && this.checkInstructorExperienceList()) {
        this.showNextForm()
        this.saveDataWorkExperience()
        this.saveDateInstructorExperience()
      } else {
        this.alertFlag = true
      }
    },
  }
}
</script>
