<template>
  <v-container width="1000" class="mx-auto">
    <v-col class="d-flex justify-center aling-center">
      <v-avatar size="150" color="warning">
        <img class="mx-auto" :src="imageUrl" width="150" height="150">
      </v-avatar>
    </v-col>
    <v-col class="d-flex justify-center aling-center">
      <p class="text-body-1 font-weight-bold">PERFIL PERSONAL</p>
    </v-col>
    <v-row>
      <v-col>
        <v-text-field v-model="name" :rules="textoRules" label="Nombres" @input="name = name.toUpperCase()"
          required></v-text-field>
      </v-col>
      <v-col>
        <v-text-field v-model="lastNameF" :rules="textoRules1" label="Apellido Paterno"
          @input="lastNameF = lastNameF.toUpperCase()" required></v-text-field>
      </v-col>
      <v-col>
        <v-text-field v-model="lastNameM" :rules="textoRules2" label="Apellido Materno"
          @input="lastNameM = lastNameM.toUpperCase()" required></v-text-field>
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
        <v-text-field v-model="cityRadication" label="Ciudad de Radicación"
          @input="cityRadication = cityRadication.toUpperCase()" required></v-text-field>
      </v-col>
      <v-col>
        <v-text-field v-model="addres" label="Dirección" @input="addres = addres.toUpperCase()" required></v-text-field>
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
        <v-select v-model="idExtension" :items="cityExtension" item-title="cityName" item-value="code" label="Extensión"
          outlined></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <VueDatePicker v-model="dateOfBirth" locale="es" :enable-time-picker="false" placeholder="Fecha de Nacimiento"
          :year-range="[1950, 2003]">
        </VueDatePicker>
      </v-col>
      <v-col>
        <v-text-field v-model="idAddNumber" label="Complemento" minlength="3" maxlength="3" :disabled="addOnFlag" required></v-text-field>
      </v-col>
      <v-col>
        <v-radio-group label="Tiene complemento" inline>
          <v-radio label="Si" value=false @change="enableAddOn(false)"></v-radio>
          <v-radio label="No" value=true @change="enableAddOn(true)"></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-select v-model="gender" label="Genero" :items="genderType" >
        </v-select>
      </v-col>
      <v-col>

      </v-col>
      <v-col>

      </v-col>
    </v-row>
    <v-col class="d-flex justify-center aling-center">
      <v-file-input label="SELECCIONA UNA IMAGEN FORMAL" @change="loadPhotoFile($event); showAlert()"
        accept="image/*"></v-file-input>
    </v-col>
    <v-col>
      <v-alert closable density="compact" type="warning" title="Atención" v-show="alertFlag"
        text="Verifique que los datos ingresados sean correctos!"></v-alert>
    </v-col>
  </v-container>
  <v-container>
      <v-btn @click="showNextForm()" color="warning" class="fixed-bottom mr-2">guardar
      </v-btn>
      <!-- <v-btn @click="uploadPhotoProfile(); ableDegreeForm(); addUser(); component='SuperiorEducationProfile' " color="warning" class="fixed-bottom mr-2">guardar </v-btn> -->
  </v-container>
</template>
 
<script>
import { database } from '../firebase/firebase'
import { doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from 'firebase/storage'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import SuperiorEducationProfile from './SuperiorEducationProfile.vue';


export default {
  props: ["userId"],
  components: { VueDatePicker, SuperiorEducationProfile },
  data() {
    return {
      component: "SuperiorEducationProfile",
      dialog: false,
      alertFlag: false,
      addOnFlag: true,
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
      formatedDateOfBrith: '',
      gender: '',
      estate: 1,
      personalPhotoFile: null,
      imageUrl: '',
      idUser: this.userId,
      photoProfilePath: '',
      idExtension: '',
      idAddNumber: '',

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
        { countryName: "Ecuador", code: "EC" },
      ],

      documentTypes: [
        'Carnet de Identidad',
        'Pasaporte'
      ],
      genderType:[
        'Masculino',
        'Femenino',
        'Otro'
      ],
      cityExtension: [
        { cityName: 'Beni', code: 'BN' },
        { cityName: 'Chuquisaca', code: 'CH' },
        { cityName: 'Cochabamba', code: 'CB' },
        { cityName: 'La Paz', code: 'LP' },
        { cityName: 'Oruro', code: 'OR' },
        { cityName: 'Pando', code: 'PA' },
        { cityName: 'Potosi', code: 'PT' },
        { cityName: 'Santa Cruz', code: 'SC' },
        { cityName: 'Tarija', code: 'TJ' },
      ],

      menu: false,
    }
  },
  methods: {
    enableAddOn(flag){
      this.addOnFlag = flag
    },
    showAlert() {
      this.alertFlag = true
    },
    showNextForm() {
      let nextComponent = 'higher-education-post-degree'
      this.$emit('show-next-form', nextComponent);
    },
    addUser() {
      let newIdUser = this.email
      console.log(this.dateOfBirth)
      setDoc(doc(database, 'instructors', newIdUser), {
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
        idExtension: this.idExtension,
        idAddNumber: this.idAddNumber,
        dateOfBirth: this.format(this.dateOfBirth),
        gender: this.gender,
        photoProfilePath: this.photoProfilePath
      })
    },
    format(dateOfBirth) {
      const day = dateOfBirth.getDate();
      const month = dateOfBirth.getMonth() + 1;
      const year = dateOfBirth.getFullYear();
      let formatedBirthDate = `${day}/${month}/${year}`;
      this.dateOfBirth = formatedBirthDate;
      return formatedBirthDate;
    },
    loadPhotoFile(e) {
      this.personalPhotoFile = e.target.files[0]
      this.imageUrl = URL.createObjectURL(this.personalPhotoFile)
      console.log(this.personalPhotoFile)
    },
    uploadPhotoProfile() {
      const storage = getStorage();
      let newIdUser = this.email
      this.photoProfilePath = newIdUser + '/photoProfile' + '/' + this.personalPhotoFile.name
      const storageRef = ref(storage, this.photoProfilePath);
      uploadBytes(storageRef, this.personalPhotoFile).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      });
    },
  },

}

</script>
 