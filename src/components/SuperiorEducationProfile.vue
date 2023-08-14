<template>
  <H1>{{ this.idUser }}</H1>

  <v-sheet width="1000" class="mx-auto">
    <p>{{ local.name }}</p>
    <v-card v-for="(degreeForm, index) in degreeForms" :key="index" class="mb-4">
      <v-card-title>
        <v-col class="d-flex justify-center aling-center">
          <h3 class="headline">FORMACION DE PREGRADO</h3>
          <v-btn v-if="index !== 0" icon @click="deleteDegreeForm(index)">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-card-title>
      <v-card-text>
        <v-col>
          <v-row>
            <v-col>
              <v-text-field v-model="degreeForm.universityDegree" label="Universidad o Institución"
                required></v-text-field>
            </v-col>
            <v-col>
              <v-text-field v-model="degreeForm.careerDegree" label="Carrera" required></v-text-field>
            </v-col>
            <v-col>
              <v-select v-model="degreeForm.levelOfDegree" :items="NivelEstudio" label="Nivel de Estudio"
                outlined></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field v-model="degreeForm.countryDegree" label="País" required></v-text-field>
            </v-col>
            <v-col>
              <VueDatePicker v-model="degreeForm.graduationYearDegree" year-picker :teleport="true"
                placeholder="Año de titulación" />
            </v-col>
            <v-col>
              <v-select v-model="degreeForm.graduationModalityDegree" :items="ModalidadGraduacion"
                label="Modalidad Graduación" outlined></v-select>
            </v-col>
            <v-col>
              <v-file-input @change="loadDegreeFile($event)" accept="application/pdf" label="Seleccionar archivo PDF"
                outlined></v-file-input>
              <p style="text-align: right;">Adjuntar título escaneado</p>
            </v-col>
          </v-row>
        </v-col>
      </v-card-text>
    </v-card>
    <v-alert v-model="alert" close-text="Close Alert" color="error" dark dismissible class="mx-15">
      Debe llenar todos los campos requeridos.
    </v-alert>
    <v-col>
      <v-btn v-if="degreeForms.length < 3" @click="addDegreeForm()" color="warning" class="fixed-bottom mr-2">AGREGAR
        NUEVA FORMACIÓN</v-btn>
    </v-col>
    <v-col>

    </v-col>
    <v-card v-for="(postDegreeForm, index2) in postDegreeForms" :key="index2" class="mb-4">
      <v-card-title>
        <v-col class="d-flex justify-center aling-center">
          <h3 class="headline">FORMACION DE POSTGRADO</h3>
          <v-btn v-if="index2 !== 0" icon @click="deletePostDegreeForm(index2)">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-card-title>
      <v-card-text>
        <v-col>
          <v-row>
            <v-col>
              <v-text-field v-model="postDegreeForm.universityPostDegree" label="Universidad o Institución"
                required></v-text-field>
            </v-col>
            <v-col>
              <v-text-field v-model="postDegreeForm.namePostDegree" label="Nombre del postgrado" required></v-text-field>
            </v-col>
            <v-col>
              <v-select v-model="postDegreeForm.titlePostDegree" :items="PostNivelEstudio" label="Grado"
                outlined></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field v-model="postDegreeForm.countryPostDegree" label="País" required></v-text-field>
            </v-col>
            <v-col>
              <VueDatePicker v-model="postDegreeForm.graduationYearPostDegree" year-picker :teleport="true"
                placeholder="Año de Titulación" />
            </v-col>
            <v-col>
              <v-select v-model="postDegreeForm.graduationModalityPostDegree" :items="ModalidadGraduacionPost"
                label="Modalidad de graduación" outlined></v-select>
            </v-col>
            <v-col>
              <v-file-input v-model="postDegreeForm.filePostDegree" @change="loadPostDegreeFile($event)"
                accept="application/pdf" label="Seleccionar archivo PDF" outlined></v-file-input>
              <p style="text-align: right;">Adjuntar título escaneado</p>

            </v-col>
          </v-row>
        </v-col>
      </v-card-text>
    </v-card>
    <v-col>
      <v-btn v-if="postDegreeForms.length < 3" @click="addPostDegreeForm()" color="warning"
        class="fixed-bottom mr-2">AGREGAR
        NUEVO POSTGRADO</v-btn>
      <v-col>
        <v-btn class="success" @click="ableCoursesForm();">guardar</v-btn>
        <!-- <v-btn class="success" @click="ableCoursesForm(); saveDataDegrees(); uploadDegreeFiles(); saveDataPostDegrees(); uploadPostDegreeFiles()">guardar</v-btn> -->
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
            <v-btn color="primary" to="/form3">OK</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>
    <v-row>

    </v-row>
  </v-sheet>
