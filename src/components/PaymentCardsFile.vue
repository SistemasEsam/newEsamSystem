<script>
import { database } from "../firebase/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export default {
  name: "Informe",

  props: ["paymentCardsId"],
  data() {
    return {
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
  created() {
    this.getPaymentCardsData();
  },

  methods: {
    async getPaymentCardsData() {
      console.log("IdeeeeeeeeeeeeeNuevoooooo", this.idPaymentCards);
      const paymentRequestData = await getDoc(
        doc(database, "paymentCards", this.idPaymentCards)
      );
      console.log("asasasasasasasasasasasas", paymentRequestData);
      console.log("Ideeeeeeeeeeeeee", this.idPaymentCards);

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
};
</script>


<template>
  <div class="component-with-shapes-and-image">
    <!-- Círculo amarillo -->
    <v-container>

          <!--     <v-avatar size="200">
    Círculo amarillo  <img id="photoProfile" :src="img" width="200" height="200">
     </v-avatar>   -->

   <!--   <div class="blue-rectangle">
        <aside class="personalProfile">
        <div>
            <p>
              hola mundo
              {{ this.idPaymentCards }}
            </p>
            <p>
              {{ this.programId }}
            </p>
            <p>
              {{ this.nameInstructors }}
            </p>
            <p>
              {{ this.programType }}
            </p>
            <p>{{ this.programName }}</p>
            <p>{{ this.moduleName }}</p>
            <p>
              {{ this.accountName }}
            </p>
            <p>
              {{ this.teacherPay }}
            </p>
            <p>
              {{ this.bank }}
            </p>
            <p>
              {{ this.accountNumber }}
            </p>
            <p>
              {{ this.phoneNumber }}
            </p>
          </div>
        </aside>
      </div> -->
    </v-container>

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
</template>
<style scoped>
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
/* Style Definitions */
p.MsoNormal,
li.MsoNormal,
div.MsoNormal {
  margin: 0cm;
  line-height: 115%;
  font-size: 11pt;
  font-family: "Arial", sans-serif;
}
p {
  margin-right: 0cm;
  margin-left: 0cm;
  font-size: 12pt;
  font-family: "Times New Roman", serif;
}
.MsoChpDefault {
  font-family: "Arial", sans-serif;
}
.MsoPapDefault {
  line-height: 115%;
}
/* Page Definitions */
@page WordSection1 {
  size: 612pt 792pt;
  margin: 70.85pt 3cm 70.85pt 3cm;
}
div.WordSection1 {
  page: WordSection1;
}
</style>

