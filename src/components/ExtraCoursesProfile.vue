<template>
    <v-sheet width="1000" class="mx-auto" >  
        <v-card v-for="(formulario, index) in formularios" :key="index" class="mb-4">
        <v-card-title>
             <v-col class="d-flex justify-center aling-center">
                <h3 class="headline">CURSOS</h3>
                <v-btn v-if="index !== 0" icon @click="eliminarFormulario(index)">
                <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-col>
        </v-card-title>
  <v-card-text>
    <v-col>
        <v-row>
            <v-col>
                <v-text-field v-model="formulario.unicurso" label="Universidad o Institución" required ></v-text-field>
            </v-col>
            <v-col>
                <v-text-field v-model="formulario.nombrecurso" label="Nombre de Curso o Taller" required ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
        <v-col>
            <v-text-field v-model="formulario.paiscurso" label="País" required ></v-text-field>
        </v-col>
        <v-col>
            <v-select
            v-model="formulario.yearcurso"
            :items="years"
            label="Año de publicación"
            outlined
            ></v-select>
        </v-col>
        <v-col>
            <v-file-input
            v-model="formulario.archivocurso"
            accept="application/pdf"
            label="Seleccionar archivo PDF"
            outlined
            ></v-file-input><p style="text-align: right;">Adjuntar certificado escaneado</p>
        </v-col>
        </v-row>
    </v-col>
  </v-card-text>
</v-card>

<v-col>

<v-btn v-if="formularios.length < 3" @click="agregarFormulario"  color="warning"  class="fixed-bottom mr-2">AGREGAR NUEVO CURSO</v-btn>
</v-col>

<v-col>
  
</v-col>

<v-card v-for="(formulario2, index2) in formularios2" :key="index2" class="mb-4">
        <v-card-title>
             <v-col class="d-flex justify-center aling-center">
                <h3 class="headline">PRODUCCION INTELECTUAL</h3>
                <v-btn v-if="index2 !== 0" icon @click="eliminarFormulario2(index2)">
                <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-col>
        </v-card-title>
  <v-card-text>
    <v-col>
        <v-row>
            <v-col>
                <v-text-field v-model="formulario2.nombrepubli" label="Nombre de publicación" required ></v-text-field>
            </v-col>
            <v-col>
                <v-text-field v-model="formulario2.edipubli" label="Enlace o Editorial de Publicación" required ></v-text-field>
            </v-col>
            <v-col>
                <v-select
                v-model="formulario2.typepubli"
                :items="publishType"
                label="Tipo de publicación"
                outlined
                ></v-select>
              </v-col>
            
        </v-row>
        <v-row>
        <v-col>
            <v-text-field v-model="formulario2.paispubli" label="País" required ></v-text-field>
        </v-col>
        <v-col>
                <v-menu
                ref="menu"
                v-model="formulario2.menu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="290px"
                >
                <template v-slot:activator="{ on }">
                  <v-text-field
                  v-model="formulario2.datepubli"
                  label="Fecha de publicación"
                  outlined
                  readonly
                  v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="formulario2.datepubli" @input="menu = false"></v-date-picker>
                </v-menu>
        </v-col>
        <v-col>
            <v-file-input
            v-model="formulario2.archivopubli"
            accept="application/pdf"
            label="Seleccionar archivo PDF"
            outlined
            ></v-file-input>
        </v-col>
        </v-row>
    </v-col>
  </v-card-text>

  
</v-card>    
<v-btn v-if="formularios2.length < 3" @click="agregarFormulario2"  color="warning"  class="fixed-bottom mr-2">Agregar formulario</v-btn>
<v-col>
  <v-btn class="success" >guardar</v-btn>  


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
export default {
  data() {
    return {
      dialogVisible: false,
      estate:true,
      local:'',
      formularios: [
        {
          unicurso:'',
          nombrecurso :'',
          paiscurso:'',
          yearcurso:'',
          archivocurso:null
        }
      ],
      formularios2: [
        {
          nombrepubli: '',
          edipubli: '',
          typepubli:'',
          paispubli:'',
          datepubli:'',
          archivopubli:null
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

  }
}
</script>