</template>
      
<script>
import { database } from '../firebase/firebase'
import { addDoc, collection, doc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';



export default {
  props: ["userId"],
  components: {
    VueDatePicker
  },
  data() {
    return {
      // idUser: this.userId,
      idUser:'aljiar23@gmail.com',
      dialogVisible: false,
      estate: true,
      alert: false,
      local: '',
      url: '',
      listOfPaths: [],
      degreeForms: [
        {
          universityDegree: '',
          careerDegree: '',
          levelOfDegree: '',
          countryDegree: '',
          graduationYearDegree: '',
          graduationModalityDegree: '',
          fileDegree: null,
          fileDegreePath: '',
          degreeFilled: false,

        }
      ],
      degreeFiles: [],
      postDegreeForms: [
        {
          universityPostDegree: '',
          namePostDegree: '',
          titlePostDegree: '',
          countryPostDegree: '',
          graduationYearPostDegree: '',
          graduationModalityPostDegree: '',
          filePostDegree: null,
          filePostDegreePath: '',
          postDegreeFilled: false,
        }
      ],
      postDegreeFiles: [],
      selectedPostEstudyType: null,
      PostNivelEstudio: [
        'Diplomado',
        'Especialidad Técnica',
        'Especialidad Superior',
        'Especialidad Clínico Quirúrgico',
        'Maestría M.Sc.',
        'Maestría Mgr.',
        'Master',
        'Doctorado Ph.D.',
        'Posdoctorado'
      ],

      selectedEstudyType: null,
      NivelEstudio: [
        'Licenciatura',
        'Tecnico universitario'
      ],
      selectedModalityPostType: '',
      ModalidadGraduacionPost: [
        'Monografia',
        'Tesis',
        'Otros'
      ],
      selectedModalityType: '',
      ModalidadGraduacion: [
        'Tesis',
        'Exámen de Grado',
        'Proyecto de Grado',
        'Trabajo Dirigido',
        'Excelencia Académica',
        'Doble Titulación'
      ],
      selectedYear: null,
      years: [
        '1990',
        '1991',
      ]
    }
  },
  methods: {
    ableCoursesForm() {
      this.$emit('able-courses-form');
    },
    saveDataDegrees() {
      console.log(this.idUser)
      const documentRef = doc(database, 'instructors', this.idUser)
      const collectionRef = collection(documentRef, 'degrees')
      this.degreeForms.forEach((degreeFormValue) => {
        addDoc(collectionRef, {
          universityDegree: degreeFormValue.universityDegree,
          careerDegree: degreeFormValue.careerDegree,
          levelOfDegree: degreeFormValue.levelOfDegree,
          countryDegree: degreeFormValue.countryDegree,
          graduationYearDegree: degreeFormValue.graduationYearDegree,
          graduationModalityDegree: degreeFormValue.graduationModalityDegree,
        })
      })

    },
    uploadDegreeFiles() {
      const storage = getStorage();
      let newIdUser = this.idUser
      this.degreeFiles.forEach((degreeFileValue) => {
        const storageRef = ref(storage, newIdUser + '/degreeFiles' + '/' + degreeFileValue.name)
        uploadBytes(storageRef, degreeFileValue).then((snapshot) => {
          console.log('Uploaded a blob or file!');
        })
      })
    },
    saveDataPostDegrees() {
      const documentRef = doc(database, 'instructors', this.idUser)
      const collectionRef = collection(documentRef, 'postDegrees')
      this.postDegreeForms.forEach((postDegreeFormValue) => {
        addDoc(collectionRef, {
          universityPostDegree: postDegreeFormValue.universityPostDegree,
          namePostDegree: postDegreeFormValue.namePostDegree,
          titlePostDegree: postDegreeFormValue.titlePostDegree,
          countryPostDegree: postDegreeFormValue.countryPostDegree,
          graduationYearPostDegree: postDegreeFormValue.graduationYearPostDegree,
          graduationModalityPostDegree: postDegreeFormValue.graduationModalityPostDegree,
        })
      })

    },
    uploadPostDegreeFiles() {
      const storage = getStorage();
      let newIdUser = this.idUser
      this.postDegreeFiles.forEach((postDegreeFileValue) => {
        const storageRef = ref(storage, newIdUser + '/postDegreeFiles/' + postDegreeFileValue.name)
        uploadBytes(storageRef, postDegreeFileValue).then((snapshot) => {
          console.log('Uploaded a blob or file!');
        })
      })
    },
    addDegreeForm() {
      if (this.degreeForms.length < 3 && this.checkDegreeList()) {
        this.degreeForms.push({
          universityDegree: '',
          careerDegree: '',
          levelOfDegree: '',
          countryDegree: '',
          graduationYearDegree: '',
          graduationModalityDegree: '',
          fileDegree: '',
          degreeFilled: false
        });
      }
    },
    addPostDegreeForm() {
      if (this.postDegreeForms.length < 3 && this.checkPostDegreeList()) {
        this.postDegreeForms.push({
          universityPostDegree: '',
          namePostDegree: '',
          titlePostDegree: '',
          countryPostDegree: '',
          graduationYearPostDegree: '',
          graduationModalityPostDegree: '',
          filePostDegree: '',
          postDegreeFilled: false
        });
      }
    },
    deleteDegreeForm(index) {
      this.degreeForms.splice(index, 1);
    },
    deletePostDegreeForm(index2) {
      this.postDegreeForms.splice(index2, 1);
    },
    loadDegreeFile(e) {
      let newFileDegree = e.target.files[0]
      console.log(newFileDegree)
      this.degreeFiles.push(newFileDegree)
      this.degreeForms[this.degreeForms.length - 1].degreeFilled = true
    },
    loadPostDegreeFile(e) {
      let newFilePostDegree = e.target.files[0]
      console.log(newFilePostDegree)
      this.postDegreeFiles.push(newFilePostDegree)
      this.postDegreeForms[this.postDegreeForms.length - 1].postDegreeFilled = true
    },
    checkDegreeList() {
      let listDegreeFilled = true
      this.degreeForms.forEach((degreeForm) => {
        if (degreeForm.universityDegree
          && degreeForm.careerDegree
          && degreeForm.levelOfDegree
          && degreeForm.graduationModalityDegree
          && degreeForm.countryDegree
          && degreeForm.graduationYearDegree
          && degreeForm.fileDegree
          && degreeForm.degreeFilled) {
          listDegreeFilled = true
        } else {
          listDegreeFilled = false
        }
      })
      console.log(listDegreeFilled)
      return listDegreeFilled
    },
    checkPostDegreeList() {
      let listPostDegreeFilled = true
      this.postDegreeForms.forEach((postDegreeForm) => {
        if (postDegreeForm.universityPostDegree
          && postDegreeForm.namePostDegree
          && postDegreeForm.titlePostDegree
          && postDegreeForm.countryPostDegree
          && postDegreeForm.graduationYearPostDegree
          && postDegreeForm.graduationModalityPostDegree
          && postDegreeForm.filePostDegree
          && postDegreeForm.postDegreeFilled) {
          listPostDegreeFilled = true
        } else {
          listPostDegreeFilled = false
        }
      })
      console.log(listPostDegreeFilled)
      return listPostDegreeFilled
    },
  },
}
</script>
<style></style>