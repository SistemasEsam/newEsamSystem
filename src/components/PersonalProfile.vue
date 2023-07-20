<template>
    <v-sheet width="1000" class="mx-auto" >
     
           <v-col class="d-flex justify-center aling-center">
               <v-avatar size="150" color="warning" >
                    <img class="mx-auto" :src="imageUrl" alt="Circle image">
               </v-avatar>
           </v-col>
           <v-col class="d-flex justify-center aling-center">
               <p class="text-body-1 font-weight-bold">PERFIL PERSONAL</p>
           </v-col>
           <v-row>
               <v-col>
                   <v-text-field
                   v-model="nombres"
                   :rules="textoRules"
                   label="Nombres"
                   required
                   ></v-text-field>
               </v-col>
               <v-col>
                   <v-text-field
                   v-model="apellidoPaterno"
                   :rules="textoRules1"
                   label="Apellido Paterno"
                   required
               ></v-text-field>
               </v-col>
               <v-col>
                   <v-text-field
                   v-model="apellidoMaterno"
                   :rules="textoRules2"
                   label="Apellido Materno"
                   required
                   ></v-text-field>
               </v-col>
           </v-row>
           <v-row>
             <v-col>
               <v-text-field
               v-model="contactouno"
               :rules="numeroRules2"
               label="Número de Contacto"
               required
               ></v-text-field>
             </v-col>
             <v-col>
               <v-text-field
               v-model="contactodos"
               :rules="numeroRules"
               label="Número de Referencia (OPCIONAL)"
               
             ></v-text-field>
             </v-col>
             <v-col>
               <v-text-field
               v-model="email"
               :rules="emailRules"
               label="Correo Electrónico"
               required
               ></v-text-field>
             </v-col>
           </v-row>
           <v-row>
             <v-col>
               <v-select v-model="selectedCountry" :items="countries" item-text="name" item-value="code" label="País">
               </v-select>
             </v-col>
             <v-col>
               <v-text-field
               v-model="cityRadication"
               label="Ciudad de Radicación"
               required
               ></v-text-field>
             </v-col>
             <v-col>
               <v-text-field
               v-model="addres"
               label="Dirección"
               required
               ></v-text-field>
             </v-col>
           </v-row>
           <v-row>
             <v-col>
               <v-select
               v-model="selectedDocumentType"
               :items="documentTypes"
               label="Tipo de documento"
               outlined
               ></v-select>
             </v-col>
             <v-col>
               <v-text-field
               v-model="numberDoc"
               label="Número de Documento"
               required
               ></v-text-field>
             </v-col>
             <v-col>
               <v-menu
               ref="menu"
               v-model="menu"
               :close-on-content-click="false"
               transition="scale-transition"
               offset-y
               min-width="290px"
               >
               <template v-slot:activator="{ on }">
                 <v-text-field
                 v-model="dateOfBirth"
                 label="Fecha de nacimiento"
                 outlined
                 readonly
                 v-on="on"
                 ></v-text-field>
               </template>
               <v-date-picker v-model="dateOfBirth" @input="menu = false"></v-date-picker>
               </v-menu>
       </v-col>
       <v-col>
         <v-radio-group v-model="gender">
     <v-radio label="Masculino" value="masculino"></v-radio>
     <v-radio label="Femenino" value="femenino"></v-radio>
     <v-radio label="Otro" value="otro"></v-radio>
   </v-radio-group>
   <p>Género seleccionado: {{ gender }}</p>
       </v-col>
         </v-row>
           <v-col class="d-flex justify-center aling-center">
               <v-file-input v-model="file" label="SELECCIONA UNA IMAGEN FORMAL" @change="uploadFile()" accept="image/*">
               </v-file-input>
           </v-col>  
           <v-col>

             <v-btn @click="ableDegreeForm"  color="warning"  class="fixed-bottom mr-2">guardar </v-btn>
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
         <v-btn color="primary" to="/form2">OK</v-btn>
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
       nombres: '',
       apellidoPaterno: '',
       apellidoMaterno: '',
       contactouno: null,
       contactodos: null,
       email: '',
       selectedCountry: '',
       cityRadication:'',
       addres:'',
       selectedDocumentType: null,
       numberDoc:'',
       dateOfBirth: null,
       gender:'',
       estate:1,
       file: null,
       imageUrl: '',
       
     emailRules: [
       v => !!v || 'El correo electrónico es requerido',
       v => /.+@.+\..+/.test(v) || 'Ingrese una dirección de correo electrónico válida'
     ],
     numeroRules: [
     (v) => {
         if (v === null || v === "") return true; // Permite campo vacío
         return /^\d+$/.test(v) || "Solo se permiten números";
     }
     ],    
     numeroRules2: [
       v => !!v || 'El número es requerido',
       v => /^[0-9]+$/.test(v) || 'Ingrese solo números'
     ],    
     textoRules: [
     (v) => !!v || "El campo es requerido",
       (v) => /^[A-Za-z\s]+$/.test(v) || "Solo se permiten letras",
     ],  
     textoRules1: [
     (v) => !!v || "El campo es requerido",
       (v) => /^[A-Za-z\s]+$/.test(v) || "Solo se permiten letras",
     ],    
     textoRules2: [
     (v) => !!v || "El campo es requerido",
       (v) => /^[A-Za-z\s]+$/.test(v) || "Solo se permiten letras",
     ],
      


      
     countries: [
       { name: 'Argentina', code: 'AR' },
       { name: 'Bolivia', code: 'BO' },
       { name: 'Chile', code: 'CL' },
       { name: 'Colombia', code: 'CO' },
       { name: 'Ecuador', code: 'EC' },
       { name: 'Peru', code: 'PE' },
       { name: 'Uruguay', code: 'UY' },
       { name: 'Venezuela', code: 'VE' },
       { name: "Alemania", code: "DE" },
 { name: "Francia", code: "FR" },
 { name: "Reino Unido", code: "GB" },
 { name: "Italia", code: "IT" },
 { name: "España", code: "ES" },
 { name: "Países Bajos", code: "NL" },
 { name: "Suiza", code: "CH" },
 { name: "Suecia", code: "SE" },
 { name: "Noruega", code: "NO" },
 { name: "Austria", code: "AT" },
 
 { name: "Estados Unidos", code: "US" },
 { name: "Canadá", code: "CA" },
 { name: "México", code: "MX" },
 { name: "Brasil", code: "BR" },
 { name: "Chile", code: "CL" },
 { name: "Ecuador", code: "EC" },
     ],

     documentTypes: [
       'Carnet de Identidad',
       'Pasaporte'
      
     ],    
     
     menu: false,
     }

     
   },
   methods: {
    ableDegreeForm(){
      this.$emit('able-degree-form');
    }
   }
 }
</script>
 