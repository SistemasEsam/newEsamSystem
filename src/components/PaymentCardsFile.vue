<script>
import { createRouter, createWebHashHistory } from 'vue-router'
import PaymentCardsPDFView from '@/views/PaymentCardsPDFView.vue'

import { database } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";


const routes = [
  {
  path: '/payment-cards-pdf/:id',
  name: 'payment-cards-pdf',
  component:PaymentCardsPDFView

 },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default {
 
  name: "PaymentCardsFile",

  props: ["paymentCardsId"],
  data() {
    return {

      paymentCardDetails: null,

      idPaymentCards: this.paymentCardsId,
      programId: "",
      nameInstructors: "",
      programType: "",
      programName: "",
      moduleName: "",
      accountName: "",
      teacherPay: "",
      bank: "",
      accountNumber: "",
      phoneNumber: "",
    };
  },


  methods: {

    async getPaymentCardDetails() {
      const paymentRequestData = await getDoc(
        doc(database, "paymentCards", this.idPaymentCards)
      );
      if (paymentRequestData.exists()) {
        this.programId = paymentRequestData.data().programId;
        this.nameInstructors = paymentRequestData.data().nameInstructors;
        this.programType = paymentRequestData.data().programType;
        this.programName = paymentRequestData.data().programName;
        this.moduleName = paymentRequestData.data().moduleName;
        this.accountName = paymentRequestData.data().accountName;
        this.teacherPay = paymentRequestData.data().teacherPay;
        this.bank = paymentRequestData.data().bank;
        this.accountNumber = paymentRequestData.data().accountNumber;
        this.phoneNumber = paymentRequestData.data().phoneNumber;
      } else {
        console.log("Document does not exist");
      }
    },
  },
  created() {
    this.getPaymentCardDetails();
  },
  router
};
</script>


<template>
  <div>
      <v-row class="color-esam fill-width" >
        <v-col cols="1">
          <br>
          <p class="white--text font-weight-bold"></p>
    </v-col>
    <v-col  cols="2">
          <br>
          <p class="white--text font-weight-bold"></p>
    </v-col>
    <v-col cols="6">
      <p class="white--text font-weight-bold">UNIVERSIDAD NACIONAL SIGLO XX</p>
      <p class="white--text font-weight-bold">ESCUEKA DE POSTGRADO</p>
      <p class="white--text font-weight-bold">COCHABAMBA</p>
    </v-col>
    <v-col cols="2">
      <br>
      <p class="white--text font-weight-bold"></p>
    </v-col>
      </v-row>
      </div>
  <div class="container">
    
      <div>
        
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p align="center"><b>INFORME</b></p>
        <p align="right">Cochabamba, 08 de diciembre de 2023</p>
        <p align="right"><b>ID: {{ this.idPaymentCards }}</b></p>
        <p>&nbsp;</p>
        <p>A: Faviola Porco Rojas</p>
        <p>CONTADORA</p>
        <p>Vía: Omar Tumiri Cruz</p>
        <p>COORDINADOR ADMINISTRATIVO REGIONAL</p>
        <p>&nbsp;</p>
        <p>DE: Milenka Ninoska Villarroel Lopez</p>
        <p>ASISTENTE DE ADMISIONES</p>
        <p>&nbsp;</p>
        <p>REF: Solicitud de cancelación de honorarios profesionales</p>
        <div align="center">
          <hr size="2" width="100%" align="center" />
        </div>
        <p>&nbsp;</p>
        <p>
          Por medio de la presente, tengo a bien informar sobre la conclusión
          del {{ this.moduleName }}: ------- del programa
          M-3475 {{ this.programName }}.
          Todos los informes requeridos ya fueron presentados por parte del
          docente a mi persona, por tanto, solicito a su persona realizar la
          cancelación del honorario al docente José Luis Ayala Sequeiros de
          acuerdo al siguiente detalle:
        </p>
        <p>
          <b>Programa:</b> {{ this.programName }}
        </p>
        <p><b>Módulo:</b> {{ this.moduleName }}. -------------</p>
        <p><b>Docente:</b>  {{ this.nameInstructors }}</p>
        <p><b>Fecha inicio:</b> -------------</p>
        <p><b>Fecha final:</b> -------------</p>
        <p><b>Remuneración:</b> {{ this.teacherPay }} (Con facturación)</p>
        <p><b>Titular de la cuenta:</b> {{ this.accountName }}</p>
        <p><b>Banco:</b> {{ this.bank }}</p>
        <p><b>Cuenta:</b>  {{ this.accountNumber }}</p>
        <p><b>Cédula de identidad:</b>-------------</p>
        <p><b>Celular:</b> {{ this.phoneNumber }}</p>
        <p>
          Para tal efecto, adjunto la fotocopia del carnet de identidad del
          titular de la cuenta.
        </p>
        <p>Sin otro particular, me despido atentamente.</p>
      </div>
  </div>
  <div>
      <v-row class="color-esam fill-width" >
        <v-col cols="2">
          <br>
          <p class="white--text font-weight-bold">wwww.esam.edu.bo</p>
    </v-col>
    <v-col cols="8">
    </v-col>
    <v-col cols="2">
      <br>
      <p class="white--text font-weight-bold">@EsacueladeNegociosESAM</p>
    </v-col>
      </v-row>
      <v-row class="yellow-bar fill-width"></v-row>
     
      </div>
</template>
<style scoped>
.container {
 display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px;
  /*height: 100vh;  Ajusta la altura según sea necesario */
}

@font-face {
  font-family: "Cambria Math";
  panose-1: 2 4 5 3 5 4 6 3 2 4;
}
@font-face {
  font-family: Calibri;
  panose-1: 2 15 5 2 2 2 4 3 2 4;
}
@font-face {
  font-family: Georgia;
  panose-1: 2 4 5 2 5 4 5 2 3 3;
}
li.MsoNormal,
p {
  margin-right: 0cm;
  margin-left: 0cm;
  font-size: 12pt;
  font-family: "Times New Roman", serif;
}
@page WordSection1 {
  size: 612pt 792pt;
  margin: 70.85pt 3cm 70.85pt 3cm;
}
.yellow-bar {
  height: 0.5cm
}
.color-esam {
  background-color:  #162D4B ; 
  height: 3cm
}
.white--text {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>

