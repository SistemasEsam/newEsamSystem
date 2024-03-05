<script setup>

import { useField, useForm } from "vee-validate";
import { database } from "@/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { ref  } from "vue";
import { doc, setDoc } from "firebase/firestore";

const searchInput = ref("");
const loading = ref(false);

const searchInputInstructors = ref("");
const loadingInstructors = ref(false);
const optionsInstructors = ref([]);
const optionsPostDegreePrograms = ref([]);

// --------------------------------------------------------------

const onSearchInstructors = async (value) => {
  searchInputInstructors.value = String(value);
  if (!searchInputInstructors.value) {
    optionsInstructors.value = [];
    return;
  }

  loadingInstructors.value = true;

  const queryInstructors = collection(database, "instructors");
  const documentsInstructors = await getDocs(queryInstructors);

  optionsInstructors.value = documentsInstructors.docs.map(
    (doc) => doc.data().name
  );
  loadingInstructors.value = false;
  console.log(optionsInstructors.value);
};
// --------------------------------------------------------------

const onSearchPostDegreePrograms = async (value) => {
  searchInput.value = String(value);
  if (!searchInput.value) {
    optionsPostDegreePrograms.value = [];

    return;
  }

  loading.value = true;

  const queryPostDegreePrograms = collection(database, "postDegreePrograms");
  const documentsPostDegreePrograms = await getDocs(queryPostDegreePrograms);

  optionsPostDegreePrograms.value = documentsPostDegreePrograms.docs.map(
    (doc) => doc.data().programName
  );
  optionsPostDegreeProgramsIdProg.value = documentsPostDegreePrograms.docs.map(
    (doc) => doc.data().programId
  );
  loading.value = false;
  console.log(optionsPostDegreePrograms.value);
  console.log(optionsPostDegreeProgramsIdProg.value);
};

const textoCancelar = "Cancelar";
const textoSeleccionar = "Seleccionar";

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    telefono(value) {
      if (value?.length > 9 && /[0-9-]+/.test(value)) return true;

      return "El número de teléfono debe tener al menos 9 dígitos.";
    },
    seleccionarBanco(value) {
      if (value) return true;

      return "Selecciona un banco";
    },
  },
});

</script>
<script>
import { getDoc, doc } from 'firebase/firestore';
import { createRouter, createWebHashHistory } from 'vue-router';
import PaymentCardsListView from '@/views/PaymentCardsListView.vue'

const routes = [
{
  path:'/payment-cards-list',
  name: 'payment-cards-list',
  component: PaymentCardsListView
}
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
})


let selectedOptionInstructors = ref(null);
let selectedOptionPrograms = ref(null);

const nombreModulo = useField("nombre");
const nroCuenta = useField("cuenta");
const pagoDocente = useField("monto");
const nombreCuenta = useField("Nombre Completo");
const selectBanco = useField("Banco");
const selectPosgrado = useField("Posgrado");
const nroCelular = useField("Numero de celular");
const itemPosgrado = ref(["Diplomado", "Maestría", "Especialidad", "Cursos"]);

const itemsBanco = ref([
  "BNB Banco Nacional de Bolivia S.A.",
  "BME Banco Mercantil Santa Cruz S.A.",
  "BIS Banco Bisa S.A.",
  "BCR Banco de Crédito de Bolivia S.A.",
  "BEC Banco Económico S.A.",
  "BGA Banco Ganadero S.A.",
  "BSO Banco Solidario S.A.",
  "BFO Banco Fortaleza S.A.",
  "BPR Banco Prodem S.A.",
]);

const addUser = async() => {
 
  let newIdPaymentCards = optionsPostDegreeProgramsIdProg.value;
    let originalId = newIdPaymentCards[0]; 

    let contador = 1; 
    const queryID = await getDocs(collection(database, "paymentCards"));
    queryID.forEach((doc) => {
        const id = doc.id;
        const secuencia = id.split('-S')[1]; 
        if (secuencia && !isNaN(secuencia)) {
            const numSecuencia = parseInt(secuencia);
            if (numSecuencia >= contador) {
                contador = numSecuencia + 1;
                console.log("ID generado contador:", contador);

            }
        }
    });

    const generateNewId = () => {
        return `${originalId}-S${contador}`;
    };

    let generatedId = generateNewId();

       setDoc(doc(database, "paymentCards",generatedId), {
        programId: newIdPaymentCards[0],
        idPaymentCards:generatedId,
        nameInstructors: selectedOptionInstructors.value,
        programType: selectPosgrado.value.value,
        programName: selectedOptionPrograms.value,
        moduleName: nombreModulo.value.value,
        accountName: nombreCuenta.value.value,
        teacherPay: pagoDocente.value.value,
        bank: selectBanco.value.value,
        accountNumber: nroCuenta.value.value,
        phoneNumber: nroCelular.value.value,
      });
      router.push({ name: 'payment-cards-list' });
    };
    const format= (dateOfBirth) => {
      const day = dateOfBirth.getDate();
      const month = dateOfBirth.getMonth() + 1;
      const year = dateOfBirth.getFullYear();
      let formatedBirthDate = `${day}/${month}/${year}`;
      this.dateOfBirth = formatedBirthDate;
      return formatedBirthDate;
    }
