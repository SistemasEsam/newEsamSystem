<template>
    <v-sheet width="1000" class="mx-auto" >  
  
       <v-card v-for="(formulario, index) in formularios" :key="index" class="mb-4">
           <v-card-title>
            <v-col class="d-flex justify-center aling-center">
               <h2 class="headline">HABILIDADES</h2>
               <v-btn v-if="index !== 0" icon @click="eliminarFormulario(index)">
               <v-icon>mdi-close</v-icon>
               </v-btn>
           </v-col>
       </v-card-title>
       <v-card-text>
           <v-col>
               <v-row>
                   <v-col>
                     <v-text-field v-model="formulario.habilidad" label="Habilidad" required></v-text-field>  
                   </v-col> 
               </v-row>
             
           </v-col>
       </v-card-text>
       
  </v-card>
  
  
  <v-col>
  <v-btn v-if="formularios.length < 5" @click="agregarFormulario"  color="warning"  class="fixed-bottom mr-2">AGREGAR NUEVA HABILIDAD</v-btn>
  </v-col>
  <v-col>
  
    
  </v-col>
  
       <v-card v-for="(formulario2, index2) in formularios2" :key="index2" class="mb-4">
           <v-card-title>
            <v-col class="d-flex justify-center aling-center">
               <h2 class="headline">IDIOMAS</h2>
               <v-btn v-if="index2 !== 0" icon @click="eliminarFormulario2(index2)">
               <v-icon>mdi-close</v-icon>
               </v-btn>
           </v-col>
       </v-card-title>
       <v-card-text>
           <v-col>
               <v-row>
               
      <v-select
        v-model="formulario2.idioma"
        :items="languages"
        label="Idioma"
        outlined
      ></v-select>
               </v-row>
  
  
   
      <h3>Nivel de escritura:</h3>
      <v-btn-toggle v-model="formulario2.lvlwrite">
        <v-btn value="basico">Basico</v-btn>
        <v-btn value="medio">Medio</v-btn>
        <v-btn value="avanzado">Avanzado</v-btn>
      </v-btn-toggle>
  
      <h3>Nivel oral:</h3>
      <v-btn-toggle v-model="formulario2.lvlspeak">
        <v-btn value="basico">Basico</v-btn>
        <v-btn value="medio">Medio</v-btn>
        <v-btn value="avanzado">Avanzado</v-btn>
      </v-btn-toggle>
  
      <h3>Nivel de lectura:</h3>
      <v-btn-toggle v-model="formulario2.lvlread">
        <v-btn value="basico">Basico</v-btn>
        <v-btn value="medio">Medio</v-btn>
        <v-btn value="avanzado">Avanzado</v-btn>
      </v-btn-toggle>
                
                   </v-col>
          
          
       </v-card-text>
       
  </v-card>
  <v-btn v-if="formularios2.length < 3" @click="agregarFormulario2"  color="warning"  class="fixed-bottom mr-2">AGREGAR NUEVO IDIOMA</v-btn>
  <v-col>
    <v-btn class="success" @click="guardardatos();changeestate(false)">guardar</v-btn>  
  
  
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
            <v-btn color="primary" to="/">OK</v-btn>
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
        local:'',
        estate:true,
        formularios: [
          {
            habilidad:''
          }
        ],
        formularios2: [
          {
            idioma: '',
            lvlwrite: '',
            lvlspeak:'',
            lvlread:''
          }
        ],
      
        languages: ['Español', 'Inglés', 'Francés', 'Alemán', 'Italiano','Portugues','Quechua','Aymara']
      }
    },
    methods: {

    }
  
      
  }
  </script>
  