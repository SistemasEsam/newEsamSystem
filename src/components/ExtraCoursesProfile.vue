<template>
  <v-sheet width="1000" class="mx-auto">
    <v-card v-for="(courseForm, index) in courseForms" :key="index" class="mb-4">
      <v-card-title>
        <v-col class="d-flex justify-center aling-center">
          <h3 class="headline">CURSOS</h3>
          <v-btn v-if="index !== 0" icon @click="deleteCourseForm(index)">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-card-title>
      <v-card-text>
        <v-col>
          <v-row>
            <v-col>
              <v-text-field v-model="courseForm.institutionCourse" label="Universidad o Institución" required></v-text-field>
            </v-col>
            <v-col>
              <v-text-field v-model="courseForm.nameCourse" label="Nombre de Curso o Taller" required></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field v-model="courseForm.countryCourse" label="País" required></v-text-field>
            </v-col>
            <v-col>
              <v-select v-model="courseForm.yearCourse" :items="years" label="Año de publicación" outlined></v-select>
            </v-col>
            <v-col>
              <v-file-input v-model="courseForm.fileCourse" accept="application/pdf" label="Seleccionar archivo PDF"
                outlined></v-file-input>
              <p style="text-align: right;">Adjuntar certificado escaneado</p>
            </v-col>
          </v-row>
        </v-col>
      </v-card-text>
    </v-card>
    <v-col>
      <v-btn v-if="courseForms.length < 3" @click="addCourseForm()" color="warning" class="fixed-bottom mr-2">AGREGAR
        NUEVO CURSO</v-btn>
    </v-col>
    <v-col>
    </v-col>
    <v-card v-for="(publicationForm, index2) in publicationForms" :key="index2" class="mb-4">
      <v-card-title>
        <v-col class="d-flex justify-center aling-center">
          <h3 class="headline">PRODUCCION INTELECTUAL</h3>
          <v-btn v-if="index2 !== 0" icon @click="deletePublicationForm(index2)">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-card-title>
      <v-card-text>
        <v-col>
          <v-row>
            <v-col>
              <v-text-field v-model="publicationForm.namePublication" label="Nombre de publicación" required></v-text-field>
            </v-col>
            <v-col>
              <v-text-field v-model="publicationForm.publisher" label="Enlace o Editorial de Publicación"
                required></v-text-field>
            </v-col>
            <v-col>
              <v-select v-model="publicationForm.typePublication" :items="publishType" label="Tipo de publicación"
                outlined></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field v-model="publicationForm.countryPublication" label="País" required></v-text-field>
            </v-col>
            <v-col>
              <v-menu ref="menu" v-model="publicationForm.menu" :close-on-content-click="false" transition="scale-transition"
                offset-y min-width="290px">
                <template v-slot:activator="{ on }">
                  <v-text-field v-model="publicationForm.datePublication" label="Fecha de publicación" outlined readonly
                    v-on="on"></v-text-field>
                </template>
                <v-date-picker v-model="publicationForm.datePublication" @input="menu = false"></v-date-picker>
              </v-menu>
            </v-col>
            <v-col>
              <v-file-input v-model="publicationForm.filePublication" accept="application/pdf" label="Seleccionar archivo PDF"
                outlined></v-file-input>
            </v-col>
          </v-row>
        </v-col>
      </v-card-text>
    </v-card>
    <v-btn v-if="publicationForms.length < 3" @click="addPublicationForm()" color="warning" class="fixed-bottom mr-2">Agregar
      formulario</v-btn>
    <v-col>
      <v-btn class="success">guardar</v-btn>
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
          <v-btn color="primary" to="/form4">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-sheet>
</template>

<script>
import { database } from '../firebase/firebase'
import { addDoc, collection, doc } from "firebase/firestore";

export default {
  data() {
    return {
      dialogVisible: false,
      estate: true,
      local: '',
      courseForms: [
        {
          institutionCourse: '',
          nameCourse: '',
          countryCourse: '',
          yearCourse: '',
          fileCourse: null
        }
      ],
      publicationForms: [
        {
          namePublication: '',
          publisher: '',
          typePublication: '',
          countryPublication: '',
          datePublication: '',
          filePublication: null
        }
      ],
      publishType: [
        'Libro',
        'Revista',
        'Articulo'
      ],
      NivelEstudio: [
        'Licenciado',
        'Magister',
        'Doctor',
        'Otro'
      ],
      ModalidadGraduacion: [
        'Tesis',
        'Trabajo Dirigido',
        'Doble Titulacion',
        'Otro'
      ],
      menu: false,
      menu2: false,
      years: []
    }
  },
  methods: {
    addCourseForm(){
      if (this.courseForms.length < 3) {
        this.courseForms.push({
          institutionCourse: '',
          nameCourse: '',
          countryCourse: '',
          yearCourse: '',
          fileCourse: null
        })
      }
    },
    addPublicationForm(){
      if(this.publicationForms.length < 3){
        this.publicationForms.push({
          namePublication: '',
          publisher: '',
          typePublication: '',
          countryPublication: '',
          datePublication: '',
          filePublication: null
        })
      }
    },
    deleteCourseForm(index) {
      this.courseForms.splice(index, 1);
    },
    deletePublicationForm(index) {
      this.publicationForms.splice(index, 1);
    },
    saveDataCourses() {
      this.courseForms.forEach((courseFormValue)=>{
        const documentRef = doc(database,'instructors',this.idUser)
        const collectionRef = collection(documentRef,'courses')
        addDoc(collectionRef,{
          institutionCourse: courseFormValue.institutionCourse,
          nameCourse: courseFormValue.nameCourse,
          countryCourse: courseFormValue.countryCourse,
          yearCourse: courseFormValue.yearCourse,
        })
        
      })
    },
    saveDataPublication() {
      this.publicationForms.forEach((publicationFormValue)=>{
        const documentRef = doc(database,'instructors',this.idUser)
        const collectionRef = collection(documentRef,'courses')
        addDoc(collectionRef,{
          namePublication: publicationFormValue.namePublication,
          publisher: publicationFormValue.publisher,
          typePublication: publicationFormValue.typePublication,
          countryPublication: publicationFormValue.countryPublication,
          datePublication: publicationFormValue.datePublication,
        })
        
      })
    },
  }

}
</script>
