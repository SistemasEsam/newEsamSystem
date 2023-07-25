<template>
  <v-sheet width="1000" class="mx-auto">

    <v-col class="d-flex justify-center aling-center">
      <v-avatar size="150" color="warning">
        <img class="mx-auto" :src="imageUrl" alt="Circle image">
      </v-avatar>
    </v-col>
    <v-col class="d-flex justify-center aling-center">
      <p class="text-body-1 font-weight-bold">PERFIL PERSONAL</p>
    </v-col>
    <v-row>
      <v-col>
        <v-text-field v-model="name" :rules="textoRules" label="Nombres" required></v-text-field>
      </v-col>
      <v-col>
        <v-text-field v-model="lastNameF" :rules="textoRules1" label="Apellido Paterno" required></v-text-field>
      </v-col>
      <v-col>
        <v-text-field v-model="lastNameM" :rules="textoRules2" label="Apellido Materno" required></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field v-model="personalPhone" :rules="numeroRules2" label="Número de Contacto" required></v-text-field>
      </v-col>
      <v-col>
        <v-text-field v-model="personalPhoneAux" :rules="numeroRules"
          label="Número de Referencia (OPCIONAL)"></v-text-field>
      </v-col>
      <v-col>
        <v-text-field v-model="email" :rules="emailRules" label="Correo Electrónico" required></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-select v-model="selectedCountry" :items="countries" item-title="countryName" item-value="code" label="País">
        </v-select>
      </v-col>
      <v-col>
        <v-text-field v-model="cityRadication" label="Ciudad de Radicación" required></v-text-field>
      </v-col>
      <v-col>
        <v-text-field v-model="addres" label="Dirección" required></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-select v-model="selectedDocumentType" :items="documentTypes" label="Tipo de documento" outlined></v-select>
      </v-col>
      <v-col>
        <v-text-field v-model="numberId" label="Número de Documento" required></v-text-field>
      </v-col>
      <v-col>
        <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y
          min-width="290px">
          <template v-slot:activator="{ on }">
            <v-text-field v-model="dateOfBirth" label="Fecha de nacimiento" outlined readonly v-on="on"></v-text-field>
            <VueDatePicker v-model="dateOfBirth" :format-locale="es" :format="format" ></VueDatePicker>
          </template>
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

      <v-btn @click="ableDegreeForm(); addUser()" color="warning" class="fixed-bottom mr-2">guardar </v-btn>
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

<script setup>
  import { es } from 'date-fns/locale'
</script>
 
<script>
import { database } from '../firebase/firebase'
import { doc, setDoc } from "firebase/firestore";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';


export default {
  components:{VueDatePicker},
  data() {
    return {
      dialogVisible: false,
      name: '',
      lastNameF: '',
      lastNameM: '',
      personalPhone: null,
      personalPhoneAux: null,
      email: '',
      selectedCountry: '',
      cityRadication: '',
      addres: '',
      selectedDocumentType: null,
      numberId: '',
      dateOfBirth: '',
      gender: '',
      estate: 1,
      file: null,
      imageUrl: '',
      idUser: '',

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
        { countryName: 'Argentina', code: 'AR' },
        { countryName: 'Bolivia', code: 'BO' },
        { countryName: 'Chile', code: 'CL' },
        { countryName: 'Colombia', code: 'CO' },
        { countryName: 'Ecuador', code: 'EC' },
        { countryName: 'Peru', code: 'PE' },
        { countryName: 'Uruguay', code: 'UY' },
        { countryName: 'Venezuela', code: 'VE' },
        { countryName: "Alemania", code: "DE" },
        { countryName: "Francia", code: "FR" },
        { countryName: "Reino Unido", code: "GB" },
        { countryName: "Italia", code: "IT" },
        { countryName: "España", code: "ES" },
        { countryName: "Países Bajos", code: "NL" },
        { countryName: "Suiza", code: "CH" },
        { countryName: "Suecia", code: "SE" },
        { countryName: "Noruega", code: "NO" },
        { countryName: "Austria", code: "AT" },
        { countryName: "Estados Unidos", code: "US" },
        { countryName: "Canadá", code: "CA" },
        { countryName: "México", code: "MX" },
        { countryName: "Brasil", code: "BR" },
        { countryName: "Chile", code: "CL" },
        { countryName: "Ecuador", code: "EC" },
      ],

      documentTypes: [
        'Carnet de Identidad',
        'Pasaporte'

      ],

      menu: false,
    }
  },
  methods: {
    ableDegreeForm() {
      let newIdUser = this.numberId + this.lastNameF + this.lastNameM
      console.log(newIdUser)
      this.$emit('able-degree-form', newIdUser);
    },
    addUser() {
      let newIdUser = this.numberId + this.lastNameF + this.lastNameM
      let birthDate = this.dateOfBirth.getDate()+'/'+ (this.dateOfBirth.getMonth() + 1)+'/'+ this.dateOfBirth.getFullYear()
      console.log(birthDate)
     /*setDoc(doc(database, 'instructors', newIdUser), {
        name: this.name,
        lastNameF: this.lastNameF,
        lastNameM: this.lastNameM,
        email: this.email,
        personalPhone: this.personalPhone,
        personalPhoneAUx: this.personalPhoneAux,
        selectedCountry: this.selectedCountry,
        cityRadication: this.cityRadication,
        addres: this.addres,
        selectedDocumentType: this.selectedDocumentType,
        numberId: this.numberId,
        dateOfBirth: birthDate,
        gender: this.gender,
      })*/
    },
    format(dateOfBirth){

    },
  },

}

</script>
 