const optionsPostDegreeProgramsIdProg = ref([]);
export default {
 
  data() {
    return {
      fechaInicio: "",
      fechaFin: "",
    };
  },
  methods: {
    enableAddOn(flag) {
      this.addOnFlag = flag;
    },
    showAlert() {
      this.alertFlag = true;
    },
    showNextForm() {
      let nextComponent = "higher-education-post-degree";
      this.$emit("show-next-form", nextComponent, this.email);
    },

    addUser,
    format,
  },
  router
};
</script>
<template>
  <v-sheet 
  max-width="900" 
  class="ma-5 mx-auto">
    <form 
    @submit.prevent="addUser" 
    class="form-container ma-7 mx-auto">
      <h2 
      class="form-title">
        Solicitud de cancelación de honorarios profesionales
      </h2>
      <v-row>
        <v-col cols="12" md="6">
          <v-subheader>Docente</v-subheader>
          <v-autocomplete
            v-model="selectedOptionInstructors"
            :items="optionsInstructors"
            item-text="name"
            label="Seleccione un docente"
            placeholder="Ingrese el nombre o documento de identidad"
            :search-input="searchInputInstructors"
            @input="onSearchInstructors"
          ></v-autocomplete>
        </v-col>
        <v-col 
        cols="12" 
        md="4">
          <v-subheader>Codigo carta</v-subheader>
          <v-text-field 
          label="Codigo carta"
          >
          </v-text-field>
        </v-col>
        <v-col 
        cols="12" 
        md="2"
        >
        <br>
          <v-btn > Buscar </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-subheader>Postgrado</v-subheader>
          <v-select
            v-model="selectPosgrado.value.value"
            :items="itemPosgrado"
            label="Postgrado"
          ></v-select>
        </v-col>
        <v-col cols="12" md="6">
          <v-subheader>Programa</v-subheader>

          <v-autocomplete
            v-model="selectedOptionPrograms"
            :items="optionsPostDegreePrograms"
            item-text="name"
            label="Programa"
            placeholder="Ingrese el nombre del programa"
            :search-input="searchInput"
            @input="onSearchPostDegreePrograms"
          ></v-autocomplete>
        </v-col>
      </v-row>

      <v-subheader>Modulo</v-subheader>
      <v-text-field
        v-model="nombreModulo.value.value"
        :error-messages="nombreModulo.errorMessage.value"
        label="Nombre del modulo"
      ></v-text-field>
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-subheader>Fecha de inicio</v-subheader>

            <VueDatePicker
              v-model="fechaInicio"
              locale="es"
              :teleport="true"
              :enable-time-picker="false"
              placeholder="Fecha de inicio"
              :year-range="[2021, 2060]"
              :cancel-text="textoCancelar"
              :select-text="textoSeleccionar"
            >
            </VueDatePicker>
          </v-col>
          <v-col cols="12" md="6">
            <v-subheader>Fecha de fin</v-subheader>

            <VueDatePicker
              v-model="fechaFin"
              locale="es"
              :teleport="true"
              :enable-time-picker="false"
              placeholder="Fecha de fin"
              :year-range="[2021, 2060]"
              :cancel-text="textoCancelar"
              :select-text="textoSeleccionar"
            >
            </VueDatePicker>
          </v-col>
        </v-row>
      </v-container>

      <v-subheader>Titular de la cuenta</v-subheader>
      <v-text-field
        v-model="nombreCuenta.value.value"
        :error-messages="nombreCuenta.errorMessage.value"
        label="Nombre completo"
      ></v-text-field>
      <v-row>
        <v-col cols="12" md="4">
          <v-subheader>Remuneración</v-subheader>
          <v-text-field
            v-model="pagoDocente.value.value"
            :error-messages="pagoDocente.errorMessage.value"
            label="Monto"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-subheader>Banco</v-subheader>
          <v-select
            v-model="selectBanco.value.value"
            :items="itemsBanco"
            :error-messages="selectBanco.errorMessage.value"
            label="Banco:"
            tags
          ></v-select>
        </v-col>
        <v-col cols="12" md="4">
          <v-subheader>Cuenta</v-subheader>
          <v-text-field
            v-model="nroCuenta.value.value"
            :error-messages="nroCuenta.errorMessage.value"
            label="Numero de cuenta"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-subheader>Numero de Celular</v-subheader>
      <v-text-field
        v-model="nroCelular.value.value"
        :error-messages="nroCelular.errorMessage.value"
        label="Numero de Celular"
      ></v-text-field>
      <v-btn 
      class="me-4" 
      type="submit"
      > Guardar 
    </v-btn>

      <v-btn > Borrar </v-btn>
    </form>
  </v-sheet>
</template>


<style scoped>
.form-container {
  max-width: 900px;
  border: 1px solid #ccc;
  padding: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
}

.form-title {
  text-align: center;
  margin-bottom: 20px;
}
</style>