<template>
    <v-sheet width="1000" class="mx-auto" > 

       <h3 class="headline">EXPERIENCIA LABORAR</h3>
       <v-card v-for="(formulario, index) in formularios" :key="index" class="mb-4">
           <v-card-title>
            <v-col class="d-flex justify-center aling-center">
               <h2 class="headline">EXPERIENCIA LABORAR DE LOS ULTIMOS 3 AÑOS</h2>
               <v-btn v-if="index !== 0" icon @click="eliminarFormulario(index)">
               <v-icon>mdi-close</v-icon>
               </v-btn>
           </v-col>
       </v-card-title>
       <v-card-text>
           <v-col>
               <v-row>
                   <v-col>
                     <v-text-field v-model="formulario.nombreexplabo" label="Nombre de empresa o institución" required></v-text-field>  
                   </v-col>
             
                   <v-col>
                     <v-text-field v-model="formulario.cargoexplaboral" label="Cargo" required></v-text-field>
                   </v-col>
               </v-row>
               <v-row>
                 <v-col>
                   <v-checkbox v-model="formulario.aquiexplaboral" label="Aquí estoy trabajando"></v-checkbox>
                 </v-col>
                 <v-col v-if="formulario.aquiexplaboral">
                   <v-menu
               ref="menu"
               v-model="menu1"
               :close-on-content-click="false"
               transition="scale-transition"
               offset-y
               min-width="290px"
               >
               <template v-slot:activator="{ on }">
                 <v-text-field
                 v-model="formulario.inicioexplaboral"
                 label="Fecha de Inicio"
                 outlined
                 readonly
                 v-on="on"
                 ></v-text-field>
               </template>
               <v-date-picker v-model="formulario.inicioexplaboral" @input="menu1 = false"></v-date-picker>
               </v-menu>
                 </v-col>
                 <v-col v-else>
                   <v-menu
               ref="menu"
               v-model="menu5"
               :close-on-content-click="false"
               transition="scale-transition"
               offset-y
               min-width="290px"
               >
               <template v-slot:activator="{ on }">
                 <v-text-field
                 v-model="formulario.incioexplaboraluno"
                 label="Fecha de Inicio"
                 outlined
                 readonly
                 v-on="on"
                 ></v-text-field>
               </template>
               <v-date-picker v-model="formulario.incioexplaboraluno" @input="menu5 = false"></v-date-picker>
               </v-menu>
               <v-menu
               ref="menu"
               v-model="menu4"
               :close-on-content-click="false"
               transition="scale-transition"
               offset-y
               min-width="290px"
               >
               <template v-slot:activator="{ on }">
                 <v-text-field
                 v-model="formulario.finexplaboral"
                 label="Fecha de Finalización"
                 outlined
                 readonly
                 v-on="on"
                 ></v-text-field>
               </template>
               <v-date-picker v-model="formulario.finexplaboral" @input="menu4 = false"></v-date-picker>
               </v-menu>
                 </v-col>
               </v-row>
               <v-row>
                 <v-col>
                   <v-text-field v-model="formulario.paisexplaboral" label="País" required></v-text-field>
                 </v-col>
                 <v-col>
                   <v-text-field v-model="formulario.ciudadexplaboral" label="Ciudad" required></v-text-field>
                 </v-col>
               </v-row>
               <v-col>
                     <v-textarea
                     v-model="formulario.comentexplaboral"
                     label="Descripción de funciones realizadas"
                     placeholder="Escribe tus comentarios aquí"
                     rows="4"
                     auto-grow
                     outlined
                   ></v-textarea>
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
                          <v-text-field v-model="formulario.nombreref" label="Nombre"></v-text-field>
                         </v-col>
                         <v-col>
                           <v-text-field v-model="formulario.apellidoref" label="Apellidos"></v-text-field>
                         </v-col>
                       </v-row>
                       <v-row>
                           <v-col>
                           <v-text-field v-model="formulario.cargoref" label="Cargo de Inmediato Superior"></v-text-field>
                         </v-col>
                         <v-col>
                           <v-text-field
                           v-model="formulario.numeroref"
                           :rules="numeroRules"
                           label="Número de Contacto "
                           required
                           ></v-text-field>

                         </v-col>
                         </v-row>
                     </v-card-text>


               
                
                 
          
               </v-row>
           
           </v-col>
       </v-card-text>
       
