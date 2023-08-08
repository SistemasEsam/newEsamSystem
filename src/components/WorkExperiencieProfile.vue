<template>
  <v-sheet width="1000" class="mx-auto">

    <h3 class="headline">EXPERIENCIA LABORAL</h3>
    <v-card v-for="(workExperienceForm, index) in workExperienceForms" :key="index" class="mb-4">
      <v-card-title>
        <v-col class="d-flex justify-center aling-center">
          <h2 class="headline">EXPERIENCIA LABORAL DE LOS ULTIMOS 3 AÑOS</h2>
          <v-btn v-if="index !== 0" icon @click="deleteWorkExperinceForm(index)">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-card-title>
      <v-card-text>
        <v-col>
          <v-row>
            <v-col>
              <v-text-field v-model="workExperienceForm.institutionWorkExperience" label="Nombre de empresa o institución"
                required></v-text-field>
            </v-col>

            <v-col>
              <v-text-field v-model="workExperienceForm.cargoexplaboral" label="Cargo" required></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-checkbox v-model="workExperienceForm.currentJobFlag" label="Trabajo Actual"></v-checkbox>
            </v-col>
            <v-col v-if="workExperienceForm.currentJobFlag">
              <VueDatePicker v-model="workExperienceForm.startWorkExperienceCurrentJob" :teleport="true"
                placeholder="Fecha de Inicio" :enable-time-picker="false" />
            </v-col>
            <v-col v-else>
              <v-col>
                <VueDatePicker v-model="workExperienceForm.startWorkExperience" :teleport="true"
                  placeholder="Fecha de Inicio" :enable-time-picker="false" />
              </v-col>
              <v-col>
                <VueDatePicker v-model="workExperienceForm.endWorkExperience" :teleport="true"
                  placeholder="Fecha de Finalizacion" :enable-time-picker="false" />
              </v-col>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field v-model="workExperienceForm.countryWorkExperience" label="País" required></v-text-field>
            </v-col>
            <v-col>
              <v-text-field v-model="workExperienceForm.cityWorkExperience" label="Ciudad" required></v-text-field>
            </v-col>
          </v-row>
          <v-col>
            <v-textarea v-model="workExperienceForm.descriptionWorkExperience" label="Descripción de funciones realizadas"
              placeholder="Escribe tus comentarios aquí" rows="4" auto-grow outlined></v-textarea>
          </v-col>
          <v-row>
            <v-card-title>
              <v-col class="d-flex justify-center aling-center">
                <h2 class="headline">REFERENCIAS</h2>
              </v-col>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col>
                  <v-text-field v-model="workExperienceForm.nameReference" label="Nombre"></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field v-model="workExperienceForm.lastnameReference" label="Apellidos"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field v-model="workExperienceForm.jobTitleReference"
                    label="Cargo de Inmediato Superior"></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field v-model="workExperienceForm.phoneReference" :rules="numeroRules"
                    label="Número de Contacto " required></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
          </v-row>
        </v-col>
      </v-card-text>
    </v-card>
    <v-col>
      <v-btn v-if="workExperienceForms.length < 3" @click="addWorkExperienceForm()" color="warning"
        class="fixed-bottom mr-2">AGREGAR
        NUEVA EXPERIENCIA LABORAL</v-btn>
    </v-col>
    <v-col>

    </v-col>

    <v-card v-for="(instructorExperienceForm, index2) in instructorExperienceForms" :key="index2" class="mb-4">
      <v-card-title>
        <v-col class="d-flex justify-center aling-center">
          <h2 class="headline">EXPERIENCIA COMO DOCENTE</h2>
          <v-btn v-if="index2 !== 0" icon @click="deleteInstructorExperienceForm(index2)">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-card-title>
      <v-card-text>
        <v-col>
          <v-row>
            <v-col>
              <v-text-field v-model="instructorExperienceForm.institutionInstructorExperience"
                label="Universidad o Institución" required></v-text-field>
            </v-col>
            <v-col>
              <v-text-field v-model="instructorExperienceForm.subjectInstructorExperience" label="Materia Impartida"
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
                label="Grado Académico que impartió" outlined></v-select>
            </v-col>
            <v-col>
              <v-menu ref="menu2" :close-on-content-click="false" transition="scale-transition" offset-y
                min-width="290px">
                <template v-slot:activator="{ on }">
                  <v-text-field v-model="instructorExperienceForm.startInstructorExperience" label="Fecha de inicio"
                    outlined readonly v-on="on"></v-text-field>
                </template>
                <v-date-picker v-model="instructorExperienceForm.startInstructorExperience"
                  @input="menu2 = false"></v-date-picker>
              </v-menu>
            </v-col>
            <v-col>
              <v-menu ref="menu3" :close-on-content-click="false" transition="scale-transition" offset-y
                min-width="290px">
                <template v-slot:activator="{ on }">
                  <v-text-field v-model="instructorExperienceForm.endInstructorExperience" label="Fecha de finalización"
                    outlined readonly v-on="on"></v-text-field>
                </template>
                <v-date-picker v-model="instructorExperienceForm.endInstructorExperience"
                  @input="menu3 = false"></v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
        </v-col>
      </v-card-text>
    </v-card>
    <v-btn v-if="instructorExperienceForms.length < 3" @click="addInstructorExperienceForm()" color="warning"
      class="fixed-bottom mr-2">AGREGAR
      NUEVA EXPERIENCIA COMO DOCENTE</v-btn>
    <v-col>
      <v-btn class="success" @click="saveDataWorkExperience(); saveDateInstructorExperience()">guardar</v-btn>
    </v-col>
    <v-dialog v-model="dialogVisible" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Datos guardados</span>
        </v-card-title>
        <v-card-text>
          <p>Los datos se han guardado exitosamente.</p>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" to="/form5">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-sheet>
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
      dialogVisible: false,
      isChecked: false,
      dateStart: null,
      menu1: false,
      menu2: false,
      menu3: false,
      numero: null,
      local: '',
      estate: true,

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
          startInstructorExperience: '',
          endInstructorExperience: '',
        }
      ],

      instructorTypes: [

        'PreGrado',
        'PostGrado'
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
    addWorkExperienceForm() {
      if (this.workExperienceForms.length < 3) {
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
      if (this.instructorExperienceForms.length < 3) {
        this.instructorExperienceForms.push({
          institutionInstructorExperience: '',
          subjectInstructorExperience: '',
          typeInstructor: '',
          academicLevel: '',
          startInstructorExperience: '',
          endInstructorExperience: '',
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
      this.workExperienceForms.forEach((workExperienceFormValue) => {
        const documentRef = doc(database, 'instructors', this.idUser)
        const collectionRef = collection(documentRef, 'jobs')
        if (workExperienceFormValue.currentJobFlag) {
          addDoc(collectionRef, {
            institutionWorkExperience: workExperienceFormValue.institutionWorkExperience,
            jobTitleWorkExperience: workExperienceFormValue.jobTitleWorkExperience,
            currentJobFlag: workExperienceFormValue.currentJobFlag,
            startWorkExperienceCurrentJob: workExperienceFormValue.institutionWorkExperience,
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
      })
    },
    saveDateInstructorExperience() {
      this.instructorExperienceForms.forEach((instructorExperienceFormValue) => {
        const documentRef = doc(database, 'instructors', this.idUser)
        const collectionRef = collection(documentRef, 'instructorJobs')
        addDoc(collectionRef, {
          institutionInstructorExperience: instructorExperienceFormValue.institutionInstructorExperience,
          subjectInstructorExperience: instructorExperienceFormValue.subjectInstructorExperience,
          typeInstructor: instructorExperienceFormValue.typeInstructor,
          academicLevel: instructorExperienceFormValue.academicLevel,
          startInstructorExperience: instructorExperienceFormValue.startInstructorExperience,
          endInstructorExperience: instructorExperienceFormValue.endInstructorExperience,
        })
      })
    },
  }
}
</script>
<style>

</style>
