<template>
  <v-sheet width="1000" class="mx-auto">

    <p>{{ local.name }}</p>
    <v-card v-for="(formulario, index) in degreeForm" :key="index" class="mb-4">
      <v-card-title>
        <v-col class="d-flex justify-center aling-center">
          <h3 class="headline">FORMACION DE PREGRADO</h3>
          <v-btn v-if="index !== 0" icon @click="eliminarFormulario(index)">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-card-title>
      <v-card-text>
        <v-col>
          <v-row>
            <v-col>
              <v-text-field v-model="formulario.unipre" label="Universidad o Institución" required></v-text-field>
            </v-col>
            <v-col>
              <v-text-field v-model="formulario.carrerapre" label="Carrera" required></v-text-field>
            </v-col>
            <v-col>
              <v-select v-model="formulario.EstudyTypePre" :items="NivelEstudio" label="Nivel de Estudio"
                outlined></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field v-model="formulario.paispre" label="País" required></v-text-field>
            </v-col>
            <v-col>
              <v-select v-model="formulario.selectedYearPre" :items="years" label="Año de titulación" outlined></v-select>
            </v-col>
            <v-col>
              <v-select v-model="formulario.selectedModalityTypePre" :items="ModalidadGraduacion"
                label="Modalidad Graduación" outlined></v-select>
            </v-col>
            <v-col>
              <v-file-input v-model="formulario.archivopre" accept="application/pdf" label="Seleccionar archivo PDF"
                outlined></v-file-input>
              <p style="text-align: right;">Adjuntar título escaneado</p>
            </v-col>
          </v-row>
        </v-col>
      </v-card-text>
    </v-card>
    <v-col>
      <v-btn v-if="degreeForm.length < 3" @click="agregarFormulario" color="warning" class="fixed-bottom mr-2">AGREGAR
        NUEVA FORMACIÓN</v-btn>
    </v-col>
    <v-col>

    </v-col>
    <v-card v-for="(formulario2, index2) in postDegreeForm" :key="index2" class="mb-4">
      <v-card-title>
        <v-col class="d-flex justify-center aling-center">
          <h3 class="headline">FORMACION DE POSTGRADO</h3>
          <v-btn v-if="index2 !== 0" icon @click="eliminarFormulario2(index2)">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-card-title>
      <v-card-text>
        <v-col>
          <v-row>
            <v-col>
              <v-text-field v-model="formulario2.universidadPost" label="Universidad o Institución"
                required></v-text-field>
            </v-col>
            <v-col>
              <v-text-field v-model="formulario2.carreraPost" label="Nombre del postgrado" required></v-text-field>
            </v-col>
            <v-col>
              <v-select v-model="formulario2.PostEstudyType" :items="PostNivelEstudio" label="Grado" outlined></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field v-model="formulario2.paisPost" label="País" required></v-text-field>
            </v-col>
            <v-col>
              <v-select v-model="formulario2.yearPost" :items="years" label="Año de titulación" outlined></v-select>
            </v-col>
            <v-col>
              <v-select v-model="formulario2.ModalitPostType" :items="ModalidadGraduacionPost"
                label="Modalidad de graduación" outlined></v-select>
            </v-col>
            <v-col>
              <v-file-input v-model="formulario2.archivoPost" accept="application/pdf" label="Seleccionar archivo PDF"
                outlined></v-file-input>
              <p style="text-align: right;">Adjuntar título escaneado</p>

            </v-col>
          </v-row>
        </v-col>
      </v-card-text>
    </v-card>
    <v-col>
      <v-btn v-if="postDegreeForm.length < 3" @click="agregarFormulario2" color="warning" class="fixed-bottom mr-2">AGREGAR
        NUEVO POSTGRADO</v-btn>
      <v-col>
        <v-btn class="success" @click="ableCoursesForm">guardar</v-btn>
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
import { doc, setDoc } from "firebase/firestore";

export default {
  props:["userId"],
  data() {
    return {
      idUser:this.userId,
      dialogVisible: false,
      estate: true,
      local: '',
      fileNamePre: [],
      degreeForm: [
        {
          unipre: '',
          carrerapre: '',
          EstudyTypePre: '',
          paispre: '',
          selectedYearPre: '',
          selectedModalityTypePre: '',
          archivopre: null,
        }
      ],
      postDegreeForm: [
        {
          universidadPost: '',
          carreraPost: '',
          PostEstudyType: '',
          paisPost: '',
          yearPost: '',
          ModalitPostType: '',
          archivoPost: null
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
      years: []
    }
  },
  methods: {
    ableCoursesForm() {
      this.$emit('able-courses-form');
    }
  }
}
</script>
<style></style>