</v-card>

<v-col>
 <v-btn v-if="formularios.length < 3" @click="agregarFormulario"  color="warning"  class="fixed-bottom mr-2">AGREGAR NUEVA EXPERIENCIA LABORAL</v-btn>
   
</v-col>
<v-col>
 
</v-col>

       
       
       
       <v-card v-for="(formulario2, index2) in formularios2" :key="index2" class="mb-4">
       <v-card-title>
            <v-col class="d-flex justify-center aling-center">
               <h2 class="headline">EXPERIENCIA COMO DOCENTE</h2>
               <v-btn v-if="index2 !== 0" icon @click="eliminarFormulario2(index2)">
               <v-icon>mdi-close</v-icon>
               </v-btn>
           </v-col>
       </v-card-title>
       <v-card-text>
           <v-col>
               <v-row>
                   <v-col>
                       <v-text-field v-model="formulario2.uniexpdoc" label="Universidad o Institución" required></v-text-field>
                   </v-col>
                   <v-col>
                       <v-text-field v-model="formulario2.materiaexpdoc" label="Materia Impartida" required></v-text-field>
                   </v-col>
                   <v-col>
                       <v-select
                       v-model="formulario2.calidadexpdoc"
                       :items="calidaddoc"
                       label="En calidad de:"
                       outlined></v-select>
                   </v-col>
               </v-row>
               <v-row>
                   <v-col>
                       <v-select
                       v-model="formulario2.gradoexpdoc"
                       :items="publishGrado"
                       label="Grado Académico que impartió"
                       outlined></v-select>
                   </v-col>
                   <v-col>
               <v-menu
               ref="menu2"
               :close-on-content-click="false"
               transition="scale-transition"
               offset-y
               min-width="290px"
               >
               <template v-slot:activator="{ on }">
                 <v-text-field
                 v-model="formulario2.inicioexpdoc"
                 label="Fecha de inicio"
                 outlined
                 readonly
                 v-on="on"
                 ></v-text-field>
               </template>
               <v-date-picker v-model="formulario2.inicioexpdoc" @input="menu2 = false"></v-date-picker>
               </v-menu>
       </v-col>
       <v-col>
               <v-menu
               ref="menu3"
               :close-on-content-click="false"
               transition="scale-transition"
               offset-y
               min-width="290px"
               >
               <template v-slot:activator="{ on }">
                 <v-text-field
                 v-model="formulario2.finexpdoc"
                 label="Fecha de finalización"
                 outlined
                 readonly
                 v-on="on"
                 ></v-text-field>
               </template>
               <v-date-picker v-model="formulario2.finexpdoc" @input="menu3 = false"></v-date-picker>
               </v-menu>
       </v-col>
               </v-row>
           </v-col>
       </v-card-text>
       </v-card>
       <v-btn v-if="formularios2.length < 3" @click="agregarFormulario2"  color="warning"  class="fixed-bottom mr-2">AGREGAR NUEVA EXPERIENCIA COMO DOCENTE</v-btn>

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
         <v-btn color="primary"  to="/form5">OK</v-btn>
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
     isChecked:false,
     dateStart: null,
     menu1: false,
     menu2: false,
     menu3: false,
     numero: null,
     local:'',
     estate:true,

     numeroRules: [
       v => !!v || 'El número es requerido',
       v => /^[0-9]+$/.test(v) || 'Ingrese solo números'
     ],

   
   
     formularios: [
       {
         nombreexplabo:'',
         comentexplaboral:'',
         cargoexplaboral:'',
         aquiexplaboral:false,
         inicioexplaboral:'',
         incioexplaboraluno:'',
         finexplaboral : '',
         paisexplaboral:'',
         ciudadexplaboral : '',
         nombreref:'',
         apellidoref:'',
         cargoref:'',
         numeroref:''


       }
     ],
     formularios2: [
       {
         uniexpdoc: '',
         materiaexpdoc: '',
         calidadexpdoc:'',
         gradoexpdoc:'',
         inicioexpdoc:'',
         finexpdoc:'',
       }
     ],
    
   publishGrado:[

       'PreGrado',
       'PostGrado'

   ],

   calidaddoc :[

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
 }
}
</script>
