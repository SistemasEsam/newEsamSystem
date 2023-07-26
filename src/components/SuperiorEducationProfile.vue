<template>
  <H1>{{this.idUser}}</H1>
    
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
              <v-text-field v-model="degreeForm.graduationYearDegree" label="Año de titulación" outlined></v-text-field>
            </v-col>
            <v-col>
              <v-select v-model="degreeForm.graduationModalityDegree" :items="ModalidadGraduacion"
                label="Modalidad Graduación" outlined></v-select>
            </v-col>
            <v-col>
              <v-file-input v-model="degreeForm.fileDegree" accept="application/pdf" label="Seleccionar archivo PDF"
                outlined></v-file-input>
              <p style="text-align: right;">Adjuntar título escaneado</p>
            </v-col>
          </v-row>
        </v-col>
      </v-card-text>
    </v-card>
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
              <v-select v-model="postDegreeForm.graduationYearPostDegree" :items="years" label="Año de titulación"
                outlined></v-select>
            </v-col>
            <v-col>
              <v-select v-model="postDegreeForm.graduationModalityPostDegree" :items="ModalidadGraduacionPost"
                label="Modalidad de graduación" outlined></v-select>
            </v-col>
            <v-col>
              <v-file-input v-model="postDegreeForm.filePostDegree" accept="application/pdf"
                label="Seleccionar archivo PDF" outlined></v-file-input>
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
        <!--<v-btn class="success" @click="ableCoursesForm(); saveDataDegrees(); saveDataPostDegrees()">guardar</v-btn>-->
        <v-btn class="success" @click="ableCoursesForm() ">guardar</v-btn>
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

export default {
  props: ["userId"],
  data() {
    return {
      idUser: this.userId,
      dialogVisible: false,
      estate: true,
      local: '',
      fileNamePre: [],
      degreeForms: [
        {
          universityDegree: '',
          careerDegree: '',
          levelOfDegree: '',
          countryDegree: '',
          graduationYearDegree: '',
          graduationModalityDegree: '',
          fileDegree: null,
        }
      ],
      postDegreeForms: [
        {
          universityPostDegree: '',
          namePostDegree: '',
          titlePostDegree: '',
          countryPostDegree: '',
          graduationYearPostDegree: '',
          graduationModalityPostDegree: '',
          filePostDegree: null
        }
      ],
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
      this.degreeForms.forEach((degreeFormValue)=>{
        const documentRef = doc(database,'instructors',this.idUser)
        const collectionRef = collection(documentRef,'degrees')
        addDoc(collectionRef,{
          universityDegree: degreeFormValue.universityDegree,
          careerDegree: degreeFormValue.careerDegree,
          levelOfDegree: degreeFormValue.levelOfDegree,
          countryDegree: degreeFormValue.countryDegree,
          graduationYearDegree: degreeFormValue.graduationYearDegree,
          graduationModalityDegree: degreeFormValue.graduationModalityDegree,
        })
        
      })

    },
    saveDataPostDegrees() {
      this.postDegreeForms.forEach((postDegreeFormValue)=>{
        const documentRef = doc(database,'instructors',this.idUser)
        const collectionRef = collection(documentRef,'postDegrees')
        addDoc(collectionRef,{
          universityPostDegree: postDegreeFormValue.universityPostDegree,
          namePostDegree: postDegreeFormValue.namePostDegree,
          titlePostDegree: postDegreeFormValue.titlePostDegree,
          countryPostDegree: postDegreeFormValue.countryPostDegree,
          graduationYearPostDegree: postDegreeFormValue.graduationYearPostDegree,
          graduationModalityPostDegree: postDegreeFormValue.graduationModalityPostDegree,
        })
      })

    },
    addDegreeForm() {
      if (this.degreeForms.length < 3) {
        this.degreeForms.push({
          universityDegree: '',
          careerDegree: '',
          levelOfDegree: '',
          countryDegree: '',
          graduationYearDegree: '',
          graduationModalityDegree: '',
          fileDegree: '',
        });
      }
    },
    addPostDegreeForm() {
      if (this.postDegreeForms.length < 3) {
        this.postDegreeForms.push({
          universityPostDegree: '',
          namePostDegree: '',
          titlePostDegree: '',
          countryPostDegree: '',
          graduationYearPostDegree: '',
          graduationModalityPostDegree: '',
          filePostDegree: ''
        });
      }
    },
    deleteDegreeForm(index) {
      this.degreeForms.splice(index, 1);
    },
    deletePostDegreeForm(index2) {
      this.postDegreeForms.splice(index2, 1);
    },


  }
}
</script>
<style></style>